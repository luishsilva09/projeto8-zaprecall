import React from 'react';
import PageInicial from './PageInicial';
import QuestsPage from './QuestsPage';
import './componets/reset.css';
import './componets/style.css';

export default function App(){
    const [Start, setStart] = React.useState(true)
    
   
    return(
        <>
        {Start === true ? <PageInicial Start={Start} setStart={setStart}/> : <QuestsPage />}
        </>
    );
};
