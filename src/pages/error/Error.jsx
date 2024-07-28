import React from "react";
import { NavLink } from "react-router-dom";
import "./errorNotFound.css";

const Error = () => {
    return (
        <React.Fragment>
            <section className="error">
                <span className="error__type">404</span>
                <div className="error__message-wrapper-sm">
                    <span className="error__message">Oups! La page que</span><br />
                    <span className="error__message">vous demandez n'existe pas ?!?</span>
                </div>
                <NavLink to="/" className="error__link">retourner sur la page d'accueil</NavLink>
            </section>
        </React.Fragment>
    );
};

export default Error;