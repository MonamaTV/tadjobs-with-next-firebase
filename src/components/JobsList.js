import styles from "../../styles/Job.module.css";
import { normalDate, seniorityLevel } from "../utils/app";
import { useRouter } from "next/router";
import useFetchJobs from "../hooks/useFetchJobs";

const JobList = () => {
  const router = useRouter();

  const { salary, type, seniority } = router.query;

  const { jobs } = useFetchJobs({ salary, type, seniority });

  const changeActiveClass = (e) => {
    const divs = document.querySelectorAll("[aria-checked]");
    divs.forEach((div) => {
      div.classList.remove("job_active");
    });
    //Oh, boy!
    e.target.parentElement.classList.add("job_active");
  };
  const activate = (e, id) => {
    router.query["jid"] = id;
    let newPath = router.asPath.split("&jid")[0];
    newPath += newPath.includes("?") ? "&jid=" + id : "?&jid=" + id;
    router.push(newPath);
    changeActiveClass(e);
  };

  return (
    <div className={styles.list_jobs}>
      <h5>Jobs results</h5>
      {jobs !== 0 &&
        jobs.map(({ id, title, minSalary, maxSalary, location, about, seniority, addedAt }) => (
          <div aria-checked key={id} className={styles.list_job}>
            <h3 onClick={(e) => activate(e, id)}> {title} </h3>
            <small dangerouslySetInnerHTML={{ __html: about.slice(0, 90) + "..." }}></small>
            <div className={styles.fine_details}>
              <small>{location} </small>
              <small>
                R{minSalary} - R{maxSalary}
              </small>
              <small>{seniorityLevel(seniority)}</small>
            </div>
            <small>Posted on {normalDate(addedAt)}</small>
          </div>
        ))}
    </div>
  );
};

export default JobList;
