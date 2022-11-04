import { Timestamp } from "firebase/firestore";
import { getUserDetails } from "../controllers/users";

export const addCheckLaterJob = (jobID) => {
  const IDs = getCheckLaterJobs();
  const userID = getUserDetails().userID;
  //Ensure you are not adding that company again...
  if (IDs.includes(jobID)) return "Already added";
  IDs.push(jobID);
  //You can not add more than 10 companies in the check me later
  const newIDS = IDs.slice(-10);
  localStorage.setItem(userID, JSON.stringify(newIDS));
  return "Added...";
};

export const getCheckLaterJobs = () => {
  const IDs = JSON.parse(localStorage.getItem(userID)) ?? [];
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

  month = firestoreDate.getMonth();
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
    name: "<15 000",
  },
  {
    value: 2,
    name: ">15 000",
  },
  {
    value: 3,
    name: ">25 000",
  },
  {
    value: 4,
    name: ">50 000",
  },
];

export const seniority = [
  {
    value: 1,
    name: "Entry",
  },
  {
    value: 2,
    name: "Intermediate",
  },
  {
    value: 3,
    name: "Senior",
  },
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
