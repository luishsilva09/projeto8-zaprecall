import React from 'react';
import PageInicial from './PageInicial';
import Quests from './Quests';

export default function App(){
    const [Start, setStart] = React.useState(true)
    
   
    return(
        <>
        {Start === true ? <PageInicial Start={Start} setStart={setStart}/> : <Quests />}
        </>
    );
};
