import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
// import PageNotFound from '../assets/images/PageNotFound';
export function NotFoundPage (){
    const classes = useStyles()
   
        
        return <div className = {classes.main}>
            {/* <img src={PageNotFound}  /> */}
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    
}
