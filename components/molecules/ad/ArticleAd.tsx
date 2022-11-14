import MediaQuery from "react-responsive";

type Props = {
  style?: string;
};

export const ArticleAd = (props: Props) => {
  const { style } = props;

  return (
    <div className={style}>
      <MediaQuery query="(min-width: 640px)">
      </MediaQuery>
      <MediaQuery query="(max-width: 640px)">
      </MediaQuery>
    </div>
  );
};
