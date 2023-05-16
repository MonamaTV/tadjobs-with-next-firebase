import React from "react";
import styles from "../../styles/Jobs.module.css";
import Link from "next/link";
import { normalDate, seniorityLevel } from "../utils/app";

const AdminJob = ({
  title,
  minSalary,
  maxSalary,
  id,
  location,
  seniority,
  addedAt,
  closingDate,
  about,
}) => {
  return (
    <div className={styles.job}>
      <div className={styles.job_info}>
        <h4 className="!flex flex-row items-center gap-3">
          <Link href={"/jobs/" + id}>
            <a target={"_blank"}>{title}</a>
          </Link>
          <p className="text-xs bg-red-600 w-20 text-center !text-white">
            {new Date() > new Date(closingDate) ? "expired" : ""}
          </p>
        </h4>
        <h6 className="text-xs">{normalDate(addedAt) || "N/A"}</h6>
        <small
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: about.slice(0, 300) + "...",
          }}
        ></small>
        <div className={styles.job_details}>
          <div className={styles.details}>
            <img
              loading="lazy"
              src="/assets/map.png"
              alt="Location of the company"
            />
            <small>{location || "N/A"}</small>
          </div>
          <div className={styles.details}>
            <img
              loading="lazy"
              src="/assets/money.png"
              alt="Salary of the job"
            />
            <small>
              R{minSalary} - R{maxSalary}
            </small>
          </div>
          <div className={styles.details}>
            <img
              loading="lazy"
              src="/assets/map.png"
              alt="Seniority of the job"
            />
            <small>{seniorityLevel(seniority)}</small>
          </div>
        </div>
        <div className={styles.menu_container}>
          <img
            loading="lazy"
            className={styles.menu}
            src="/assets/menu.png"
            alt="Menu"
          />
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
  );
};

export default AdminJob;
