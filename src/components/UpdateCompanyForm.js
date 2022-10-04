import styles from "./Form.module.css";
import { RichTextEditor } from "@mantine/rte";
import { useState } from "react";
const UpdateCompanyForm = () => {
  const [value, onChange] = useState("");
  return (
    <form className={styles.update_form}>
      <input placeholder="Company name" />
      <input placeholder="Email" />
      <input placeholder="Website" type={"url"} />
      <input placeholder="Email" type={"email"} />
      <div className={styles.location}>
        <input placeholder="Country" />
        <input placeholder="City" />
      </div>
      <RichTextEditor
        controls={[
          ["bold", "italic", "underline", "link"],
          ["unorderedList", "h1", "h2", "h3"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        value={value}
        onChange={onChange}
        placeholder="Write your organization"
        id="rte"
      />
    </form>
  );
};

export default UpdateCompanyForm;
