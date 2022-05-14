import React from 'react';
import PageInicial from './PageInicial';
import Quests from './Quests';
import './componets/reset.css';
import './componets/style.css';

export default function App(){
    const [Start, setStart] = React.useState(true)
    
   
    return(
        <>
        {Start === true ? <PageInicial Start={Start} setStart={setStart}/> : <Quests />}
        </>
    );
};
