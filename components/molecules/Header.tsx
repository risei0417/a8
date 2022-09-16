import { useRouter } from "next/router";
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
          <a
            onClick={() => router.push("/")}
            className="center"
            style={{ cursor: "pointer" }}
          >
            <div style={{ width: "32px", height: "32px", margin: "0 1rem" }}>
              {/* eslint-disable-next-line */}
              <img
                src="/logo.png"
                alt="logo"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <h1 style={{ fontSize: "23px", fontWeight: "normal" }}>
              mar
              <span className="color">K</span>
              one
            </h1>
          </a>
          <a
            onClick={() => router.push("/")}
            className="center link"
          >
            Home
          </a>
        </>
      )}
    </header>
  );
};
