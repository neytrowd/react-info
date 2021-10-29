import React from "react";
import StyleHeader from "./StyleHeader";
import {NavLink} from "react-router-dom";
import {AppBar, Box, Container, CssBaseline, Divider, Toolbar, Typography} from "@material-ui/core";

const Header = () => {
    const classes = StyleHeader();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0}>
                <Container>
                    <Toolbar>
                        <Box
                            width={'100%'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent='space-between'
                        >
                            <Box>
                                <Typography variant={'h5'}>
                                    Alef development
                                </Typography>
                            </Box>
                            <Box display={'flex'} width={'150px'} justifyContent={'space-between'}>
                                <NavLink to={'/form'} className={classes.menuItem}>
                                    Форма
                                </NavLink>
                                <NavLink to={'/'} className={classes.menuItem}>
                                    Превью
                                </NavLink>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Divider/>
        </React.Fragment>
    )
}

export default Header