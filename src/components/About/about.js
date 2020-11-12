import React from "react"
import Bio from '../About/about.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import aboutTitleUnderline from "../../images/intro/blackstring.png"

const About = () => {
  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "women.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
       ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
      `)
  return (
    <div className={Bio.background} id="about">
      <div className={Bio.clip}>
        <div className={Bio.contentWrapper}>
          <Img fluid={data.file.childImageSharp.fluid} fadeIn className={Bio.photo} alt="women"></Img>
          <div>
            <div className={Bio.titleBox}>
              <h2 className={Bio.title}>ABOUT ME</h2>
              <img src={aboutTitleUnderline} className={Bio.underlineStroke} alt="underline"></img>
            </div>
            <p className={Bio.paragraph}>Lotta Nieminen Studio is a graphic design, art direction
            and illustration studio creating holistic visual solutions
            for clients across disciplines. Passionate about finding the
            best tools to execute content-driven visuals, the studio works
            as a creative partner in all aspects branding, bringing visual
            identities to life through thoughtfully crafted print and digital
            implementations. Originally from Finland, Lotta Nieminen studied
            graphic design and illustration at the University of Art and Design
            Helsinki and the Rhode Island School of Design, before founding her
            New York-based studio in 2012.</p>
          </div>
        </div>
      </div >
    </div>)
}

export default About