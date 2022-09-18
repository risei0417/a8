import styles from "styles/common/Article.module.scss";

import { ArticleType } from "re-ducks/article/types";
import { Main } from "components/molecules/common/article/Main";

type Props = {
  data: ArticleType;
};

export const ArticleOrganism = (props: Props) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <section className={styles.article}>
        <Main
          mainTitle={data.mainTitle}
          mainImage={data.mainImage}
          mainContent={data.mainContent}
        />
      </section>
    </div>
  );
};
