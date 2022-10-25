import styles from "../../../styles/Jobs.module.css";
import Link from "next/link";
import { useQuery } from "react-query";
import { getJobsByUser } from "../../../src/controllers/jobs";
const Jobs = () => {


  const { data } = useQuery("jobs", getJobsByUser);
  console.log(data);


  return (
    <div className={styles.jobs}>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/admin/jobs/edit">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/admin/jobs/edit">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.job}>
        <div className={styles.company_img}>
          <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
        </div>
        <div className={styles.job_info}>
          <h4>Senior Product Engineer</h4>
          <p>Facebook</p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit vero deserunt cum quibusdam laborum. Doloremque eligendi voluptatum
            sapiente commodi.
          </small>
          <div className={styles.job_details}>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Location of the company" />
              <small>Johannesburg</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/money.png" alt="Salary of the job" />
              <small>R20 000 - R40 000</small>
            </div>
            <div className={styles.details}>
              <img src="/assets/map.png" alt="Seniority of the job" />
              <small>Senior</small>
            </div>
          </div>
          <div className={styles.menu_container}>
            <img className={styles.menu} src="/assets/menu.png" alt="Menu" />
            <div className={styles.show_menu}>
              <Link href="/">
                <a>Edit</a>
              </Link>
              <a href="">Share job</a>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
