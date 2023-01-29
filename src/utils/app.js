import { Timestamp } from "firebase/firestore";
import { getUserDetails } from "../controllers/users";

export const addJobInCheckLater = (jobID) => {
  const savedJobs = getCheckLaterJobs();
  const userID = getUserDetails()?.userID;
  // //Ensure you are not adding that company again...
  const contains = savedJobs.find(({ id }) => {
    return id === jobID;
  });

  if (contains) {
    return "Already added";
  }

  const job = {
    id: jobID,
    addedAt: new Date().getTime(),
  };
  savedJobs.push(job);
  //You can not add more than 10 companies in the check me later
  const newIDS = savedJobs.slice(-10);
  //if the user is logged, the jobs are saved using the uid,
  localStorage.setItem(userID ?? "checklater", JSON.stringify(newIDS));
  return "Added...";
};

export const getDaysBetweenDates = (dateJobSaved) => {
  const diff = new Date().getTime() - dateJobSaved;
  //Remove the decimal point before we convert the value to an int because we are using it for calculations
  return parseInt((diff / (1000 * 3600 * 24)).toFixed(0));
};

export const getCheckLaterJobs = () => {
  const userID = getUserDetails()?.userID;
  //Get items that were saved using the userID as the key, but for not signed in users, get items using the 'checklater' key. If both cases are false, return an empty array
  const IDs = JSON.parse(localStorage.getItem(userID ?? "checklater")) ?? [];
  //Make sure you delete the old ones
  //Todo: remove the ones with old dates.
  const newIDS = IDs.filter(({ addedAt }) => {
    //Removing old saved jobs
    if (getDaysBetweenDates(addedAt) <= 30) return true;
    else return false;
  });
  //Save the newly filtered array in the checklater
  localStorage.setItem(userID ?? "checklater", JSON.stringify(newIDS));

  return IDs;
};

export const seniorityLevel = (level) => {
  let seniority = "";
  switch (level) {
    case "1": {
      seniority = "Entry";
      break;
    }
    case "2": {
      seniority = "Intermediate";
      break;
    }
    case "3": {
      seniority = "Senior";
      break;
    }
    case "4": {
      seniority = "Internship";
      break;
    }
    default: {
      seniority = "N/A";
      break;
    }
  }
  return seniority;
};

export const normalDate = (date) => {
  if (!date) return "N/A";
  if (!date.seconds || !date.nanoseconds) return "N/A";

  let month, day, year;
  const firestoreDate = new Timestamp(date.seconds, date.nanoseconds).toDate();

  month = firestoreDate.getMonth() + 1;
  day = firestoreDate.getDate();
  year = firestoreDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export const jobTypes = [
  {
    value: 1,
    name: "Office",
  },
  {
    value: 2,
    name: "Remote",
  },
  {
    value: 3,
    name: "Hybrid",
  },
];

export const salaryRange = [
  {
    value: 1,
    name: "<R15 000",
  },
  {
    value: 2,
    name: ">R15 000",
  },
  {
    value: 3,
    name: ">R25 000",
  },
  {
    value: 4,
    name: ">R50 000",
  },
];

export const seniority = [
  {
    value: 1,
    name: "Junior",
  },
  {
    value: 2,
    name: "Intermediate",
  },
  {
    value: 3,
    name: "Senior",
  },
  {
    value: 4,
    name: "Internship",
  },
];

export const titles = [
  "Web Developer",
  "Software Engineer",
  "Software Developer",
  "Tech Lead",
  "Mobile App Developer",
  "Frontend Developer",
  "Backend Developer",
];
export const locations = [
  "Cape Town",
  "Pretoria",
  "Johannesburg",
  "Durban",
  "Midrand",
  "Sandton",
];
export const stacks = [
  "JS",
  "TS",
  "C#",
  "Java",
  "DotNet",
  "React",
  "React Native",
  "HTML5/CSS3",
  "Android",
  "Kotlin",
  "Flutter",
  "Dart",
  "Rust",
  "Ruby",
  "C",
  "C++",
  "AWS",
  "Go Lang",
  "Ionic",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "PHP",
  "Scala",
  "Spring",
  "Angular",
  "Cloud Functions",
  "GraphQL",
  "REST",
  "MEAN",
  "MEAN",
  "PERN",
  "Firebase",
];

export const departments = [
  { name: "Marketing Agency", value: 1 },
  { name: "Motor", value: 2 },
  { name: "Insurance", value: 3 },
  { name: "Banking", value: 4 },
  { name: "FinTech", value: 5 },
  { name: "Education", value: 6 },
  { name: "Software", value: 7 },
];
