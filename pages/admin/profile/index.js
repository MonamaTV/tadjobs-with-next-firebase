import styles from "../../../styles/Profile.module.css";
import { addUserName, getUserDetails } from "../../../src/controllers/users";
import { getJobsByUser } from "../../../src/controllers/jobs";
import { useQuery } from "react-query";
import AboutJob from "../../../src/components/AboutJob";
import Loading from "../../../src/components/Loading";
import Modal from "../../../src/components/Modal";
import { useState } from "react";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [verify, setVerify] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const user = getUserDetails();
  const { data: jobs, isLoading } = useQuery("jobs", getJobsByUser);

  const [userName, setUserName] = useState(user.name ?? "");
  if (isLoading) {
    return <Loading />;
  }

  const verifyModal = () => {
    setVerify(!verify);
  };

  const updateDisplayName = async (e) => {
    e.target.disabled = true;
    try {
      if (!userName) return;
      await addUserName(userName);
      setModal(false);
    } catch (error) {
      e.target.disabled = false;
      console.log(error);
    }
  };

  return (
    <div className={styles.profile}>
      <h3>Welcome back, {user.name}</h3>
      <small>You are logged in as {user.email}</small>
      <div className={styles.attention}>
        <h4>Verify your account</h4>
        <small>
          All new registered accounts need to be verified before they start adding jobs and companies on the platform. We are trying to minimize spam
          accounts advertising jobs here on TadJobs
        </small>
        {!user?.verified && <button onClick={verifyModal}>Verify</button>}
        <span onClick={handleModal}>Update account</span>
      </div>
      <h5>Your stats</h5>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/assets/home.png" alt="Companies" />
          <div>
            <h4>Companies</h4>
            <small>8</small>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/assets/jobs.png" alt="Jobs" />
          <div>
            <h4>Jobs</h4>
            <small>8</small>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/assets/ana.png" alt="Analytics" />
          <div>
            <h4>Jobs views</h4>
            <small>1000+</small>
          </div>
        </div>
      </div>
      <div className={styles.recent}>
        <h5>Recently added jobs</h5>
        {jobs.slice(0, 6).map((job) => {
          return <AboutJob {...job} key={job.id} />;
        })}
      </div>
      {modal && (
        <Modal title={"Update your name"} handleModal={handleModal}>
          <div className={styles.update}>
            <h5>You can only update your name at the moment. </h5>
            <input value={userName} type="text" placeholder="Your name" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={updateDisplayName}>Update</button>
          </div>
        </Modal>
      )}
      {verify && (
        <Modal title={"Verify account"} handleModal={verifyModal}>
          <div className={styles.update}>
            <h5>Verify your account and unlock the magic!</h5>
            <button>Verify</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default Profile;
