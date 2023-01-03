import { db } from "./app";

import {
  serverTimestamp,
  Timestamp,
  addDoc,
  collection,
  where,
  getDocs,
  query,
  getDoc,
  doc,
  setDoc,
  orderBy,
  documentId,
} from "firebase/firestore";
import { getCompaniesNamesAndIds } from "./companies";

const jobsRef = collection(db, "jobs");

export const addJob = async (job) => {
  //Few metrics
  const newJob = {
    ...job,
    views: [],
    clickThrough: [],
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
  if (jobID === "" || !jobID)
    throw new Error("Invalid request. Can't edit the job");
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
  if (!job.exists()) throw new Error("Job does not exist");
  return {
    id: job.id,
    ...job.data(),
  };
};
//only for logged in users
export const getJobsByUser = async (sort) => {
  const field = sort === "1" ? "addedAt" : "type";

  const companyIDs = (await getCompaniesNamesAndIds()).map(
    (company) => company.id
  );
  if (companyIDs.length === 0) throw new Error("No companies to fetch");
  const perform = query(
    jobsRef,
    where("companyID", "in", companyIDs),
    orderBy(field)
  );
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
  if (companyID === "" || !companyID)
    throw new Error("Invalid company id provided");
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
export const getJobs = async (type, seniority, salary) => {
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

//Could have easily getJobs and filterJobsByTitleAndLocation functions to be one function... but UX forced me to implement them differently
export const filterJobsByTitleAndLocation = async (titles, location) => {
  const jobs = [];
  const compound = query(jobsRef);
  if (titles.length !== 0) {
    compound = query(compound, where("title", "in", titles));
  }
  if (location !== "" && location) {
    compound = query(compound, where("location", "==", location));
  }

  const results = await getDocs(compound);
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
      //Job over 15000
      jobs = where("maxSalary", ">", "15000");
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

export const incrementViews = (JobID) => {};

export const incrementClickThrough = (jobID) => {};

// Todo: Make sure all the jobs are the ones that have not reached their closing date

export const getJobsSavedByUser = async (JobIDs) => {
  //Terminate as early as possible
  if (JobIDs.length === 0) throw new Error("Invalid request");
  //Get the jobs the user has saved to check later
  const perform = query(jobsRef, where(documentId(), "in", JobIDs));
  const results = await getDocs(perform);
  const jobs = [];
  results.forEach((job) => {
    if (!job.exists()) return;
    jobs.push({
      id: job.id,
      ...job.data(),
    });
  });
  return jobs;
};
