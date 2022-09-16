import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

export const _404 = () => {
  return (
    <>
      <Header />

      <main className="main">
        <div
          className="right"
          style={{ width: "100vw", height: "50vh", flexDirection: "column" }}
        >
          <strong style={{ fontSize: 31 }}>404</strong>
          <span>お探しのページは見つかりませんでした</span>
        </div>
      </main>

      <Footer />
    </>
  );
};
