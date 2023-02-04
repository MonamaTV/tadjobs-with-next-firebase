import Head from "next/head";

const Meta = ({ title, keywords, description, img = "" }) => {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/logono.svg" />
      <meta lang="en" />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={keywords} name="keywords" />
      {/* Twitter card */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"TadJobs - " + title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://tadjobs.vercel.app/assets/back.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://tadjobs.vercel.app/assets/back.png"
      />
      <meta name="twitter:title" content={"TadMovies - " + title} />
      <meta name="twitter:description" content={title} />
      <meta
        name="twitter:image"
        content={"https://tadjobs.vercel.app/assets/back.png"}
      />
    </Head>
  );
};

export default Meta;
