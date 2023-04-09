import Section from '@/components/press/PressSection';
import SearchBar from '@/components/press/SearchBar';
import { setPress } from '@/slices/api/apiSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../styles/Press.module.css';
import axios from 'axios';

export default function PressHome(props) {
  const dispatch = useDispatch();
  dispatch(setPress(props));
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className={styles.container}>
      <SearchBar pathName={pathName}></SearchBar>
      <Section></Section>
    </div>
  );
}

export async function getServerSideProps(context) {
  //뉴스 조회
  const searchWord = context.query.searchWord;
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
