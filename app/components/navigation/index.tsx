import React from 'react';
import ClientNav from './ClientNav';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Navigation = (props: React.JSX.IntrinsicAttributes) => {
    return <ClientNav {...props} />;
};

export { Navbar, Sidebar, ClientNav };
export default Navigation;