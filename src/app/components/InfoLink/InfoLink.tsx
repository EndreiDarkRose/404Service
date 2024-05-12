import styles from "./InfoLink.module.scss";
interface InfoLinkProps {
  title: string;
  description: string;
}
const InfoLink = ({ title, description }: InfoLinkProps) => {
  return (
    <div className={styles.card}>
      <h2>
        {title}
        {/* <span>-&gt;</span> */}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default InfoLink;
