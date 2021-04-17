import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"

export default function Image() {
    const data = useStaticQuery(
        graphql`
        query GET_IMAGE {
            imageSharp(id: {eq: "24d4e4eb-2bcd-5321-bd6b-b14c704f97ea"}) {
              gatsbyImageData(layout: FIXED, width:30, height:30)
            }
          }          
        `
    )

    console.log(data, "data")
    return (
        <div>
            <GatsbyImage image={data.imageSharp.gatsbyImageData}/>
        </div>
    )
}
