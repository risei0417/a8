import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";
import { ProgressOrganism } from "components/organisms/ProgressOrganism";

export const ProgressTemplate = () => {
  return (
    <>
      <Header />

      <main className="main">
        <ProgressOrganism />
      </main>

      <Footer />
    </>
  );
};
