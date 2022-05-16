import setinha from './componets/images/setinha.png';
import RenderAnswers from './RenderAnswers';
import React from 'react';

export default function RenderQuest({ question, quest, setQuest, index, status, cont }) {
    function render(quest, setQuest) {
        setQuest([<RenderAnswers key={index} answers={question.answers} quest={quest} setQuest={setQuest} index={index} status={status} cont={cont} />])
    };
    return (
        <li key={index} className='pergunta'>
            <p>{question.question}</p>
            <img onClick={() => render(quest, setQuest)} src={setinha} alt='virar' />
        </li>
    );
};