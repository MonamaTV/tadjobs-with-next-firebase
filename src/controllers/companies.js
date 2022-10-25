import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "./app";
import { addDoc, collection, where, getDocs, query, getDoc, doc, setDoc } from "firebase/firestore";
import { getUserDetails } from "./users";

//Companies reference
const companiesRef = collection(db, "companies");
//One doc

export const addNewCompany = async (company, file) => {

  if (!file) return null;

  const url = await addCompanyAvatar(file);
  company = { ...company, fileUrl: url };

  const response = await addDoc(companiesRef, company);
  return {
    ...response,
    id: response.id
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

  const updatedDoc = await setDoc(doc(db, "companies", companyID),
    company,
    { merge: true });

  return updatedDoc;
};

export const deleteCompany = (companyID) => { };

export const getCompanies = async () => {
  const docs = [];
  const { userID } = getUserDetails();
  const perform = query(companiesRef, where("userID", "==", userID));
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
  if (company.userID !== userID) return null;
  return {
    id: result.id,
    ...result.data(),
  };
};

export const getCompaniesNamesAndIds = async () => {
  const companies = await getCompanies();
  return companies.map(company => {
    return {
      id: company.id,
      name: company.name
    }
  });
};
