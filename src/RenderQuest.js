import setinha from './componets/images/setinha.png';
import RenderAnswers from './RenderAnswers';

export default function Quest({question, quest, setQuest, index}) {
    function render(quest, setQuest){
        setQuest([<RenderAnswers answers={question.answers} quest={quest} setQuest={setQuest} index={index}/>])

    }
    return(
        <li key={index}className='pergunta'>
            <p>{question.question}</p>
            <img onClick={() => render(quest, setQuest)} src={setinha} alt='virar' />
        </li>
    )
    


}