import { HeaderLinks } from "components/molecules/HeaderLinks";
import { Logo } from "components/molecules/Logo";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => setLoading(router.isReady), [router.isReady]);

  return (
    <header className="header left">
      {!loading && <div className="load" />}
      {loading && (
        <>
          <Logo onClick={() => router.push("/")} />
          <HeaderLinks />
        </>
      )}
    </header>
  );
};
