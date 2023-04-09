import Section from '@/components/precedent/PrecedentSection';
import SearchBar from '@/components/precedent/SearchBar';
import { setPrecedent } from '@/slices/api/apiSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Precedent.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { setKeyword } from '@/slices/search/searchSlice';

const convert = require('xml-js');

export default function PrecedentHome({ PrecSearch }) {
  const dispatch = useDispatch();
  dispatch(setPrecedent(PrecSearch));

  useEffect(() => {
    dispatch(setKeyword(''));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>판례 검색</div>

      <SearchBar></SearchBar>
      <Section></Section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchWord = context.query.searchWord;
  const encode = encodeURI(searchWord);
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
