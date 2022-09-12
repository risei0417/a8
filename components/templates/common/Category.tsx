import { useRouter } from "next/dist/client/router";
import { useMemo } from "react";
import { CategoryArticleType, CategoryType } from "re_ducks/category/types";
import styles from "styles/common/Category.module.scss";
import { lineBreak } from "utils/lineBreak";

type Props = {
  data: CategoryType;
};

export const Category = (props: Props) => {
  const { data } = props;
  const router = useRouter();

  const articles = useMemo(() => data.articles ?? [], [data.articles]);

  return (
    <>
      <style>{data.style}</style>
      <div id="container" style={{ paddingBottom: "3rem" }}>
        <div id="wrapper">
          {/* eslint-disable-next-line */}
          <img id="main-image" src={data.mainImage} />
          <span id="main-label">{data.mainLabel}</span>
        </div>
        <div id="articles" className={styles.articles}>
          <h2 className={styles.title}>Articles</h2>
          {articles.length === 0 ? (
            <div className="center">まだ記事がありません</div>
          ) : (
            <ol className={styles.list}>
              {articles.map((article: CategoryArticleType) => {
                return (
                  <li key={article.link} className="animate__shakeX">
                    <a
                      className="left"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push(`/common/${data.id}/${article.link}`)
                      }
                    >
                      {/* eslint-disable-next-line */}
                      <img src={article.banner} alt="banner" />
                      {article.title}
                    </a>
                    <span>{lineBreak(article.description ?? "")}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </>
  );
};
