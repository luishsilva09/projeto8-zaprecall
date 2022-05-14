import RenderQuest from './RenderQuest';
import React from 'react';

export default function Quest({index, question }) {

    const [quest, setQuest] = React.useState([<li key={index} onClick={() => Render(question, index)}>Pergunta {index + 1}
        <ion-icon name="play-outline"></ion-icon>

    </li>])    
    function Render(question, index) {
        setQuest([<RenderQuest question={question} index={index} quest={quest} setQuest={setQuest}/>])

    }
    return (
        <>
            {quest}
        </>

    )
}