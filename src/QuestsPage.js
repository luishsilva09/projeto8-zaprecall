import React from 'react';
import logo from './componets/images/logo.png';
import Quest from './Quest';
import Footer from './Footer';
import Icon from './Icon';

export default function QuestsPage() {
    const [answerStatus, setAnswerStatus] = React.useState([]);
    const [answered, setAnswered] = React.useState(0);
    let nAnswered = 0;
    let newAnswerStatus = [];
    const questions = [
        { question: 'O que é JSX?', answers: 'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __ ', answers: 'uma biblioteca JavaScript para construção de interfaces' },
        { question: 'Componentes devem iniciar com __', answers: 'letra maiúscula' },
        { question: 'Podemos colocar __ dentro do JSX', answers: 'expressões'},
        { question: 'O ReactDOM nos ajuda __', answers: 'nteragindo com a DOM para colocar componentes React na mesma'},
        { question: 'Usamos o npm para __ ', answers: 'gerenciar os pacotes necessários e suas dependências'},
        { question: 'Usamos props para __', answers: 'passar diferentes informações para componentes '},
        { question: 'Usamos estado (state) para __', answers: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
    ];
    function randOrd() {
        return (Math.round(Math.random()) - 0.5);
    };
    function soma() {
        nAnswered++;
        setAnswered(nAnswered);
    };
    function Status(props) {
        newAnswerStatus.push(<Icon value={props} />);
        setAnswerStatus([...answerStatus, newAnswerStatus]);
    };
    function FinalResult() {
        let allStatus = answerStatus[0];
        let nWrong = 0;
        for (let u = 0; u < allStatus.length; u++) {
            let element = (allStatus[u].props.value);
            if (element === "close-circle") {
                nWrong = nWrong + 1
            };
        };
        if (nWrong === 0) {
            return (
                <Footer>
                    <h2>🥳 Parabéns</h2>
                    <p>Você não esqueceu de nenhum flashcard</p>
                    <p>{answered}/{questions.length} CONCLUÍDOS</p>
                    <div>{answerStatus}</div>
                </Footer>
            );
        } else {
            return (
                <Footer>
                    <h2>😥 Putz...</h2>
                    <p>Ainda faltam alguns...</p>
                    <p>Mas não desanime!</p>
                    <p>{answered}/{questions.length} CONCLUÍDOS</p>
                    <div>{answerStatus}</div>
                </Footer>
            );
        };
    };
    function Progress() {
        return (
            <Footer>
                <p>{answered}/{questions.length} CONCLUÍDOS</p>
                <div>{answerStatus}</div>
            </Footer>
        );
    };

    questions.sort(randOrd);
    return (
        <div className="quests">
            <header>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                <ul>
                    {questions.map((quest, index) => <Quest key={index} index={index} question={quest} status={Status} cont={soma} />)}
                </ul>
            </main>
            {answered !== questions.length ? <Progress /> : <FinalResult />}
        </div>
    );
};
