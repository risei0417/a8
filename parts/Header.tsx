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
        <a
          onClick={() => router.push("/")}
          className="center"
          style={{ cursor: "pointer" }}
        >
          <div style={{ width: "32px", height: "32px", margin: "0 1rem" }}>
            <img src="/logo.png" alt="logo" />
          </div>
          <div style={{ fontSize: "23px" }}>
            mar
            <span className="color">K</span>
            one
          </div>
        </a>
      )}
    </header>
  );
};
