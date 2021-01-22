import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarText, Container } from 'reactstrap';

const NavbarComponent = ({ author }) => {
    return (
        <div>
            <Navbar color='light' light expand='md'>
                <Container>
                    <Nav className='mr-auto' navbar>
                        <NavbarBrand href='/'>{author}</NavbarBrand>
                    </Nav>
                    <NavbarText>Admin</NavbarText>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
