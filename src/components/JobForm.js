import dynamic from "next/dynamic";
import styles from "./Form.module.css";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});
const JobForm = () => {
  return (
    <form className={styles.job_form}>
      <input placeholder="Title" />
      <select>
        <option>Choose Seniority</option>
        <option>Entry</option>
        <option>Intermediate</option>
        <option>Senior</option>
      </select>
      <select>
        <option>Choose company</option>
        <option>Entry</option>
        <option>Intermediate</option>
        <option>Senior</option>
      </select>
      <div className={styles.salary_range}>
        <input placeholder="Min. salary" />
        <input placeholder="Max. salary" />
      </div>
      <input type="text" placeholder="Job link" />
      <textarea placeholder="Briefly description the job" />
      <Editor
        controls={[
          ["bold", "italic", "underline", "link"],
          ["unorderedList", "h1", "h2", "h3"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        placeholder="Explain in detail... "
        id="rte"
      />
      <button className={styles.button}>Add new job</button>
    </form>
  );
};
export default JobForm;
