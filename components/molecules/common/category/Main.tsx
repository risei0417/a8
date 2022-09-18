type Props = {
  mainImage?: string;
  mainLabel?: string;
};

export const Main = (props: Props) => {
  const { mainImage, mainLabel } = props;

  return (
    <div id="wrapper">
      <picture>
        <img id="main-image" src={mainImage ?? ""} />
      </picture>
      <span id="main-label">{mainLabel}</span>
    </div>
  );
};
