import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";
import BackgroundSection from "../components/global/BackgroundSection";
import Info from "../components/home/info";
import Menu from "../components/home/Menu";
import Products from "../components/home/Products";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="coffee del toro"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "pexels-photo-374129.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
