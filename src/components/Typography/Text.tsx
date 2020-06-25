import React from "react"
import {
    Typography,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { TypographyProps } from "@material-ui/core/Typography/Typography"

import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        white: {
            color: "#ffffff",
        },
        success: {
            color: theme.palette.success.main,
        },
        title: {
            color: "#3C4858",
            margin: "1.75rem 0 0.875rem",
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: `Roboto Slab, Times New Roman, serif`,
        },
    })

type Props = WithStyles<typeof styles> &
    Omit<TypographyProps, "color"> & {
        color?: TypographyProps["color"] | "white" | "success"
        type?: "title" | "description"
    }

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function Text(props: Props) {
    const { classes, color = "initial", type, ...rest } = props
    const textClassName = clsx({
        [classes.white]: color === "white",
        [classes.success]: color === "success",
        [classes.title]: type === "title",
    })

    return (
        <Typography
            className={textClassName}
            // @ts-ignore The case of invalid color names is handled but not recognized by Typescript
            color={textClassName === "" ? color : "initial"}
            {...rest}
        />
    )
}

export default withStyles(styles)(Text)
