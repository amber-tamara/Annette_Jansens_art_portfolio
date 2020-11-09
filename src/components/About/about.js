import React from "react"
import Bio from '../About/about.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import stroke from "../../images/intro/blackstring.png"

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
          <Img fluid={data.file.childImageSharp.fluid} fadeIn className={Bio.photo}></Img>
          <div>
            <div className={Bio.titleBox}>
              <h1 className={Bio.title}>ABOUT ME</h1>
              <img src={stroke} className={Bio.underlineStroke}></img>
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
            New York-based studio in 2012. She has been nominated for Forbes
            magazine’s annual 30 Under 30 list, the Art Directors Club Young
            Guns award and Print magazine’s New Visual Artist, and has given
            talks at conferences and educational institutions across the United
                States and Europe.</p>
          </div>
        </div>
      </div >
    </div>)
}

export default About