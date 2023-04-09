import Section from '@/components/press/PressSection';
import SearchBar from '@/components/press/SearchBar';
import { setPress } from '@/slices/api/apiSlice';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Press.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { setKeyword } from '@/slices/search/searchSlice';

export default function PressHome(props) {
  const dispatch = useDispatch();
  dispatch(setPress(props));

  useEffect(() => {
    dispatch(setKeyword(''));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>언론기사 검색</div>
      <SearchBar></SearchBar>
      <div className={styles.keyword}></div>
      <Section></Section>
    </div>
  );
}

export async function getServerSideProps() {
  //뉴스 조회
  const searchWord = '교권침해';
  const encode = encodeURI(searchWord);
  const perPage = 10;
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/news.json?query=${encode}&display=${perPage}`,
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
