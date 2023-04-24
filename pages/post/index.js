import { Fragment } from 'react';
import styles from '../../styles/Post.module.css';

export default function PostHome() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>사례 공유</h1>
        <p>어려운 상황을 함께 이겨나가기 위해서 각자의 소중한 경험과 정보를 함께 나눠보세요.</p>
      </div>
    </div>
  );
}
