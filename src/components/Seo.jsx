import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const siteName = "BrandMedia";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>

      <meta
        name="description"
        content={
          description ||
          "Grow your business online with SEO, PPC, and digital marketing."
        }
      />
      <meta
        name="keywords"
        content="digital marketing, SEO, PPC, social media, India, Prayagraj, Uttar Pradesh, video editing, google ads, ads, local seo, "
      />
    </Helmet>
  );
}

export default Seo;
