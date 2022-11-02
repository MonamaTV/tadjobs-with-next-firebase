import Head from "next/head";

const Meta = ({ title, keywords, description, img = "" }) => {
  return (
    <Head>
      <meta lang="en" />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={keywords} name="keywordss" />
    </Head>
  );
};

export default Meta;
