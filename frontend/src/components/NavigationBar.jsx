import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const NavigationBar = () => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Container className="m-10">
                    <Navbar.Brand href="/">
                        <img
                            src="/DuPont_Logo.png"
                            width="120"
                            height="47"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <AuthenticatedTemplate>
                                <Nav.Link href="/fastapi">FastAPI</Nav.Link>
                                <Nav.Link href="/processFile">Process File</Nav.Link>
                            </AuthenticatedTemplate>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </Navbar>
            <br />
        </>
    );
};