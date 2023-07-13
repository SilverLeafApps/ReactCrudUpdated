//https://bonsaiilabs.com/material-ui-tabs-react-router/

import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";

import DrawerComp from "./Drawer";
//const routes = ["/products", "/Services", "/About", "/Contact"];
const pages = ["products", "services", "about", "contact"];

const Header = () => {

    //const [selectedTab, setSelectedTab] = useState(0); - this will make the first link highlighted with the red bar
    const [selectedTab, setSelectedTab] = useState();


    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);


    const onClicked_LogInBtn = (e) => {
        alert("LoginBtn Call");
    }

    const onClicked_SignUpBtn = (e) => {
        alert("SignUpBtn Call");
    }

    return (
        <div className="App">
            <React.Fragment>

                <AppBar sx={{ background: "#063970" }}>
                    <Toolbar>

                        <HomeIcon sx={{ transform: "scale(1.5)" }} />

                        {isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "1rem", paddingLeft: "10%" }}>
                                    React CRUD
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                {
                                    <Tabs
                                        sx={{ marginLeft: "auto" }}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        value={selectedTab}
                                        onChange={(e, value) => setSelectedTab(value)}
                                    >
                                        {pages.map((page, index) => (

                                            // <Tab label={page} component={Link} value={routes[index]} to={routes[index]}/>
                                            <Tab label={page} component={Link} value={`/${page}`} to={`/${page}`} />
                                        ))}
                                    </Tabs>
                                }


                                <Button
                                    //    onClick={()=>alert("Button Clicked")}
                                    //onClick={onClicked_LogInBtn}
                                    key={"login"}
                                    component={Link}
                                    to={`/login`}
                                    sx={{ marginLeft: "auto" }}
                                    variant="contained">
                                    Login
                                </Button>

                                <Button
                                    // onClick={onClicked_SignUpBtn}
                                    key={"signup"}
                                    component={Link}
                                    to={`/signup`}
                                    sx={{ marginLeft: "10px" }}
                                    variant="contained">
                                    SignUp
                                </Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
};

export default Header;
