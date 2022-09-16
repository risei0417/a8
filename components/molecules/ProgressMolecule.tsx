import { Loading } from "components/atoms/Loading";
import { CSSProperties } from "react";

type Props = {
  style?: CSSProperties;
};

export const ProgressMolecule = (props: Props) => {
  const { style } = props;

  return (
    <div className="center" style={style}>
      <Loading />
    </div>
  );
};
