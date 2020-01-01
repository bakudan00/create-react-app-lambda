import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
    IconButton,
    Grid,
    Typography,
    Button,
    Dialog,
    Slide
  } from "@material-ui/core";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { makeStyles } from '@material-ui/core/styles';
  import styled from "styled-components";
  import HomeIcon from '@material-ui/icons/Home';
  import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
  import EventAvailableIcon from '@material-ui/icons/EventAvailable';
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import PersonIcon from '@material-ui/icons/Person';
  import MentorProfile from "./MentorProfile"
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const useStyles = makeStyles(theme => ({
root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
avatar: {
    width: 100,
    height: 100
},
appBar: {
    position: 'relative',
}
}));

const CardPage = styled.div`
  height: 350px;
  /* width: 260px; */
  /* border: 1px solid #1589ff; */
  margin: 10px;
  padding: 5px;
`;
const CardInCard = styled.div`
  border: 1px solid #1589ff;
  border-radius: 1px;
  height: 100%;
  background-color: white;
`;

const CardPageTwo = styled.div`
  height: 100px;
  width: 260px;
  /* border: 1px solid #1589ff; */
  padding: 5px;
`;
const CardInCardTwo = styled.div`
  border: 1px solid #1589ff;
  border-radius: 1px;
  height: 100%;
  background-color: white;
  margin-right: 5px;
  text-align : center;
`;

