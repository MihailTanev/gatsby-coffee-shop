import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import BackgroundSection from "../components/global/BackgroundSection";
import Info from "../components/home/info";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular jo's"
      styleClass="default-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
