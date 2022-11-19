import AboutUs from "../components/AboutUs";
import Layout from "../layouts/Layout";
import SectionHome from "./../components/SectionHome";

export default function Home() {
  return (
    <Layout>
      <SectionHome />
      <AboutUs />
    </Layout>
  );
}
