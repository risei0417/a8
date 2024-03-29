import Link from "next/link";

export const Logo = () => {

  return (
    <Link href="/">
      <a className="center" style={{ cursor: "pointer" }}>
        <div style={{ width: "32px", height: "32px", margin: "0 1rem" }}>
          <picture>
            <img
              src="/logo.png"
              alt="logo"
              style={{ width: "32px", height: "32px" }}
            />
          </picture>
        </div>
        <h1 style={{ fontSize: "23px", fontWeight: "normal" }}>
          mar
          <span className="color">K</span>
          one
        </h1>
      </a>
    </Link>
  );
};
