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
import Paintings from "../components/paintings/paintings"
import Gallery from "../components/Gallery/gallery"
import Form from "../components/Form/form"
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Gallery />
      <About></About>
      <Paintings></Paintings>
      <Form />
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
