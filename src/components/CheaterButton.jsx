import '../styles/cheaterButton.css';

import { useContext } from 'react';
import { QuizContext } from './QuizProvider';

const CheaterButton = () => {

    const { cheaterModeToggle, cheaterMode } = useContext(QuizContext);

    return(
        <>
        <button 
        className={cheaterModeToggle == true ? 'cheater-button cheater-mode-on' : 'cheater-button' }
        onClick={() => cheaterMode()}
        >
            { cheaterModeToggle == false ? 'Cheater Mode' : 'Turn Off'}
        </button>
        </>
    )
}

export default CheaterButton;