import * as Yup from "yup";

export const validateCompany = () => {
  const regex =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

  return Yup.object({
    name: Yup.string().required("Please provide company name").min(2, "Company name must be at least 2 characters"),
    companySize: Yup.number("Please provide a valid number").required("Company size is a required field").min(1, "Company size has to be over 1"),
    email: Yup.string().email("Please provide a valid email").required("Email is required"),
    // about: Yup.string()
    //     .max(100, "Maximum characters is 100")
    //     .required("Please provide a brief background about your country"),
    location: Yup.object({
      country: Yup.string().required("Please provide company location, e.g South Africa"),
      city: Yup.string(),
    }),
    website: Yup.string().matches(regex, "URL is not valid").required("Please provide your company website"),
  });
};

export const validateJob = () => {
  return Yup.object({
    title: Yup.string().required("Please provide job title"),
    seniority: Yup.number().min(1, "Choose valid seniority").required("Please provide job seniority"),
    type: Yup.number().min(1, "Choose valid job type").required("Please provide job type"),
    minSalary: Yup.number().required("Min. salary for the job"),
    maxSalary: Yup.number().when("minSalary", (min, field, { value }) => {
      return Yup.number().moreThan(min, "Max. salary can't be less than min. salary").required("Plase provide max. salary for the job");
    }),
    companyID: Yup.string().min("-1", "Invalid company").required("Please choose company for this job"),
    openingDate: Yup.date().required("Please provide when the application opens"),
    closingDate: Yup.date().required("Please provide when the application closes"),
    application: Yup.string().required("Please provide the link for this job application"),
    location: Yup.string().required("Please provide where the job is based"),
  });
};

export const validateUserRegistration = () => {
  return Yup.object({
    name: Yup.string().min(2, "Your name must be at least 2 characters long").required("Please provide your name"),
    email: Yup.string().email("Please provide a valid email").required("Email is required"),
    password: Yup.string().min(8, "Your password must be at least 8 characters long").required(),
  });
};
