import { Footer } from "components/molecules/Footer";
import { Header } from "components/molecules/Header";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};
