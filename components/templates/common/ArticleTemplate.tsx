import { ArticleOrganism } from "components/organisms/common/ArticleOrganism";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { ArticleType } from "re-ducks/article/types";

type Props = {
  data: ArticleType;
};

export const ArticleTemplate = (props: Props) => {
  const { data } = props;

  return (
    <>
      <style>{data.style}</style>
      <Header />

      <main className="main">
        <ArticleOrganism data={data} />
      </main>

      <Footer />
    </>
  );
};
