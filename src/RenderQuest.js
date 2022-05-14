import setinha from './componets/images/setinha.png';
import RenderAnswers from './RenderAnswers';

export default function Quest({quest, Teste, setTeste}) {
    function render(Teste, setTeste){
        setTeste([<RenderAnswers answers={quest.answers} />])

    }
    return(
        <li className='pergunta'>
            <p>{quest.question}</p>
            <img onClick={() => render(Teste, setTeste)} src={setinha} alt='virar' />
        </li>
    )
    


}