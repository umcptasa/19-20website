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
    })

export interface TextColorOptions {
    color?: TypographyProps["color"] | "white" | "success"
}

type Props = WithStyles<typeof styles> &
    Omit<TypographyProps, "color"> &
    TextColorOptions

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function Text(props: Props) {
    const { classes, color = "initial", ...rest } = props
    const textClassName = clsx({
        [classes.white]: color === "white",
        [classes.success]: color === "success",
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