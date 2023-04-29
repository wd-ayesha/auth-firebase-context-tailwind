import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};
export default Main;