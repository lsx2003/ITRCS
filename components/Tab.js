import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Tab.module.css";
import { useRouter } from "next/router";

export default function Tab() {
  const router = useRouter();
  const pathName = router.pathname.slice(1);
  const index = pathName === "precedent" ? 0 : pathName === "press" ? 1 : 2;

  const menuArr = [
    { idx: 0, name: "판례 검색", content: "판례 검색", path: "/precedent" },
    {
      idx: 1,
      name: "언론기사 검색",
      content: "언론기사 검색",
      path: "/press",
    },
    { idx: 2, name: "사례 공유", content: "사례 공유", path: "/case" },
  ];
  const [currentTab, setCurrentTab] = useState(index);
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.tab}>
          {menuArr.map((el, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === currentTab ? `${styles.focused}` : ""
                } ${styles.list} `}
                onClick={() => selectMenuHandler(index)}
              >
                <Link className={styles.link} href={el.path}>
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
