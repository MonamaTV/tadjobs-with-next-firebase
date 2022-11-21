import { Timestamp } from "firebase/firestore";
import { getUserDetails } from "../controllers/users";
//All the savedjobs lasts for 30d
export const addCheckLaterJob = (jobID) => {
  const IDs = getCheckLaterJobs();
  const userID = getUserDetails()?.userID;
  //Ensure you are not adding that company again...
  if (IDs.includes(jobID)) return "Already added";
  IDs.push(jobID);
  //You can not add more than 10 companies in the check me later
  const newIDS = IDs.slice(-10);
  localStorage.setItem(userID ?? "checklater", JSON.stringify(newIDS));
  return "Added...";
};

export const addCheckLater = (jobID) => {
  const IDs = getLaterJobs();
  const userID = getUserDetails()?.userID;
  // //Ensure you are not adding that company again...
  // const contains = IDs.some(({ id }) => {
  //   return id === jobID;
  // });
  // if (contains) {
  //   return "Already added";
  // }

  if (IDs.includes(jobID)) return "Already added";
  const job = {
    id: jobID,
    addedAt: new Date().getTime(),
  };
  IDs.push(job);
  //You can not add more than 10 companies in the check me later
  const newIDS = IDs.slice(-10);
  //if the user is logged, the jobs are saved using the uid,
  localStorage.setItem(userID ?? "checklater", JSON.stringify(newIDS));
  return "Added...";
};

const getDaysBetweenDates = (recent) => {
  const diff = new Date().getTime() - recent;
  return diff / (1000 * 3600 * 24);
};

export const getLaterJobs = () => {
  const userID = getUserDetails()?.userID;
  const IDs = JSON.parse(localStorage.getItem(userID ?? "checklater")) ?? [];
  //Make sure you delete the old ones
  //Todo: remove the ones with old dates.
  return IDs;
};

export const getCheckLaterJobs = () => {
  //
  const userID = getUserDetails()?.userID;
  const IDs = JSON.parse(localStorage.getItem(userID ?? "checklater")) ?? [];
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

export const titles = [
  "Web Developer",
  "Software Engineer",
  "Software Developer",
  "Tech Lead",
  "Mobile App Developer",
  "Frontend Developer",
  "Backend Developer",
];
export const locations = ["Cape Town", "Pretoria", "Johannesburg", "Durban", "Midrand", "Sandton"];
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
