import { db } from "./app";

import { serverTimestamp, Timestamp, addDoc, collection, where, getDocs, query, getDoc, doc, setDoc, orderBy, limit } from "firebase/firestore";
import { getCompaniesNamesAndIds } from "./companies";

const jobsRef = collection(db, "jobs");

export const addJob = async (job) => {
  //Few metrics
  const newJob = {
    ...job,
    views: 0,
    clickThrough: 0,
    addedAt: Timestamp.now(),
    updatedAt: "",
  };
  const response = await addDoc(jobsRef, newJob);
  return {
    id: response.id,
    ...response,
  };
};

export const editJob = async (job, jobID) => {
  if (jobID === "") return null;
  const updatedJob = await setDoc(
    doc(db, "jobs", jobID),
    {
      ...job,
      updatedAt: serverTimestamp(),
    },
    {
      merge: true,
    }
  );
  return updatedJob;
};

export const deleteJob = (job) => {};

export const getJob = async (jobID) => {
  if (jobID === "") return null;
  const perform = query(doc(db, "jobs", jobID));
  const job = await getDoc(perform);
  //If job doesn't exist
  if (!job.exists()) return null;
  return {
    id: job.id,
    ...job.data(),
  };
};
//only for logged in users
export const getJobsByUser = async () => {
  const companyIDs = (await getCompaniesNamesAndIds()).map((company) => company.id);
  if (companyIDs.length === 0) return null;
  const perform = query(jobsRef, where("companyID", "in", companyIDs));
  const documents = await getDocs(perform);
  //Jobs
  const jobs = [];
  documents.forEach((job) => {
    if (!job.exists()) return;
    jobs.push({
      id: job.id,
      ...job.data(),
    });
  });
  return jobs;
};
//
export const getJobsByCompany = async (companyID) => {
  if (companyID === "") return null;
  const jobs = [];
  const perform = query(jobsRef, where("companyID", "==", companyID));
  const results = await getDocs(perform);
  results.forEach((job) => {
    if (!job.exists()) return null;
    jobs.push({
      id: job.id,
      ...job.data(),
    });
  });
  return jobs;
};
//Public info
export const getJobs = async (title, location, type, seniority, salary) => {
  // Salary: less than 15000, less than 25000, over 25000, less than 25k by default
  //
  //Todo: pagination, sort, search by location, and name, job type, seniority and salary range😭😩
  //Build compound query based on the values provided...
  let compoundQuery = query(jobsRef);
  if (type !== "-1" && type) {
    compoundQuery = query(compoundQuery, where("type", "==", type));
  }
  if (seniority !== "-1" && seniority) {
    compoundQuery = query(compoundQuery, where("seniority", "==", seniority));
  }
  if (salary !== "-1" && salary) {
    compoundQuery = query(compoundQuery, salaryQuery(salary));
  }

  const jobs = [];
  const results = await getDocs(compoundQuery);

  results.forEach((job) => {
    if (!job.exists()) return null;
    jobs.push({
      id: job.id,
      ...job.data(),
    });
  });
  return jobs;
};

const salaryQuery = (salary) => {
  let jobs;
  switch (salary) {
    case "1": {
      //Salary <15000
      jobs = where("maxSalary", "<=", "15000");
      break;
    }
    case "2": {
      //Job over 15000 & < 25000
      jobs = where("maxSalary", ">=", "15000");
      break;
    }
    case "3": {
      //Over 25000
      jobs = where("maxSalary", ">=", "25000");
      break;
    }
    case "4": {
      //Over 25000
      jobs = where("maxSalary", ">=", "50000");
      break;
    }
    default: {
      jobs = where("maxSalary", ">", "");
      break;
    }
  }
  return jobs;
};

//TODO: All job search using location and title, even though Firestore doesn't support indexing natively
export const searchJobs = () => {};

export const incrementViews = (JobID) => {};

export const incrementClickThrough = (jobID) => {};
