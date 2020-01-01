import React from 'react';
import { makeStyles, Typography, IconButton, TableRow, TableBody, Table, withStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from "@material-ui/core/Avatar";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import WorkIcon from '@material-ui/icons/Work';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MuiTableCell from "@material-ui/core/TableCell";
import SchoolIcon from '@material-ui/icons/School';

const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    bigAvatar: {
      width: 150,
      height: 150
    }
  }));

export default function MentorProfile() {
    const classes = useStyles();
    return (
    <>
    <div>
    <br />
    <Card style={{marginBottom: "10px"}}>
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px"
            // backgroundColor: "#C2DFFF"
            }}
        >
            <Avatar className={classes.bigAvatar} src={require("../media/pexels-photo-1239291.jpeg")}/>   
        </div>
        {/* <CardHeader style={{ textAlign: "center" }} title="Kyle Carpenter"/> */}
        <CardContent style={{ color: "#393333", padding: 0 }}>
            <Typography variant="h5" component="p" align="center"><strong>Jessica Jones</strong></Typography>
            <Typography variant="h6" component="p" align="center">Student</Typography>
            <Typography variant="h6" component="p" align="center">INIT College</Typography>
        </CardContent>
        <div style={{textAlign:"center"}}>
            <br />
            <IconButton> 
                <InsertInvitationIcon style={{fontSize: "33px"}} />
                &nbsp; &nbsp; &nbsp;
                <ChatBubbleIcon style={{fontSize: "33px"}}/>
            </IconButton>
        </div>
        </Card>
        <Card style={{marginBottom: "10px"}}>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"><strong>About me</strong></Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </Typography>
                <br />
                
                <Typography variant="body2" color="textSecondary" component="p"style={{marginBottom:"5px"}}><strong>My Skills</strong></Typography>
                <div style={{display:"flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <Typography variant="body1" color="textSecondary" 
                     style={{border: "1px solid", marginBottom:"5px", padding:"5px", color:"black", borderRadius: "15px", backgroundColor: "#ebe8e8", opacity: "0.7"}}>
                         Web Development
                    </Typography>
                    <Typography variant="body1" color="textSecondary" 
                     style={{border: "1px solid", marginBottom:"5px", padding:"5px", color:"black", borderRadius: "15px", backgroundColor: "#ebe8e8", opacity: "0.7"}}>
                         Branding
                    </Typography>
                    <Typography variant="body1" color="textSecondary" 
                     style={{border: "1px solid", marginBottom:"5px", padding:"5px", color:"black", borderRadius: "15px", backgroundColor: "#ebe8e8", opacity: "0.7"}}>
                         Marketing and Advertising
                    </Typography>
                </div>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Working Experience</strong>
                </Typography>
                <div style={{padding: "10px"}}>
                    <Table>
                        <TableBody  style={{textAlign: "left"}}>
                            <TableRow>
                                <TableCell align="right">
                                 <WorkIcon style={{fontSize: "50px", color: "#144f8c"}}/>
                                </TableCell>
                                <TableCell align="left">
                                   <Typography variant="body1"><strong>Snr Manager</strong></Typography>
                                   <Typography variant="body2"><ApartmentIcon style={{color: "#cccccc"}}/>&nbsp; ManagemwntWorx</Typography>
                                   <Typography variant="body2">Sept 2014 - Current</Typography>
                                   <br />
                                   <Typography variant="body2" style={{color: "blue"}}>Show Details</Typography>
                                </TableCell>                               
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                 <WorkIcon style={{fontSize: "50px", color: "#144f8c"}}/>
                                </TableCell>
                                <TableCell align="left">
                                   <Typography variant="body1"><strong>Graphic Design</strong></Typography>
                                   <Typography variant="body2"><ApartmentIcon style={{color: "#cccccc"}}/>&nbsp; Freelance</Typography>
                                   <Typography variant="body2">Sept 2014 - Sept 2016</Typography>
                                   <br />
                                   <Typography variant="body2" style={{color: "blue"}}>Show Details</Typography>
                                </TableCell>                               
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">
                                 <WorkIcon style={{fontSize: "50px", color: "#144f8c"}}/>
                                </TableCell>
                                <TableCell align="left">
                                   <Typography variant="body1"><strong>Senior Executive</strong></Typography>
                                   <Typography variant="body2"><ApartmentIcon style={{color: "#cccccc"}}/>&nbsp; Ambank</Typography>
                                   <Typography variant="body2">Nov 2011 - Sept 2014</Typography>
                                   <br />
                                   <Typography variant="body2" style={{color: "blue"}}>Show Details</Typography>
                                </TableCell>                               
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <br />
                <Typography variant="body2" color="textSecondary" component="p"><strong>Education</strong></Typography>
                <div style={{padding: "10px"}}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">
                                <SchoolIcon style={{fontSize: "50px", color: "#144f8c"}}/>
                            </TableCell>
                            <TableCell align="left">
                                <Typography variant="body1"><strong>Bachelor in Adverting</strong></Typography>
                                <Typography variant="body2">Universiti Teknologi MARA</Typography>
                                <br/>
                                <Typography variant="body2">Sept 2016 - Current</Typography>                                 
                            </TableCell> 
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
            </CardContent>
        </Card>
    </div>      
    </>
   );
}