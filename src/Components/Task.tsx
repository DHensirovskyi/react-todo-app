import { useState, useEffect } from "react"
import { IoCloseSharp } from "react-icons/io5";

export interface ITask{
    taskName: string,
    description?: string,
    priority?: 'important' | 'secondary' | 'normal',
    done?: boolean,
}

interface TaskProps{
    tasks: ITask[],
    onDelete: (idx: number) => void,
    onToggleDone: (idx: number) => void,
}

export default function Task({tasks, onDelete, onToggleDone}: TaskProps){
    const [, setDoneList] = useState<boolean[]>([]);

    useEffect(() => {
    setDoneList(prev => {
        if (tasks.length > prev.length) {
            return [...prev, false];
        }
        if (tasks.length < prev.length) {
            return prev.slice(0, tasks.length);
        }
        return prev;
    });
    }, [tasks.length]);

    return(
        <>
        {tasks.map((task, idx) => (
            <div key={idx}>
                <div style={{display:'flex', gap: '1rem', alignItems: 'center', marginBottom: '-1rem'}}>
                    <div
                        onClick={() => onToggleDone(idx)}
                        style={{
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '100%',
                            border: '1px solid white',
                            background: task.done ? 'white' : 'none',
                            cursor: 'pointer',
                            opacity: task.done ? '0.4' : '1'
                        }}
                    />
                    <h3 style={{textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? '0.4' : '1'}}>{task.taskName}</h3>
                    <div style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '100%',
                        background: task.priority === 'important' ? '#FF0000' : task.priority === 'secondary' ? '#FF8800' : task.priority === 'normal' ? '#00FF48' : 'transparent',
                        marginLeft: 'auto',
                        opacity: task.done ? '0.4' : '1'
                    }}/>
                    <IoCloseSharp style={{fontSize:'1.5rem', cursor: 'pointer', opacity: task.done ? '0.4' : '1'}} onClick={() => onDelete(idx)}/>
                </div>
                <p style={{color:'rgba(255, 255, 255, 0.5)', textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? '0.4' : '1'}}>{task.description}</p>
                <hr style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.4)", border: "none" }} />
            </div>
        ))}
        </>
    )
}