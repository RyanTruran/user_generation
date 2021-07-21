import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from "react-bootstrap";
import "./header.css"
const pjson = require('../../../package.json')

export function Header() {
    return(
        <Navbar bg="dark" variant="dark" expand={'lg'}>
            <Navbar.Brand className={'mx-2'}>
                {pjson.name}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
            <Navbar.Collapse>
                <Nav className={'mr-auto'}>
                    <NavLink to='/dashboard' className={'mx-3 NavLink'}>
                        Dashboard
                    </NavLink>
                    <NavLink to='/about' className={'mx-3 NavLink' }>
                        About
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}