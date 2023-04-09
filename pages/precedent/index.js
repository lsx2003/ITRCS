import axios from 'axios';
import { useDispatch } from 'react-redux';
import Section from '@/components/precedent/PrecedentSection';
import Tab from '../../components/Tab';
import styles from '../../styles/Precedent.module.css';
import SearchBar from '@/components/SearchBar';
import { setPrecedent } from '@/slices/api/apiSlice';

const convert = require('xml-js');

export default function PrecedentHome(props) {
  console.log(props);
  const dispatch = useDispatch();

  dispatch(setPrecedent(props.PrecSearch));

  return (
    <div className={styles.container}>
      <Tab></Tab>
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
      `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=xml&query=${encode}&display=1000`,
    );
    const { data } = response;
    console.log(data);
    const xmlToJson = convert.xml2json(data, { compact: true, spaces: 4 });
    const object = JSON.parse(xmlToJson);
    return { props: object };
  } catch (err) {
    console.log(err);
  }

  return { props: {} };
}
