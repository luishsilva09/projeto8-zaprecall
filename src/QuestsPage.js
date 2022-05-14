import React from 'react';
import logo from './componets/images/logo.png';
import Quest from './Quest';
import Footer from './Footer';

export default function QuestsPage() {
    const [Questions, setQuestions] = React.useState([
        { question: 'O que é JSX?', answers: 'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __ ', answers: 'uma biblioteca JavaScript para construção de interfaces' },
        { question: 'Componentes devem iniciar com __', answers: 'letra maiúscula' },
        { question: 'Podemos colocar __ dentro do JSX', answers: 'expressões' },
        { question: 'O ReactDOM nos ajuda __ ', answers: 'Interagindo com a DOM para colocar componentes React na mesma' },
        { question: 'Usamos o npm para __', answers: 'gerenciar os pacotes necessários e suas dependências' },
        { question: 'Usamos props para __', answers: 'passar diferentes informações para componentes ' },
        { question: 'Usamos estado (state) para __', answers: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
    ])
    return (
        <div className="quests">
            <header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                <ul>
                    {Questions.map((quest, index) => <Quest index={index} question={quest} />)}
                </ul>

            </main>
            <Footer numberQuest={Questions.length}/>
                
        </div>
    )
}
