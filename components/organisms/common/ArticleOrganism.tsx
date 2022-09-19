import adStyles from "styles/Ad.module.scss";
import styles from "styles/common/Article.module.scss";

import { ArticleType } from "re-ducks/article/types";
import { Main } from "components/molecules/common/article/Main";
import { ArticleAd } from "components/molecules/ad/ArticleAd";

type Props = {
  data: ArticleType;
};

export const ArticleOrganism = (props: Props) => {
  const { data } = props;

  return (
    <div className={adStyles.container}>
      <ArticleAd style={adStyles.ad1} />
      <div className={styles.wrapper}>
        <section className={styles.article}>
          <Main
            mainTitle={data.mainTitle}
            mainImage={data.mainImage}
            mainContent={data.mainContent}
          />
        </section>
      </div>
      <ArticleAd style={adStyles.ad2} />
    </div>
  );
};
