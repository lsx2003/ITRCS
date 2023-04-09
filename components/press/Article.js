import styles from '../../styles/Press.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const parse = require('html-react-parser');

export default function Article() {
  const state = useSelector((state) => {
    return state.apiData.press;
  });

  return (
    <>
      {state.items.length === 0 ? (
        <div className={styles.notFound}>검색결과가 없습니다.</div>
      ) : null}
      {state.items &&
        state.items.map((article) => {
          const title = parse(article.title);
          const description = parse(article.description);
          return (
            <div key={article.link} className={styles.articleContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>
                <Link href={article.originallink} target='_blank' className={styles.link}>
                  {description}
                </Link>
              </div>
              <div className={styles.pubDate}>{article.pubDate.slice(0, -9)}</div>
            </div>
          );
        })}
    </>
  );
}
