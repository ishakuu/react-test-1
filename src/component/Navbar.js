import React, { Component, Fragment } from 'react'
import Media from 'react-media';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import withStyles, {withStyle} from '@material-ui/core/styles/withStyles';


//MUI stuff
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const AntTabs = withStyles({
  root: {
    color:'#2b2d42',
    fontSize:"1.2em",
    fontWeight:"bold"
  },
  indicator: {
    backgroundColor: '#7451eb',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 42,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#7451eb',
      opacity: 1,
    },
    '&$selected': {
      color: '#7451eb',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#7451eb',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const styles = (theme) => ({
    ...theme.spreadThis , 
    list: {
        width: 300,
        
      },
     
      navbar: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row-reverse"
       

      },
      spacer: {
        flex:1
      },
      logo: {
        height: "60px",
        fontSize: "1.5em"
      },
      items: {
        height: 55,
        display: "flex",
        flexDirection: "row-reverse"

        
      },
      item: {
       
        display: "flex",
       // flexDirection: "row-reverse",
        fontSize: "1.2em",
        color : "#003668"
        
      },
      sign: {
        marginRight: 20,
        
      }
      
})




 class Navbar extends Component {
     state = {
       right: false,
       value:undefined
     }
     handleChangeMenu = (event, newValue) => {
      this.setState({value:newValue})
    };
    handleChangeHome = (event) => {
      this.setState({value:undefined})
    };

     toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({  [anchor]: open });
      };

      

    render() {

        const {classes   } = this.props ; 

         const list = (anchor) => (
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={this.toggleDrawer(anchor, false)}
          onKeyDown={this.toggleDrawer(anchor, false)}
        >
          
          <List> 
               <IconButton className={classes.item} onClick={this.toggleDrawer("right", false)}><ChevronRightIcon/></IconButton>
              <Divider />    
              <ListItem  className={classes.items} button component={Link} to='/'><ListItemText className={classes.item}  disableTypography={false}>home</ListItemText></ListItem>
              <ListItem className={classes.items} button component={Link} to='/signup'><ListItemText className={classes.item}  disableTypography={false} >Sign up</ListItemText></ListItem>
              <ListItem className={classes.items} button component={Link} to='/login'><ListItemText className={classes.item}  disableTypography={false} >Log in</ListItemText></ListItem>

          </List>
         
        </div>
      );

        const { user : {authonticated}  } = this.props ;
        console.log(authonticated)
        let signed = authonticated ;
        return <div>
          
                {signed ? (
                    <Media queries={{
                      small: "(max-width: 799px)",
                      large: "(min-width: 799px)"
                    }}>
                      {matches => (
                        <Fragment>
                          {matches.small && <Toolbar className="nav-container">
                                                <Button className={classes.logo} color='primary' variant="contained" component={Link} to='/'>Logo</Button>
  
                                                <div className={classes.spacer}></div>
                     
                                                <IconButton style={{color:"#2b2d42"}}  component={Link} to='/profile'><AccountBoxOutlinedIcon fontSize="large"/></IconButton>

  
                                               <React.Fragment key="right">
                                                           <IconButton onClick={this.toggleDrawer("right", true)}><MenuIcon fontSize="large"   style={{color:"#2b2d42"}}/></IconButton >
                                                           <SwipeableDrawer
                                                                   anchor="right"
                                                                    open={this.state.right}
                                                                     onClose={this.toggleDrawer("right", false)}
                                                                   onOpen={this.toggleDrawer("right", true)}
                                                           >
                                                                  {list("right")}
                                                             </SwipeableDrawer>
                                                </React.Fragment>
                      
  
                                            </Toolbar>}
                          {matches.large && <Toolbar className="nav-container">
                                                     <Button className={classes.logo} color='primary'   component={Link} to='/' onClick={this.handleChangeHome}>ISHAK TOBBI</Button>
                                                     <div className={classes.spacer}></div>

                                                     <AntTabs value={this.state.value} onChange={this.handleChangeMenu} aria-label="ant example">
                                                     <AntTab label="Sign up" component={Link} to='/signup'/>
                                                      <AntTab label="Log in" component={Link} to='/login'/>
                                                      

                                                    </AntTabs>
                                                     <Divider orientation="vertical" flexItem  />
                                                     <IconButton style={{color:"#2b2d42"}} variant="outlined" component={Link} to='/profile'><AccountBoxOutlinedIcon fontSize="large"/></IconButton>

                                           </Toolbar>}
                        </Fragment>
                      )}
                    </Media>
                  
             
             
                 ) : (
                    
                  

                  <Media queries={{
                    small: "(max-width: 799px)",
                    large: "(min-width: 799px)"
                  }}>
                    {matches => (
                      <Fragment>
                        {matches.small && <Toolbar className="nav-container">
                                              <Button className={classes.logo} color='primary' component={Link} to='/'>Logo</Button>

                                              <div className={classes.spacer}></div>
                   


                                             <React.Fragment key="right">
                                                         <IconButton onClick={this.toggleDrawer("right", true)}><MenuIcon fontSize="large"   style={{color:"#2b2d42"}}/></IconButton >
                                                         <SwipeableDrawer
                                                                 anchor="right"
                                                                  open={this.state.right}
                                                                   onClose={this.toggleDrawer("right", false)}
                                                                 onOpen={this.toggleDrawer("right", true)}
                                                         >
                                                                {list("right")}
                                                           </SwipeableDrawer>
                                              </React.Fragment>
                    

                                          </Toolbar>}
                        {matches.large && <Toolbar className="nav-container">
                                                   <Button className={classes.logo} color='primary'  component={Link} to='/' onClick={this.handleChangeHome}>ISHAK TOBBI</Button>
                                                   <div className={classes.spacer}></div>
                                                   <AntTabs value={this.state.value} onChange={this.handleChangeMenu} aria-label="ant example">
                                                      <AntTab label="home" component={Link} to='/home'/>
                                                      <AntTab label="Signup" component={Link} to='/signup'/>
                                                      <AntTab label="Login" component={Link} to='/login'/>

                                                    </AntTabs>
                                         </Toolbar>}
                      </Fragment>
                    )}
                  </Media>
                    


                   

                   
                   

               
                 )}
                
         </div>
        
    } 
}

const mapStateToProps = (state) => ({
    user : state.user  
});

export default  connect(mapStateToProps  )(withStyles(styles)(Navbar)) ;