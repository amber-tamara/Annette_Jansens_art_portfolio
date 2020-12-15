/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import "./layout.css"
import About from "../components/About/about"
import Gallery from "../components/Gallery/gallery"
import Form from "../components/Form/form"
import Footer from "../components/Footer/footer"
import Introduction from "../components/Introduction/int"
import { Helmet } from "react-helmet"
// import Burger from '../components/Burger/burger'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Annette's Art</title>
        <link rel="canonical" href="http://localhost:8000/" />
        <html lang="en" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Introduction />
      <Gallery />
      <About></About>
      <Form />
      <Footer />
      <main>{children}</main>
      <footer>

      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
