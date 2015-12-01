import React from 'react';

let HomePage = React.createClass({
    componentWillMount() {
       console.log("[HomePage] will mount with server response: ");
    },
    render() {
        return (
          <div>
              <h1>{title}</h1>
              <p>Thanks for joining!</p>
          </div>
        );
    }
});

export default HomePage;
