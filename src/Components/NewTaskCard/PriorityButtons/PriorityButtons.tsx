import { MdOutlinePushPin } from "react-icons/md";
import './PriorityButtons.css'
import { useState } from "react";

interface IPriorityButtonsProps{
    priority: 'important' | 'secondary' | 'normal' | null;
    setPriority: (p: 'important' | 'secondary' | 'normal' | null) => void;
}

export default function PriorityButton({priority, setPriority}: IPriorityButtonsProps){
    const [PriorityButtonShow, setPriorityButtonShow] = useState(false)

    function toggleButtonShow (){
        setPriorityButtonShow((p) => !p)
    }

    function hidePriorityButtons(priorityValue: 'important' | 'secondary' | 'normal'){
        setPriority(priorityValue)
        toggleButtonShow()
    }

    return(
        <div style={{display: 'flex'}}>
            <button
            onClick={toggleButtonShow}
            onDoubleClick={() => setPriority(null)}
            type="button"
            aria-label="Set priority"
            style={{
                border: priority === 'secondary' ? '1px solid #FF8800' : priority === 'important' ? '1px solid #FF0000' : priority === 'normal' ? '1px solid #00FF48' : '1px solid white',
                color: priority === 'secondary' ? '#FF8800' : priority === 'important' ? '#FF0000' : priority === 'normal' ? '#00FF48' : 'white',
            }}
            >
            <MdOutlinePushPin />
            <span>{priority === "important" ? 'Important' : priority === 'secondary' ? 'Secondary' : priority === 'normal' ? 'Normal' : 'Priority'}</span>

            
            </button>
            
            {PriorityButtonShow && 
            <div style={{display:'flex', marginLeft: '1rem'}}>
                <button
                type="button"
                onClick={() => hidePriorityButtons("normal")}
                className="normal">
                    <div style={{width: '1.2rem', height: '1.2rem', backgroundColor: '#00FF48', borderRadius: '100%'}}></div>
                    <span></span>
                </button>

                <button
                type="button"
                onClick={() => hidePriorityButtons("secondary")}
                className="secondary">
                    <div style={{width: '1.2rem', height: '1.2rem', backgroundColor: '#FF8800', borderRadius: '100%'}}></div>
                    <span></span>
                </button>

                <button
                onClick={() => hidePriorityButtons("important")}
                type="button"
                className="important">
                    <div style={{width: '1.2rem', height: '1.2rem', backgroundColor: '#FF0000', borderRadius: '100%'}}></div>
                    <span></span>
                </button>
            </div>}
        </div>
    )
}