import { CategoryType } from "re-ducks/category/types";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { CategoryOrganism } from "components/organisms/common/CategoryOrganism";

type Props = {
  data: CategoryType;
};

export const CategoryTemplate = (props: Props) => {
  const { data } = props;

  return (
    <>
      <style>{data.style}</style>

      <Header />

      <main className="main">
        <CategoryOrganism data={data} />
      </main>
      <Footer />
    </>
  );
};
