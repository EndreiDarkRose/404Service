import styles from "./InfoLink.module.scss";

const InfoLink = ({ title, description }) => {
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
