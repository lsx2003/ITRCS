import { Fragment } from 'react';
import styles from '../../styles/Post.module.css';
import SearchBar from 'components/post/SearchBar';
import Section from 'components/post/PostSection';
import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';
import { setPosts } from '../../slices/api/apiSlice';
import { useDispatch } from 'react-redux';
import NextLink from 'next/link';

export default function PostHome({posts}) {
  const router = useRouter();
  const pathName = router.pathname;
  const currentPage = Number(router.query.page);
  const dispatch = useDispatch();
  dispatch(setPosts(posts));

  const getPreData = () => {
    router.push(path + String(currentPage - 1));
  };

  const getMoreData = () => {
    router.push(path + String(currentPage + 1));
    dispatch(setPrecedent(PrecSearch.prec));
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>사례 공유</h1>
        <p>어려운 상황을 함께 이겨나가기 위해서 각자의 소중한 경험과 정보를 함께 나눠보세요.</p>
      </div>
      <SearchBar pathName={pathName}></SearchBar>
      <div className={styles.writeWrapper}>
          <NextLink href="/post/create" className="btn-primary btn"style={{float:"right"}}>
            글쓰기
          </NextLink>
      </div>
      <Section currentPage={currentPage}></Section>
      <div className={styles.btnWrapper}>
        {currentPage !== 1 && posts?.prec?.length !== 0 ? (
          <div className={styles.prevData} onClick={getPreData}>
            이전
          </div>
        ) : null}
        {posts?.prec?.length === 10 ? (
          <div className={styles.nextData} onClick={getMoreData}>
            다음
          </div>
        ) : null}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const searchWord = '아동';
  const encode = encodeURI(searchWord);
  const page = context.query.page;
  try {
    // const response = await axios.get(
    //   `https://www.law.go.kr/DRF/lawSearch.do?OC=windxtoto123&target=prec&type=xml&query=${encode}&display=10&page=${page}`,
    // );
    // console.log("response",response);
    // const { data } = response;
    const posts = [];
    for (let i = 0; i < 20; i++) {
      const title = faker.lorem.sentence();
      const content = faker.lorem.paragraphs();
      const author = faker.person.fullName();
      const createdAt = Date(faker.date.past()).toString();

      const post = {
        title,
        content,
        author,
        createdAt,
      };
      posts.push(post);
    }
    return { props: {posts} };
  } catch (err) {
    console.log(err);
  }

  return { props: {} };
}