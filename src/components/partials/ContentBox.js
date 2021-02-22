import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const ContentBox = ({linkURL, title}) => {
    return(
        <>
            <div className="">

            <li><Link to={linkURL ? linkURL : null}>{title ? title : 'No title'}</Link></li>
            </div>
        </>
    )
}

export default ContentBox;