import React from "react";
export default function Answers({ answers, quest, setQuest, index, status, cont }) {
    function naoLembrei(setQuest) {
        cont();
        status("close-circle");
        setQuest([
            <li className='naoLembrei' key={index} >
                <p> Pergunta {index + 1}</p>
                <ion-icon name="close-circle"></ion-icon>
            </li>
        ]);
    };
    function quaseNao(setQuest) {
        cont();
        status("help-circle")
        setQuest([
            <li className='quaseNao' key={index} >
                <p> Pergunta {index + 1}</p>
                <ion-icon name="help-circle"></ion-icon>
            </li>
        ]);
    };
    function zap(setQuest) {
        cont();
        status("checkmark-circle");
        setQuest([
            <li className='zap' key={index} >
                <p> Pergunta {index + 1}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </li>
        ]);
    };
    return (
        <>
            <li className="resposta">
                <p>{answers}</p>
                <div className='buttons'>
                    <button onClick={() => naoLembrei(setQuest)} className='naoLembrei'>Não lembrei</button>
                    <button onClick={() => quaseNao(setQuest)} className='quaseNao'>Quase nâo lembrei</button>
                    <button onClick={() => zap(setQuest)} className='zap'>Zap!</button>
                </div>
            </li>
        </>);
};