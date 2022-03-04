import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'

export default function MainLayout(props) {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <SideBar />
                {props.children}
            </div>
        </>
    )
}
