import styles from '../../styles/post/Post.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Post() {
  const posts = useSelector((state) => {
    return state.apiData.posts;
  });

  return (
    <>
      {!posts ? <div className={styles.notFound}>검색결과가 없습니다.</div> : null}
      {posts &&
        posts.map((post) => {
          {
            return (
            <div key={post.idx} className={styles.postContainer}>
              <div className={styles.title}>{post.title}</div>
              <div className={styles.description}>
                {post.content}
                {/* <Link href={article.originallink} target='_blank' className={styles.link}>
                  {description}
                </Link> */}
              </div>
              <div className={styles.pubDate}>{post.createdAt.slice(0, -9)}</div>
            </div>
            );
          }
        })}
    </>
  );
}
