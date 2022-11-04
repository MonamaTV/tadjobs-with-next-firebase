import Link from "next/link";
import Meta from "../src/components/Meta";

const NotFound = ({ title = "" }) => {
  return (
    <div className="not_found">
      <Meta title={"Tadjobs - Bermuda Triange page"} />
      <img src="/assets/notfound.svg" />
      <div className="not_found_message">
        <h1>OPPS!</h1>
        <h3>{title ? title : "We couldn&apos;t find what you are looking for..."}</h3>
        <Link href="/">
          <a>Go back home</a>
        </Link>
        <Link href="/jobs/search">
          <a className="job">Find dream job</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
