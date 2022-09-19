import { Welcome } from "components/organisms/index/Welcome";
import { InformationOrganism } from "components/organisms/index/InformationOrganism";
import { Header } from "components/organisms/Header";
import { Footer } from "components/organisms/Footer";
import { CategoriesOrganism } from "components/organisms/index/CategoriesOrganism";

export const Index = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div style={{ minHeight: "100vh" }}>
          <Welcome />
          <InformationOrganism />
          <CategoriesOrganism />
        </div>
      </main>

      <Footer />
    </>
  );
};
