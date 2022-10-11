import styles from "./Job.module.css";
const Job = () => {
  return (
    <div className={styles.job}>
      <div className={styles.logo}></div>
      <div className={styles.job_details}>
        <h3>Title</h3>
        <h4>Company name</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum neque necessitatibus ad saepe facere! Doloremque atque consequuntur natus
          officiis molestiae laudantium totam, eum rerum deserunt, soluta obcaecati, illo suscipit eos?
        </p>
      </div>
    </div>
  );
};

export default Job;
