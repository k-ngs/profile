import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./NavButton.css";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface NavButtonProps {
    content: string;
    icon: IconDefinition;
}

const NavButton: React.FC<NavButtonProps> = props => {
    return (
        <div className="NavButton">
            <p>
                <FontAwesomeIcon icon={props.icon} /> {props.content}
            </p>
        </div>
    );
};

export default NavButton;