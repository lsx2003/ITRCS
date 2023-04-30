import Section from 'components/press/PressSection';
import SearchBar from 'components/press/SearchBar';
import { setPress } from 'slices/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Tab from '../../components/Tab';
import styles from '../../styles/Press.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { setKeyword } from '@/slices/search/searchSlice';

export default function PressHome({ items }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = router.pathname;
  const currentPage = Number(router.query.page);

  useEffect(() => {
    dispatch(setPress(items));
    dispatch(setKeyword(''));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>언론기사 검색</h1>
        <p>키워드를 통해 관련된 언론기사를 검색 해보세요.</p>
      </div>
      <SearchBar pathName={pathName}></SearchBar>
      <Section currentPage={currentPage} items={items}></Section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const searchWord = context.query.searchWord;
  const encode = encodeURI(searchWord);
  const startPage = (Number(context.query.page) - 1) * 10 + 1;
  const perPage = 10;

  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/news.json?query=${encode}&start=${startPage}&display=${perPage}`,
      {
        headers: {
          Host: 'openapi.naver.com',
          Accept: '*/*',
          'x-naver-client-id': process.env.NEXT_PUBLIC_Naver_Client_Id,
          'x-naver-client-secret': process.env.NEXT_PUBLIC_Naver_Client_Secret,
        },
      },
    );
    const { data } = response;
    console.log('data', data);
    if (response.status === 200) {
      return { props: data };
    }
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
