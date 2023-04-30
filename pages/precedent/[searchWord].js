import Section from 'components/precedent/PrecedentSection';
import SearchBar from 'components/precedent/SearchBar';
import { setPrecedent } from 'slices/api/apiSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Precedent.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setKeyword } from 'slices/search/searchSlice';
import { useRouter } from 'next/router';

const convert = require('xml-js');

export default function PrecedentHome({ PrecSearch }) {
  const [path, setPath] = useState('');
  console.log(path);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = router.pathname;
  const currentPage = Number(router.query.page);
  dispatch(setPrecedent(PrecSearch.prec));

  const getPreData = () => {
    router.push(path + String(currentPage - 1));
  };

  const getMoreData = () => {
    router.push(path + String(currentPage + 1));
    dispatch(setPrecedent(PrecSearch.prec));
  };

  useEffect(() => {
    dispatch(setKeyword(''));
    setPath(router.asPath.slice(0, -1));
  }, []);

  useEffect(() => {
    const cancelUpload = (e) => {
      e.returnValue = '';
    };
    (() => {
      window.addEventListener('beforeunload', cancelUpload);
    })();

    return () => {
      window.removeEventListener('beforeunload', cancelUpload);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>판례 검색</h1>
        <p>키워드를 통해 다양한 판례를 검색 해보세요.</p>
      </div>
      <SearchBar pathName={pathName}></SearchBar>
      <Section currentPage={currentPage}></Section>
      <div className={styles.btnWrapper}>
        {currentPage !== 1 && PrecSearch?.prec?.length !== 0 ? (
          <div className={styles.prevData} onClick={getPreData}>
            이전
          </div>
        ) : null}
        {PrecSearch?.prec?.length === 10 ? (
          <div className={styles.nextData} onClick={getMoreData}>
            다음
          </div>
        ) : null}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchWord = context.query.searchWord;
  const encode = encodeURI(searchWord);
  const page = context.query.page;
  try {
    const response = await axios.get(
      `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=xml&query=${encode}&display=10`,
    );
    const { data } = response;
    console.log('data', data);
    const xmlToJson = convert.xml2json(data, { compact: true, spaces: 4 });
    const prec = JSON.parse(xmlToJson);

    // 판례 상세 조회 http://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=228541&type=HTML

    if (response.status === 200) {
      return { props: prec };
    }
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
