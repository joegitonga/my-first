////This initial part id the class component model
// import React, { Component } from 'react';

// class Footer extends Component {
//     render() {
//         return(
//             <footer> &copy; CodeJobs { (new Date()).getFullYear() }</footer>
//         );
//     }
// }

// export default Footer;

////This is the functional component model
import React from 'react';

// Since we don't have props, we can directly return our JSX.
const Footer = () => (
    <footer>&copy; Codejobs {(new Date()).getFullYear()}</footer>
);

export default Footer;