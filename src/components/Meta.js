import Head from "next/head";

const Meta = ({ title, keywords, description, img = "" }) => {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/logono.svg" />
      <meta lang="en" />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={keywords} name="keywordss" />
      {/* Twitter card */}
      {/* Open Graph */}
    </Head>
  );
};

export default Meta;
