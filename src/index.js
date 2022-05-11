import ReactDOM from 'react-dom';
import PageInicial from './PageInicial';
import Quests from './Quests';
function Index(){
    return(
        <>
        <Quests />
        </>
    );
};

ReactDOM.render(<Index />, document.querySelector(".root"));