import React, { Component } from 'react'

import withStyles  from '@material-ui/core/styles/withStyles';
//img


//mui stuff
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


const styles = {
   
   write: {
       display:"flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems:"flex-start"
   },
    
    text1 : {
        
        fontWeight:"bold",
        color: "white",
        backgroundColor: "#7451eb",
      
    },
    home:{
        paddingTop:50,
        backgroundColor:"white"
    },
    pointText:{
        marginTop:50,
        marginBottom:50,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        

    },
    introJob:{
        marginBottom:50,
        marginRight:20,
        marginLeft:20,

    }
   
     
  
   
    
}


class home extends Component {
    render() {
        const {classes } = this.props ;

        
        return (
           
        
        <Grid container className={classes.home}>
                   
                  

                        
                            

                           
                        
             
           </Grid> 
           
            )
    }
}

export default withStyles(styles)(home)
