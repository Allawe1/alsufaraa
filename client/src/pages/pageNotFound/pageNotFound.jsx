import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
// import PageNotFound from '../assets/images/PageNotFound';
export function NotFoundPage (){
    const classes = useStyles()
   
        
        return  <div className={classes.main}>
        <img src="https://i.imgur.com/qIufhof.png" />
        <div id="info">
            <h3 className= {classes.h3}>This page could not be found <br/> Go back to  <Link to='/'>home Page</Link> </h3>
        </div>
    </div >
    
}
