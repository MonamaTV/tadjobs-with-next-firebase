import styles from "../../../styles/Jobs.module.css";
import Link from "next/link";
import { useQuery } from "react-query";
import { getJobsByUser } from "../../../src/controllers/jobs";
import { normalDate, seniorityLevel } from "../../../src/utils/app";
import Meta from "../../../src/components/Meta";
import Loading from "../../../src/components/Loading";
import { useState } from "react";
const Jobs = () => {
  const [sort, setSort] = useState("1");
  const { data, isLoading } = useQuery(["jobs", sort], () => getJobsByUser(sort));
  if (isLoading) {
    return (
      <div className={styles.jobs}>
        <div className={styles.job}>
          <Loading />
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className={styles.jobs}>
        <div className={styles.job}>
          <h3>No jobs yet...</h3>
        </div>
      </div>
    );
  }

  const handleSortInput = (e) => {
    const value = e.target.value;
    if (value === "-1") return null;
    setSort(value);
  };

  return (
    <div className={styles.jobs}>
      <Meta title={"TadJobs - all the jobs"} />
      <div className={styles.options}>
        <Link href="/admin/jobs/add">
          <a>
            <img src="/assets/plus.png" alt="" />
            Add
          </a>
        </Link>
        <select onChange={handleSortInput}>
          <option value="-1">SORT</option>
          <option value="1">By date</option>
          <option value="2">By job type</option>
        </select>
      </div>
      {data.map(({ title, minSalary, maxSalary, id, location, seniority, addedAt, about }) => (
        <div key={id} className={styles.job}>
          <div className={styles.job_info}>
            <h4>
              <Link href={"/jobs/" + id}>
                <a target={"_blank"}>{title}</a>
              </Link>
            </h4>
            <h6>{normalDate(addedAt) || "N/A"}</h6>
            <small className={styles.desc} dangerouslySetInnerHTML={{ __html: about.slice(0, 300) + "..." }}></small>
            <div className={styles.job_details}>
              <div className={styles.details}>
                <img loading="lazy" src="/assets/map.png" alt="Location of the company" />
                <small>{location || "N/A"}</small>
              </div>
              <div className={styles.details}>
                <img loading="lazy" src="/assets/money.png" alt="Salary of the job" />
                <small>
                  R{minSalary} - R{maxSalary}
                </small>
              </div>
              <div className={styles.details}>
                <img loading="lazy" src="/assets/map.png" alt="Seniority of the job" />
                <small>{seniorityLevel(seniority)}</small>
              </div>
            </div>
            <div className={styles.menu_container}>
              <img loading="lazy" className={styles.menu} src="/assets/menu.png" alt="Menu" />
              <div className={styles.show_menu}>
                <Link href={"/admin/jobs/" + id}>
                  <a>Edit</a>
                </Link>
                <a href="">Share job</a>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Jobs;
