import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getCompany } from "../../../src/controllers/companies";
import styles from "../../../styles/Admin.module.css";


const CompanyDetails = () => {

    const router = useRouter();

    const { id } = router.query;

    console.log(id);

    const {
        data: company,
        isLoading,
        isError,
    } = useQuery(["companies", id], () => {
        return getCompany(id);
    });


    if (isLoading) {
        return (
            <div className={styles.company_details}>
                <div className={styles.heading}>
                    <div className={styles.contain}>
                        <div className={styles.name}>
                            <h2>Loading...</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.company_details}>
            <div className={styles.heading}>
                <div className={styles.contain}>
                    <div className={styles.name}>
                        <h5>{company.name}</h5>
                        <a href={"/admin/companies/edit/" + id}>
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
                                    <a href="/ ">{company?.website}</a>
                                </small>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src="/assets/location.png" alt="" />
                            <div>
                                <p>Location</p>
                                <small>{company.location.country}</small>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src="/assets/workers.png" alt="" />
                            <div>
                                <p>Company size</p>
                                <small>{company.companySize}+</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.information}>
                <div
                    className={styles.values}
                    dangerouslySetInnerHTML={{ __html: company.background }}>
                </div>
            </div>
        </div>
    )
};

export default CompanyDetails;