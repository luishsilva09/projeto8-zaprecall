import React from 'react';
export default function Quests(){
    const [Questions, setQuestions] = React.useState([
        {question:'O que é JSX?', answers:'Uma extensão de linguagem do JavaScript'},
        {question:'O React é __ ', answers:'uma biblioteca JavaScript para construção de interfaces'},
        {question:'Componentes devem iniciar com __', answers:'letra maiúscula'},
        {question:'Podemos colocar __ dentro do JSX', answers:'expressões'},
        {question:'O ReactDOM nos ajuda __ ', answers:'Interagindo com a DOM para colocar componentes React na mesma'},
        {question:'Usamos o npm para __', answers:'gerenciar os pacotes necessários e suas dependências'},
        {question:'Usamos o npm para __', answers:'gerenciar os pacotes necessários e suas dependências'},
        {question:'Usamos props para __', answers:'passar diferentes informações para componentes '},
        {question:'Usamos estado (state) para __', answers:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
    ])
    const [Teste, setTeste] = React.useState()
    function Quest(quest, index){
        setTeste(quest)
        console.log(Teste)        
    }

    return(
        <div className="quests">
            
            <img src="./images/logo.png" alt="logo"/>
            <h1>ZapRecall</h1>
            <ul>
                
               {Questions.map((quest, index) => <li  key={index} onClick={() => Quest( quest, index)}>Pergunta {index+1}<ion-icon name="play-outline"></ion-icon></li>)}
            </ul>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}
