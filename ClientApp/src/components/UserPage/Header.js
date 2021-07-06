import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>


                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">

                                <NavItem>
                                    <NavLink tag={Link} className="btn btn-info mx-2" to="/userpage/course">Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="btn btn-info mx-2" to="/userpage/Event">Events</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="btn btn-info mx-2" to="/userpage/Quiz">Tests</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
