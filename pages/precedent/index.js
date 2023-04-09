import axios from 'axios';
import { useDispatch } from 'react-redux';
import Section from '@/components/precedent/PrecedentSection';
import styles from '../../styles/Precedent.module.css';
import SearchBar from '@/components/precedent/SearchBar';
import { setPrecedent } from '@/slices/api/apiSlice';

const convert = require('xml-js');

export default function PrecedentHome({ PrecSearch }) {
  const dispatch = useDispatch();
  dispatch(setPrecedent(PrecSearch));

  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <Section></Section>
    </div>
  );
}
export async function getServerSideProps() {
  //판례 조회
  const searchWord = '아동';
  const encode = encodeURI(searchWord);

  try {
    const response = await axios.get(
      `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=xml&query=${encode}&display=10`,
    );
    const { data } = response;
    console.log(data);
    const xmlToJson = convert.xml2json(data, { compact: true, spaces: 4 });
    const prec = JSON.parse(xmlToJson);
    return { props: prec };
  } catch (err) {
    console.log(err);
  }

  return { props: {} };
}
