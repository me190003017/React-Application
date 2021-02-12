import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Label, Input, Button, ModalHeader, ModalBody, Form, FormGroup } from "reactstrap";
import { NavLink ,Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin = (event) => {
        this.toggleModal();
        
        alert("Username : " + this.username.value + " User Password : " + this.password.value + " Remember : " + this.remember.checked);
        console.log("Username : " + this.username.value + " User Password : " + this.password.value + " Remember : " + this.remember.checked)
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto">
                        <Link to="/home"><img src="assets/images/logo.png" height="30" width="41" alt="Ristorant Con Fusion" /></Link>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg">Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg">About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg">Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <Button  onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>
                                        LogIn
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label check className="ml-4">
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>

                            <Button type="submit" color="danger" >Login</Button>

                        </Form>
                    </ModalBody>
                </Modal>
            
            </>
        )
    }
}
export default Header;

//   <></>