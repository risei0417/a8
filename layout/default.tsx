import { Footer } from "parts/Footer";
import { Header } from "parts/Header";
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
