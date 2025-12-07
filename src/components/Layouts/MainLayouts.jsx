import React from 'react';
import {Outlet} from "react-router-dom";
import BottomNavigation from "@components/ui/BottomNavigation.jsx";

const MainLayouts = () => {
    return (
        <div>
            <Outlet/>
            <BottomNavigation/>
        </div>
    );
};

export default MainLayouts;