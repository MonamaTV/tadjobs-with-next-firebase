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
    limit
} from "firebase/firestore";
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
    }
    const response = await addDoc(jobsRef, newJob);
    return {
        id: response.id,
        ...response
    }
}

export const editJob = async (job, jobID) => {
    if (jobID === "") return null;
    const updatedJob = await setDoc(doc(db, "jobs", jobID), {
        ...job,
        updatedAt: serverTimestamp()
    }, {
        merge: true
    });
    return updatedJob;
}

export const deleteJob = (job) => { }

export const getJob = async (jobID) => {
    if (jobID === "") return null;
    const perform = query(doc(db, "jobs", jobID))
    const job = await getDoc(perform);
    //If job doesn't exist
    if (!job.exists()) return null;
    return {
        id: job.id,
        ...job.data()
    }
}
//only for logged in users
export const getJobsByUser = async () => {
    const companyIDs = (await getCompaniesNamesAndIds())
        .map(company => company.id);
    if (companyIDs.length === 0) return null;
    const perform = query(jobsRef, where("companyID", "in", companyIDs));
    const documents = await getDocs(perform);
    //Jobs
    const jobs = [];
    documents.forEach(job => {
        if (!job.exists()) return;
        jobs.push({
            id: job.id,
            ...job.data()
        });
    });
    return jobs;
}
//
export const getJobsByCompany = async (companyID) => {
    if (companyID === "") return null;
    const jobs = [];
    const perform = query(jobsRef, where("companyID", "==", companyID));
    const results = await getDocs(perform);
    results.forEach(job => {
        if (!job.exists()) return null;
        jobs.push({
            id: job.id,
            ...job.data()
        });
    });
    return jobs;
}
//Public info
export const getJobs = async (title, location, sort, type, seniority, salary) => {
    //Todo: pagination, sort, search by location, and name, job type, seniority and salary range😭😩

    const jobs = [];
    const queryLocation = query(jobsRef, where("title", "==", title))
    const results = await getDocs(queryLocation, limit(10));
    results.forEach(job => {
        if (!job.exists()) return null;
        jobs.push({
            id: job.id,
            ...job.data()
        });
    });
    return jobs;
}

