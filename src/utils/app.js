import { Timestamp } from "firebase/firestore";

export const seniorityLevel = (level) => {
    let seniority = ""
    switch (level) {
        case "1": {
            seniority = "Entry"
            break;
        }
        case "2": {
            seniority = "Intermediate"
            break;
        }
        case "3": {
            seniority = "Senior"
            break;
        }
        default: {
            seniority = "N/A"
            break;
        }
    }
    return seniority;
}

export const normalDate = (date) => {

    if (!date) return "N/A";
    if (!date.seconds || !date.nanoseconds) return "N/A";

    let month, day, year;

    const firestoreDate = new Timestamp(date.seconds, date.nanoseconds)
        .toDate();

    month = firestoreDate.getMonth();
    day = firestoreDate.getDate();
    year = firestoreDate.getFullYear();

    return `${day}/${month}/${year}`;

}

export const jobTypes = [{
    value: 1,
    name: "Office"
}, {
    value: 2,
    name: "Remote"
}, {
    value: 3,
    name: "Hybrid"
}];

export const salaryRange = [{
    value: 1,
    name: "<10 000"
}, {
    value: 2,
    name: ">11 000"
}, {
    value: 3,
    name: ">20 000"
}, {
    value: 4,
    name: ">50 000"
}];

export const seniority = [{
    value: 1,
    name: "Entry"
}, {
    value: 2,
    name: "Intermediate"
}, {
    value: 3,
    name: "Senior"
}];