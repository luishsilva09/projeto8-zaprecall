import React from "react";

export default function PageInicial(props) {
    function iniciar() {
        props.setStart(false)
    }

    return (
        <div className="pageLogin">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <div className="btnStart" onClick={iniciar}>Iniciar Recall!</div>
        </div>
    )
}