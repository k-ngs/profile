import React from "react";
import "./Header.css";
import {Link, HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../Home/Home";
import Logo from "./Logo";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import NavButton from "./NavButton";
import {faFileWord, faHome, faPrayingHands} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <Router>
            <header>
                <div className="header-left">
                    <Logo />
                </div>

                <div className="header-right">

                    <Link to="/">
                        <NavButton content="Home" icon={faHome} />
                    </Link>

                    <Link to="/work">
                        <NavButton content="Work" icon={faFileWord} />
                    </Link>

                    <Link to="/contact">
                        <NavButton content="Contact" icon={faPrayingHands} />
                    </Link>

                </div>
            </header>

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>

    )
};

export default Header;