import { indexSelectors } from "re-ducks/index";
import { RootState } from "re-ducks/store";
import { useSelector } from "react-redux";
import { toDateStringBySeconds } from "utils/time";

export const InformationMolecule = () => {
  const selector = useSelector((state: RootState) => state);

  const information = indexSelectors.loadInformation(selector) ?? [];

  return (
    <div>
      {information.map((info, i) => {
        return (
          <div key={i}>
            <small>{toDateStringBySeconds(info.date?._seconds)}</small>
            <small>{info.title}</small>
            <small></small>
          </div>
        );
      })}
    </div>
  );
};
