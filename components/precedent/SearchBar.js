import styles from '../../styles/Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from '@/slices/search/searchSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const router = useRouter();
  const { push } = router;
  const pagePath = '/precedent/';

  const inputValueHandler = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const movePageHandler = () => {
    push(pagePath + state.search.keyword);
  };

  return (
    <div className={styles.SearchContainer}>
      <input
        value={state.search.keyword}
        className={styles.SearchBar}
        placeholder='검색어를 입력하세요.'
        onChange={inputValueHandler}
      ></input>
      <button className={styles.SearchBtn} onClick={movePageHandler}>
        <BsSearch className={styles.SearchIcom}></BsSearch>
      </button>
    </div>
  );
}
