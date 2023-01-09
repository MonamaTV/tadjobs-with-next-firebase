import Link from "next/link";
import Meta from "../src/components/Meta";

const NotFound = ({ title = "" }) => {
  return (
    <div className="not_found">
      <Meta title={"Tadjobs - Bermuda Triange page"} />
      <img src="/assets/notfound.svg" />
      <div className="not_found_message">
        <h1>OPPS!</h1>
        <h3>
          {title ? title : "We couldn&apos;t find what you are looking for..."}
        </h3>
        <Link href="/jobs/search">
          <a>Find dream job</a>
        </Link>
        <Link href="/">
          <a className="job">Back home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
