import { DefaultLayout } from "layout/default";

export const Parts404 = () => {
  return (
    <DefaultLayout>
      <div
        className="right"
        style={{ width: "100vw", height: "50vh", flexDirection: "column" }}
      >
        <strong style={{ fontSize: 31 }}>404</strong>
        <span>お探しのページは見つかりませんでした</span>
      </div>
    </DefaultLayout>
  );
};
