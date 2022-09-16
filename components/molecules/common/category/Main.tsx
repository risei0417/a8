type Props = {
  mainImage?: string;
  mainLabel?: string;
};

export const Main = (props: Props) => {
  const { mainImage, mainLabel } = props;

  return (
    <div id="wrapper">
      {/* eslint-disable-next-line */}
      <img id="main-image" src={mainImage} />
      <span id="main-label">{mainLabel}</span>
    </div>
  );
};
