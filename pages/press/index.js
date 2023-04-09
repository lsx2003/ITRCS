import Section from '@/components/press/PressSection';
import SearchBar from '@/components/SearchBar';
import { setPress } from '@/slices/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '../../components/Tab';
import styles from '../../styles/Press.module.css';
import axios from 'axios';

export default function PressHome(props) {
  const dispatch = useDispatch();
  dispatch(setPress(props));

  return (
    <div className={styles.container}>
      <Tab></Tab>
      <SearchBar></SearchBar>
      <Section></Section>
    </div>
  );
}

export async function getServerSideProps() {
  //뉴스 조회
  const searchWord = '교권침해';
  const encode = encodeURI(searchWord);
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/news.json?query=${encode}`,
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
    console.log(data);
    if (response.status === 200) {
      return { props: data };
    }
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
