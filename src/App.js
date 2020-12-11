import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider';

import axios from 'axios';

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';

import { ThemeProvider as MuiThemeProvider , responsiveFontSizes} from '@material-ui/core';
import  createMuiTheme  from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
//util
import AuthRoute from './util/AuthRoute'
import themeObject from './util/theme';
//redux
import {Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTHONTICATED} from './redux/types';
import {logout , getUserData} from './redux/actions/userAction';
//components
import Footer from './component/Footer';



//pages
import home from './pages/home';

//app bar scroll






import signup from './pages/signup';
import login from './pages/login';

let theme = createMuiTheme(themeObject);
theme = responsiveFontSizes(theme);

const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logout());
    window.location.href = '/login';
  }else {
    store.dispatch({type : SET_AUTHONTICATED})
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData);
  }
}






 class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <Provider store={store}>
          <Router >
          
          
             <div className='container'>      
                <Switch>
                   <Route exact path="/" component={home} />
                   

                    


                   <AuthRoute exact 
                       path="/signup" 
                       component={signup} />
                   <AuthRoute exact 
                       path="/login" 
                       component={login} />
                   
                   
                </Switch>
             </div>
             <Divider />
             <Footer />
          </Router>
        </Provider>
        
      </MuiThemeProvider>
    
    )
  }
}

export default App

