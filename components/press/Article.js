import styles from '../../styles/Press.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Article() {
  const state = useSelector((state) => {
    return state.apiData.press;
  });

  return (
    <>
      {state.items &&
        state.items.map((article) => {
          const title = article.title;
          return (
            <div key={article.link} className={styles.articleContaioner}>
              <div dangerouslySetInnerHTML={{ __html: title }} className={styles.title}></div>
              <div className={styles.description}>
                <Link href={article.originallink} target='_blank' className={styles.link}>
                  {article.description
                    .replaceAll('<b>', '')
                    .replaceAll('</b>', '')
                    .replaceAll('&quot', '')}
                </Link>
              </div>
              <div className={styles.pubDate}>{article.pubDate.slice(0, -9)}</div>
            </div>
          );
        })}
    </>
  );
}
