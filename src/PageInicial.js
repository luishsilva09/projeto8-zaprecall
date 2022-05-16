import React from "react";
import logo from './componets/images/logo1.svg';

export default function PageInicial(props) {
    function iniciar() {
        props.setStart(false);
    };
    return (
        <div className="pageLogin">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <div className="btnStart" onClick={iniciar}>Iniciar Recall!</div>
        </div>
    );
};