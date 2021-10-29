import React from "react";
import Header from "../components/Header";
import {Box, Typography} from "@material-ui/core";

const NotFound = () => {

    return (
        <React.Fragment>
            <Header/>
            <Box marginTop={'200px'}>
                <Typography variant={'h2'} align={'center'}>
                    404 Not Found
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default NotFound;