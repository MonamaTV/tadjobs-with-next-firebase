import styles from "./Form.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const UpdateCompanyForm = () => {
  const [value, onChange] = useState("");
  return (
    <form className={styles.update_form}>
      <label className={styles.input_file}>
        <input type={"file"} accept="*png" />
      </label>
      <input placeholder="Company name" name="name" />
      <input placeholder="Email" name="email" />
      <input placeholder="Website" type={"url"} name="website" />
      <input placeholder="Email" type={"email"} />
      <div className={styles.location}>
        <input placeholder="Country" />
        <input placeholder="City" />
      </div>
      <Editor
        controls={[
          ["bold", "italic", "underline", "link"],
          ["unorderedList", "h1", "h2", "h3"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        value={value}
        onChange={onChange}
        placeholder="Organization background"
        id="rte"
      />
      <button className={styles.button}>Add new company</button>
    </form>
  );
};

export default UpdateCompanyForm;
