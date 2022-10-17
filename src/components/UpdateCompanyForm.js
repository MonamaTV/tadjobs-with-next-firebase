import styles from "./Form.module.css";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

const UpdateCompanyForm = ({ handleChange, handleBackground, handleFileInput, handleSubmission, handleLocation, background }) => {
  return (
    <form className={styles.update_form}>
      <label className={styles.input_file}>
        <input 
          onChange={handleFileInput} 
          type={"file"} 
          accept="image/*" 
          name="file" 
        />
      </label>
      <input 
        onChange={handleChange} 
        placeholder="Company name" 
        type={"text"} 
        name="name" 
      />
      <input 
        onChange={handleChange} 
        placeholder="Company size" 
        type={"text"} 
        name="companySize" 
      />
      <input 
        onChange={handleChange} 
        placeholder="Email" 
        type={"email"} 
        name="email" 
      />
      <input 
        placeholder="Website" 
        type={"url"} 
        name="website"
        onChange={handleChange} 
      />
      <div className={styles.location}>
        <input 
          onChange={handleLocation} 
          type={"text"}
          placeholder="Country" 
          name="country" 
        />
        <input 
        onChange={handleLocation} 
        type={"text"}
          placeholder="City" 
          name="city" 
        />
      </div>
      <textarea 
        onChange={handleChange} 
        name="about" 
        placeholder="Brief background">
      </textarea>
      <Editor
        controls={[
          ["bold", "italic", "underline", "link"],
          ["unorderedList", "h1", "h2", "h3", "h4", "h5", "h6"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        value={background}
        onChange={handleBackground}
        placeholder="Organization background"
        id="rte"
      />

      <button className={styles.button} onClick={handleSubmission}>
        Add new company
      </button>
    </form>
  );
};

export default UpdateCompanyForm;
