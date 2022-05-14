export default function answers({answers}) {
    
    return(
        <li className="resposta">
            <p>{answers}</p>
            <div className='buttons'>
                <button className='naoLembrei'>Não lembrei</button>
                <button className='quaseNao'>Quase nâo lembrei</button>
                <button className='zap'>Zap!</button>
            </div>
        </li>)

}