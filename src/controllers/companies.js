import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "./app";
import {
  addDoc,
  collection,
  where,
  getDocs,
  query,
  getDoc,
  doc,
  setDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import { getUserDetails } from "./users";

//Companies reference
const companiesRef = collection(db, "companies");

export const addNewCompany = async (company, file) => {
  const companies = await getCompanies();
  //Users are only allowed to register 10 companies
  if (companies.length > 10) return null;
  if (!file) throw new Error("Failed to upload your file.");
  const url = await addCompanyAvatar(file);
  company = { ...company, fileUrl: url };
  const response = await addDoc(companiesRef, company);
  return {
    ...response,
    id: response.id,
  };
};

export const addCompanyAvatar = async (file) => {
  try {
    const storage = getStorage();
    const imageRef = ref(storage, `avatars/${file.name}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    return null;
  }
};

export const editCompany = async (company, file, companyID) => {
  if (companyID === "") return null;
  if (file !== null) {
    let url = await addCompanyAvatar(file);
    company = { ...company, fileUrl: url };
  }
  const updatedDoc = await setDoc(doc(db, "companies", companyID), company, {
    merge: true,
  });
  return updatedDoc;
};

export const deleteCompany = async (companyID) => {
  //Before you delete the company, you need to delete all the related jobs
  // const deleteJobs = await deleteDoc()
};

export const getCompanies = async () => {
  const docs = [];
  const { userID } = getUserDetails();
  const perform = query(companiesRef, where("userID", "==", userID), limit(10));
  const results = await getDocs(perform);
  results.forEach((doc) => {
    if (!doc.exists()) return;
    docs.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return docs;
};

export const getCompany = async (companyID) => {
  if (!companyID) return null;
  const { userID } = getUserDetails();
  const perform = query(doc(db, "companies", companyID));
  const result = await getDoc(perform);
  //If the result's not exist
  if (!result.exists()) return null;
  const company = result.data();
  //If userID don't match on top of the security rules on the cloud
  if (company.userID !== userID) throw new Error("Failed to fetch company.");
  return {
    id: result.id,
    ...result.data(),
  };
};

export const getCompanyPublicInfo = async (companyID) => {
  if (!companyID) throw new Error("Failed to get company information");
  const perform = query(doc(db, "companies", companyID));
  const result = await getDoc(perform);
  //If the result's not exist
  if (!result.exists()) throw new Error("Company does not exist.");
  //If userID don't match on top of the security rules on the cloud
  return {
    id: result.id,
    ...result.data(),
  };
};

export const getCompaniesNamesAndIds = async () => {
  const companies = await getCompanies();
  return companies.map((company) => {
    return {
      id: company.id,
      name: company.name,
    };
  });
};

export const getCompaniesPublicInfo = async () => {
  //Todo: pagination, search...
  const perform = query(companiesRef, orderBy("name"), limit(20));
  const results = await getDocs(perform);
  const companies = [];
  results.forEach((company) => {
    if (!company.exists()) return null;
    companies.push({
      id: company.id,
      ...company.data(),
    });
  });
  return companies;
};
