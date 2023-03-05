import styles from '../../styles/Press.module.css';
import { useSelector } from 'react-redux';

export default function Article() {
  const state = useSelector((state) => {
    return state.apiData.precedent;
  });
}
