import React from "react"
import { graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Img, { GatsbyImageOptionalProps } from "gatsby-image"
import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[3],
        },
    })

type Props = WithStyles<typeof styles> &
    GatsbyImageOptionalProps & {
        image: GatsbyTypes.Maybe<GatsbyTypes.RaisedImageFragment>
    }

function RaisedImage(props: Props) {
    const { classes, className, image, ...rest } = props
    if (!image?.childImageSharp?.fluid)
        throw new Error(`${name} does not exist`)

    return (
        <Img
            className={clsx(classes.root, className)}
            fluid={image.childImageSharp?.fluid}
            {...rest}
        />
    )
}

export default withStyles(styles)(RaisedImage)

export const raisedImageQueryFragment = graphql`
    fragment RaisedImage on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
