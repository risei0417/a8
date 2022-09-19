import MediaQuery from "react-responsive";

type Props = {
  style?: string;
};

export const ArticleAd = (props: Props) => {
  const { style } = props;

  return (
    <div className={style}>
      <MediaQuery query="(min-width: 640px)">
        <a
          href="https://px.a8.net/svt/ejp?a8mat=3NJ1WI+AWCOFM+50+2HQO0H"
          rel="nofollow"
        >
          <picture>
            <img
              width="160"
              height="600"
              alt="ad-namae-1"
              src="https://www29.a8.net/svt/bgt?aid=220918626659&wid=001&eno=01&mid=s00000000018015073000&mc=1"
            />
          </picture>
        </a>
        <picture>
          <img
            width="1"
            height="1"
            src="https://www14.a8.net/0.gif?a8mat=3NJ1WI+AWCOFM+50+2HQO0H"
            alt="ad-namae-2"
          />
        </picture>
      </MediaQuery>
      <MediaQuery query="(max-width: 640px)">
        <a
          href="https://px.a8.net/svt/ejp?a8mat=3NJ1WI+AWCOFM+50+2HQGAP"
          rel="nofollow"
        >
          <picture>
            <img
              width="468"
              height="60"
              alt="ad-namae-1"
              src="https://www22.a8.net/svt/bgt?aid=220918626659&wid=001&eno=01&mid=s00000000018015072000&mc=1"
            />
          </picture>
        </a>
        <picture>
          <img
            width="1"
            height="1"
            src="https://www10.a8.net/0.gif?a8mat=3NJ1WI+AWCOFM+50+2HQGAP"
            alt="ad-namae-2"
          />
        </picture>
      </MediaQuery>
    </div>
  );
};
