type Props = {
  mainTitle?: string;
  mainImage?: string;
  mainContent?: string;
};

export const Main = (props: Props) => {
  const { mainTitle, mainImage, mainContent } = props;

  return (
    <>
      <h2 id="main-title">{mainTitle}</h2>
      <hr />
      <div>
        {mainImage && (
          <picture>
            <img id="main-image" src={mainImage} alt="main-image" />
          </picture>
        )}
        {mainContent && (
          <div id="main-content">
            {mainContent?.split("$n").map((content, i) => {
              if (!content.trim()) {
                return <br key={i} />;
              }
              return <p key={i}>{content}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
};
