import RenderQuest from './RenderQuest';
import React from 'react';

export default function Perguntas({ index, quest, key }) {

    const [Teste, setTeste] = React.useState([<li key={index} onClick={() => Render(quest, key)}>Pergunta {index + 1}
        <ion-icon name="play-outline"></ion-icon>

    </li>])

    let novo = Teste 
    
    function Render(quest, key) {
        console.log(Teste)
        setTeste([<RenderQuest quest={quest} index={key} Teste={Teste} setTeste={setTeste}/>])

    }
    console.log(Teste)
    console.log(novo)

    return (
        <>
            {Teste}
        </>

    )
}