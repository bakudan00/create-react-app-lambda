import React, { useState } from 'react';
import { Container, TextField, Button, InputLabel, Typography, Dialog, Slide } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Content from "./Content"
import useForm from './useForm'
import validate from './validateLogin'


export default function SignInPage() {
const [open, setOpen] = useState(false);
const { handleChange, handleSubmit, value, errors } = useForm(submits, validate);

const handleClose = () => {
    setOpen(false);
};

function submits(){
 console.log("submit succesfull")
 setOpen(true);
}
const theme = createMuiTheme({
    palette: {
        secondary: { main: "#1589FF" } 
    }
    });
    const ContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: "10%",
    overflow: "auto"
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });
    return (
    <>
        <div style={ContainerStyles}>
            <img
                src={require("../media/FLab.png")}
                style={{
                    width: "80%",
                    height: "80%"
                }}
                alt="app logo"
            /> 
        <br />
        </div>
        <br />
        <br />
        
        <MuiThemeProvider theme={theme}>
            <Container maxWidth="sm">
               <Typography variant="h4" style={{opacity: "0.7"}}><strong>Sign In</strong></Typography>
               <br />
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <TextField
                        id="email-input"
                        name="email"
                        // placeholder="Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="email"                      
                        color="secondary"
                        value={value.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <br />
                    <br />
                    <InputLabel htmlFor="my-input">Password</InputLabel>  
                    <TextField
                        id="password-input"
                        // placeholder="Password"
                        name="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type="password"                      
                        color="secondary"
                        inputProps={{ minLength: 8 }}

                    /> 
                    {errors.password && <p>{errors.password}</p>}
                    <Typography style={{color: "blue"}}>Forgot Password</Typography>
                    <Button
                        type="submit"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            backgroundColor: "#1589FF",
                            color: "#FFFFFF",
                            fontSize: "16px",
                            // borderRadius: 16,
                            fontWeight: "bold",
                            height: "45px",
                            width: "100%",
                            marginTop: "20px",
                            // marginLeft: "-5px" 
                        }}
                        // onClick={handleClickOpen}
                    >
                     &nbsp; Login &nbsp; &nbsp; &nbsp; &nbsp;→
                    </Button>                     
                </form>                                                   
            </Container>  
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Content />
            </Dialog>             
        </MuiThemeProvider>
    </>
    );
}
