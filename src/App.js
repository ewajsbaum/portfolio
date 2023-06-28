import Offset from './components/Offset.js';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Offset />
            <Outlet />
        </>
    )
}
