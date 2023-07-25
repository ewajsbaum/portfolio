import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import resume from '../resume.pdf'

export default function Nav() {
    const [show, setShow] = useState(false);
    const [contactInfoShowing, showContactInfo] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleContact = () => showContactInfo(!contactInfoShowing);

    return (
        <>
            <Button id="nav-button" onClick={handleShow}>
                <span className="navbar-toggler-icon"></span>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <nav onClick={handleClose}>
                        <NavLink to='/' className='customLink' >Home</NavLink>
                        <NavLink to='/currentProject' className='customLink'>Current Project</NavLink>
                        <NavLink to='/projects' className='customLink'>Previous Projects</NavLink>
                        <NavLink to='/education' className='customLink'>Education</NavLink>
                        <a href={resume} target="_blank" rel="noreferrer" className='customLink'>Resume</a>
                        <a href="https://github.com/ewajsbaum/myprojects" target="_blank" rel="noreferrer" className='customLink'>GitHub</a>

                    </nav>
                    <Button id="contactButton" onClick={handleContact}>contact</Button>
                    {contactInfoShowing && <div className="card card-body">
                        ewajsbaum.developer@gmail.com<br></br>
                        (647) 507-6504
                    </div>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
