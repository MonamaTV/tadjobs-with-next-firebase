import { useContext } from "react";
import { AuthContext } from "../../src/context/authProvider";
import styles from "../../styles/Admin.module.css";

const Admin = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className={styles.admin}>
      <div className="heading"></div>
      <div className={styles.companies}>
        <div className={styles.companies_list}>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img id="avatar" src="https://www.filepicker.io/api/file/OVDhvugkRiGqlkx6Gsk6/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.avatar}>
              <img src="https://www.filepicker.io/api/file/EYebocuvR6y18pfoxTdM/convert?fit=clip&h=304&w=304" alt="" />
            </div>
            <div className={styles.content}>
              <h3>Amberstone Digital</h3>
              <small>We're a remote-first, cloud-native company focused on providing high-quality technology solutions to businesses.</small>
            </div>
          </div>
        </div>
        <div className={styles.company_details}>
          <div className={styles.heading}>
            <div className={styles.contain}>
              <div className={styles.name}>
                <h5>Apple Inc.</h5>
                <a href="/admin/companies/edit">
                  {" "}
                  <img src="/assets/edit.png" alt="" />
                  <img src="/assets/delete.png" alt="" />
                </a>
              </div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <img src="/assets/website.png" alt="" />
                  <div>
                    <p>Official website</p>
                    <small>
                      <a href="/ ">Google.com</a>
                    </small>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="/assets/location.png" alt="" />
                  <div>
                    <p>Location</p>
                    <small>South Africa</small>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="/assets/workers.png" alt="" />
                  <div>
                    <p>Company size</p>
                    <small>10 - 100</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.information}>
            <div className={styles.values}>
              <h4>Vision</h4>

              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, exercitationem optio. Eveniet commodi quia eos quasi enim! Dolore
                odio, sunt aspernatur ipsam suscipit reiciendis velit exercitationem ab aliquam ad! Laudantium nostrum autem facilis et explicabo
                laboriosam, enim dolores.
              </small>
            </div>
            <div className={styles.values}>
              <h4>Mission</h4>

              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, exercitationem optio. Eveniet commodi quia eos quasi enim! Dolore
                odio, sunt aspernatur ipsam suscipit reiciendis velit exercitationem ab aliquam ad! Laudantium nostrum autem facilis et explicabo
                laboriosam, enim dolores.
              </small>
            </div>
            <div className={styles.values}>
              <h4>Values</h4>

              <small>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, exercitationem optio. Eveniet commodi quia eos quasi enim! Dolore
                odio, sunt aspernatur ipsam suscipit reiciendis velit exercitationem ab aliquam ad! Laudantium nostrum autem facilis et explicabo
                laboriosam, enim dolores.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
