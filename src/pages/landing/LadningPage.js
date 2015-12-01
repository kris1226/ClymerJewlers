/**
 * Created by z0035ujf on 10/27/2015.
 */
'use strict';

import React from 'react';

let LandingPage = React.createClass({
    componentWillMount() {
        console.log("[LandingPage] will mount with server response: ");
    },
    render() {
        return (
            <div>
                <h1>{title}</h1>
                <p>Where you will land</p>
            </div>
        );
    }
});

export default LandingPage;
