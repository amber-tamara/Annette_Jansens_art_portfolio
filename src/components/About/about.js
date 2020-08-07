import React from "react"
import Bio from '../About/about.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

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
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className={Bio.background} id="about">
      <div className={Bio.clip}>
        <div className={Bio.wrapper}>
          <h1 className={Bio.title}>About me</h1>
          <div className={Bio.content}>
            <Img data-aos="fade-right" fluid={data.file.childImageSharp.fluid} fadeIn className={Bio.picture}></Img>
            <p className={Bio.text}>Lotta Nieminen Studio is a graphic design, art direction
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
        </div >
      </div >
    </div>)
}

export default About