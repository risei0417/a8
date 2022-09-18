import Link from "next/link";
import { CategoryArticleType } from "re-ducks/category/types";
import styles from "styles/common/Category.module.scss";
import { lineBreak } from "utils/line-break";

type Props = {
  categoryId?: string;
  dataList: CategoryArticleType[];
};

export const Articles = (props: Props) => {
  const { categoryId, dataList } = props;

  return (
    <div id="articles" className={styles.articles}>
      <h2 className={styles.title}>Articles</h2>
      {dataList.length === 0 ? (
        <div className="center">まだ記事がありません</div>
      ) : (
        <ol className={styles.list}>
          {dataList.map((article: CategoryArticleType) => {
            return (
              <li key={article.link} className="animate__shakeX">
                <Link href={`/common/${categoryId}/${article.link}`}>
                  <a
                    className="left"
                    style={{ cursor: "pointer" }}
                  >
                    <picture>
                      <img src={article.banner ?? ""} alt="banner#57" />
                    </picture>
                    {article.title}
                  </a>
                </Link>
                <span>{lineBreak(article.description ?? "")}</span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