export default function SignInPage() {
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
const classes = useStyles();
const Cardsettings = {
dots: true,
infinite: false,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1
};

const CardsettingsTwo = {
dots: true,
infinite: false,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
    
return (
     <>
      <AppBar position="static" color="inherit">
        <Toolbar style={{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            <p style={{ color: "black", fontWeight: "600", fontSize: "17px", margin: "0px" }}>
                Josh Kingsmen
            </p>
            <div>
                <Avatar src={require("../media/pexels-photo-736716.jpeg")}/>
            </div>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <Typography variant="h5" style={{opacity: "0.7"}}>
          <strong>&nbsp; Your Active Session</strong>
      </Typography>
      <Grid item>
            <div style={{ backgroundColor: "#e2e2e2" }}>
                <Slider {...Cardsettings}>
                    <div>
                        <CardPage>
                            <CardInCard>
                                <IconButton color="inherit">
                                    {/* <AccountCircleIcon style={{ fontSize: "90px" }} /> */}
                                    <Avatar  className={classes.avatar} src={require("../media/pexels-photo-1239291.jpeg")} onClick={handleClickOpen}/>
                                </IconButton>

                                <div style={{width: "300px"}}>
                                    <Typography variant="h5" style={{fontWeight: "bold", color: "#2b6aab"}} onClick={handleClickOpen}>
                                    &nbsp; &nbsp;Jessica Jones
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; Student
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; INIT College
                                    </Typography>
                                </div>
                                <br />
                                <div>
                                    <Typography>
                                    &nbsp; &nbsp; Last session
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; 10 May 2019 at 2.30PM
                                    </Typography>
                                </div>
                                <div>

                                    <Button 
                                    style={{
                                            backgroundColor: "#1589FF",
                                            color: "#FFFFFF",
                                            fontSize: "16px",
                                            // borderRadius: 16,
                                            fontWeight: "bold",
                                            height: "45px",
                                            width: "100%",
                                            marginTop: "20px",
                                            width: "300px",
                                            marginLeft: "15px" 
                                    }}>
                                        CREATE APPOINTMENT &nbsp; →
                                    </Button>
                                </div>
                            </CardInCard>
                        </CardPage>
                    </div>
                    <div>
                        <CardPage>
                            <CardInCard>
                            <IconButton color="inherit">
                                    {/* <AccountCircleIcon style={{ fontSize: "90px" }} /> */}
                                    <Avatar  className={classes.avatar} src={require("../media/pexels-photo-1239291.jpeg")} onClick={handleClickOpen}/>
                                </IconButton>

                                <div style={{width: "300px"}}>

                                    <Typography variant="h5" style={{fontWeight: "bold", color: "#2b6aab"}} onClick={handleClickOpen}>
                                    &nbsp; &nbsp;Jessica Jones
                                    </Typography>

                                    <Typography>
                                    &nbsp; &nbsp; Student
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; INIT College
                                    </Typography>
                                </div>
                                <br />
                                <div>
                                    <Typography>
                                    &nbsp; &nbsp; Last session
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; 10 May 2019 at 2.30PM
                                    </Typography>
                                </div>
                                <div>

                                    <Button 
                                    style={{
                                            backgroundColor: "#1589FF",
                                            color: "#FFFFFF",
                                            fontSize: "16px",
                                            // borderRadius: 16,
                                            fontWeight: "bold",
                                            height: "45px",
                                            width: "100%",
                                            marginTop: "20px",
                                            width: "300px",
                                            marginLeft: "15px" 
                                    }}>
                                        CREATE APPOINTMENT &nbsp; →
                                    </Button>
                                </div>                            
                            </CardInCard>
                        </CardPage>
                    </div>
                    <div>
                        <CardPage>
                            <CardInCard>
                                <IconButton color="inherit">
                                    {/* <AccountCircleIcon style={{ fontSize: "90px" }} /> */}
                                    <Avatar  className={classes.avatar} src={require("../media/pexels-photo-1239291.jpeg")} onClick={handleClickOpen}/>
                                </IconButton>

                                <div style={{width: "300px"}}>

                                    <Typography variant="h5" style={{fontWeight: "bold", color: "#2b6aab"}} onClick={handleClickOpen}>
                                    &nbsp; &nbsp;Jessica Jones
                                    </Typography>

                                    <Typography>
                                    &nbsp; &nbsp; Student
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; INIT College
                                    </Typography>
                                </div>
                                <br />
                                <div>
                                    <Typography>
                                    &nbsp; &nbsp; Last session
                                    </Typography>
                                    <Typography>
                                    &nbsp; &nbsp; 10 May 2019 at 2.30PM
                                    </Typography>
                                </div>
                                <div>

                                    <Button 
                                    style={{
                                            backgroundColor: "#1589FF",
                                            color: "#FFFFFF",
                                            fontSize: "16px",
                                            // borderRadius: 16,
                                            fontWeight: "bold",
                                            height: "45px",
                                            width: "100%",
                                            marginTop: "20px",
                                            width: "300px",
                                            marginLeft: "15px" 
                                    }}>
                                        CREATE APPOINTMENT &nbsp; →
                                    </Button>
                                </div>                            
                            </CardInCard>
                        </CardPage>
                    </div>
                </Slider>

            </div>
        </Grid>
        <br />
        <br />
        <br />
        <Typography variant="h5" style={{opacity: "0.7"}}>
           <strong>&nbsp; Learning Material</strong> 
        </Typography>
        <Grid item>
            <div style={{ backgroundColor: "#e2e2e2"}}>
                <Slider {...CardsettingsTwo}>                   
                  <CardPageTwo style={{textAlign: "center"}}>
                      <CardInCardTwo>
                        <div style={{padding: "7px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <Avatar src={require("../media/pexels-photo-590478.jpeg")}/>                           
                        </div> 
                        <div>
                            <Typography style={{fontSize: "10px"}}>Learn Japanese</Typography>
                            <Typography style={{fontSize: "10px"}}>30 minute</Typography> 
                            <Typography style={{fontSize: "10px"}}>100 view</Typography> 
                        </div>       
                      </CardInCardTwo>
                  </CardPageTwo>
                  <CardPageTwo>
                      <CardInCardTwo>
                       <div style={{padding: "7px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <Avatar src={require("../media/pexels-photo-2696064.jpeg")} />     
                       </div>
                       <div>
                            <Typography style={{fontSize: "10px"}}>Cooking</Typography>
                            <Typography style={{fontSize: "10px"}}>40 minute</Typography> 
                            <Typography style={{fontSize: "10px"}}>820 view</Typography> 
                        </div>                                         
                      </CardInCardTwo>
                  </CardPageTwo>
                  <CardPageTwo>
                      <CardInCardTwo>
                      <div style={{padding: "7px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                         <Avatar src={require("../media/pexels-photo-274506.jpeg")} />   
                      
                       </div>
                       <div>
                            <Typography style={{fontSize: "10px"}}>Learn Football Skills</Typography>
                            <Typography style={{fontSize: "10px"}}>35 minute</Typography> 
                            <Typography style={{fontSize: "10px"}}>8610 view</Typography> 
                        </div>  
                      </CardInCardTwo>
                  </CardPageTwo>
                  <CardPageTwo>
                      <CardInCardTwo>
                      <div style={{padding: "7px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <Avatar src={require("../media/pexels-photo-1040157.jpeg")} />     
                       </div> 
                       <div>
                            <Typography style={{fontSize: "10px"}}>Chess Tutorial</Typography>
                            <Typography style={{fontSize: "10px"}}>100 minute</Typography> 
                            <Typography style={{fontSize: "10px"}}>1233 view</Typography> 
                        </div>
                      </CardInCardTwo>
                  </CardPageTwo>
                  <CardPageTwo>
                      <CardInCardTwo>
                      <div style={{padding: "7px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <Avatar src={require("../media/pexels-photo-89625.jpeg")} />     
                       </div>
                       <div>
                            <Typography style={{fontSize: "10px"}}>Drawing class</Typography>
                            <Typography style={{fontSize: "10px"}}>200 minute</Typography> 
                            <Typography style={{fontSize: "10px"}}>6709 view</Typography> 
                        </div> 
                      </CardInCardTwo>
                  </CardPageTwo>
                </Slider>
            </div>
        </Grid>
        <AppBar color="inherit" style={{top: "auto", bottom: 0, opacity: "0.7"}}>
            <Toolbar style={{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <IconButton color="inherit">
                    <HomeIcon style={{ fontSize: "33px" }} />
                </IconButton>  
                <IconButton color="inherit">
                    <QuestionAnswerIcon style={{ fontSize: "33px" }} />
                </IconButton>
                <IconButton color="inherit">
                    <EventAvailableIcon style={{ fontSize: "33px" }} />
                </IconButton>
                <IconButton color="inherit">
                    <NotificationsIcon style={{ fontSize: "33px" }} />
                </IconButton>
                <IconButton color="inherit">
                    <PersonIcon style={{ fontSize: "33px" }} />
                </IconButton>                              
            </Toolbar>
        </AppBar>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <ArrowBackIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <MentorProfile />                               
        </Dialog>
     </>
    );
}
