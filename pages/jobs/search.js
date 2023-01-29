import { useEffect, useState } from "react";
import Meta from "../../src/components/Meta";
import Job from "../../src/components/Job";
import Loading from "../../src/components/Loading";
import Nav from "../../src/components/Nav";
import Radio from "../../src/components/Radio";
import useFetchJobs from "../../src/hooks/useFetchJobs";
import {
  jobTypes,
  locations,
  salaryRange,
  seniority,
  titles,
} from "../../src/utils/app";
import styles from "../../styles/Search.module.css";
import Dropdown from "../../src/components/Dropdown";
import { filterJobsByTitleAndLocation } from "../../src/controllers/jobs";
import DropdownRadio from "../../src/components/DropdownRadio";

const Jobs = () => {
  //By default all filters are set to -1, meaning they aren't included in the first search
  const [filters, setFilters] = useState({
    type: "-1",
    seniority: "-1",
    salary: "-1",
  });

  //Search by locations, or titles
  const [searchTitles, setSearchTitles] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  //The query for job search
  const query = `type=${filters.type}&salary=${filters.salary}&seniority=${filters.seniority}`;

  const [displayJobs, setDisplayJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { jobs, isLoading } = useFetchJobs(filters);

  useEffect(() => {
    setLoading(isLoading);
    setDisplayJobs(jobs);
  }, [jobs, isLoading]);

  if (!jobs) {
    return <Loading />;
  }

  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      type: "-1",
      seniority: "-1",
      salary: "-1",
    });

    //Uncheck the checked
    const boxes = document.querySelectorAll("#checkboxes input");
    boxes.forEach((box) => {
      box.checked = false;
    });
  };

  const handleLocations = (ev) => {
    setSearchLocation(ev.target.value);
  };

  const handleTitles = (ev) => {
    if (ev.target.checked) {
      setSearchTitles([ev.target.name, ...searchTitles]);
    } else {
      setSearchTitles((prev) =>
        prev.filter((title) => {
          return title !== ev.target.name;
        })
      );
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await filterJobsByTitleAndLocation(
        searchTitles,
        searchLocation
      );
      setDisplayJobs(results);
    } catch (error) {
      jobs = [];
    }
    setLoading(false);
  };

  return (
    <div className={styles.jobs}>
      <Meta title="Tadjobs - see all the available jobs" />
      <Nav text="Post a job" bg={true} />
      <div className={styles.searches}>
        <div className={styles.title_input}>
          <div className={styles.drop}>
            <span>
              {searchTitles.length !== 0 ? (
                <span>{searchTitles[0] + " & more"}</span>
              ) : (
                "Title"
              )}
            </span>
          </div>
          <Dropdown options={titles} handleChange={handleTitles} />
        </div>
        <div className={styles.title_input}>
          <div className={styles.drop}>
            <span>{searchLocation ? searchLocation : "Location"}</span>
          </div>
          <DropdownRadio options={locations} handleChange={handleLocations} />
        </div>
        <button type="submit" onClick={handleSearch}>
          <img alt="Search icon" src="/assets/search.png" />
        </button>
      </div>

      <small className={styles.smalls}>
        {" "}
        Search results: {displayJobs.length} jobs
      </small>

      <div className={styles.results}>
        <div className={styles.filter} id="checkboxes">
          <Radio
            name="type"
            handleChange={handleFilters}
            options={jobTypes}
            label={"Job type"}
          />
          <Radio
            name="seniority"
            handleChange={handleFilters}
            options={seniority}
            label="Seniority"
          />
          <Radio
            name="salary"
            handleChange={handleFilters}
            options={salaryRange}
            label={"Salary"}
          />
          <button onClick={clearFilters}>Clear filters</button>
        </div>
        <div className={styles.available_jobs}>
          {!loading ? (
            displayJobs.map((job) => (
              <Job key={job.id} {...job} query={query} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
