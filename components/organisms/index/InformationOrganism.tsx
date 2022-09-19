import { InformationMolecule } from "components/molecules/index/InformationMolecule";
import styles from "styles/Index.module.scss";

export const InformationOrganism = () => {
  return (
    <section className={styles.information}>
      <h2>Info</h2>
      <InformationMolecule />
    </section>
  );
};
