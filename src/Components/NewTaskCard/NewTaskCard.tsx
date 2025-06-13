import { useState } from "react";
import PriorityButtons from "./PriorityButtons/PriorityButtons";
import HandleButtons from './HandleButtons/HandleButtons'
import type { ITask } from "../Task";


interface IOnAddTask{
    onAddTask: (task: ITask) => void;
}

export default function NewTaskCard({onAddTask}: IOnAddTask) {
    const [inputTaskValue, setInputTaskValue] = useState<string>('')
    const [inputDescriptionValue, setInputDescriptionValue] = useState<string>('')
    const [priority, setPriority] = useState<'important' | 'secondary' | 'normal' | null>(null)

    function handleTaskValue(event: React.ChangeEvent<HTMLInputElement>):void{
        setInputTaskValue(event?.target.value)
    }

    function handleDescriptionValue(event: React.ChangeEvent<HTMLTextAreaElement>):void{
        setInputDescriptionValue(event?.target.value)
    }

    function handleCancel(){
        setInputTaskValue('')
        setInputDescriptionValue('')
        setPriority(null)
    }

    function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!inputTaskValue) return;

    const newTask: ITask = {
        taskName: inputTaskValue,
        ...(inputDescriptionValue && { description: inputDescriptionValue }),
        ...(priority && { priority }),
    };

    onAddTask(newTask);
    handleCancel();
}

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "100%",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1rem",
                background: "inherit",
                marginTop: '2rem'
            }}
            autoComplete="off" >
            <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <input
                    type="text"
                    placeholder="Task name"
                    name="taskName"
                    autoComplete="off"
                    value={inputTaskValue}
                    onChange={handleTaskValue}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: "none",
                        background: 'none',
                        fontSize: "1.3rem",
                        outline: 'none',
                        color:'white',
                        fontFamily: "Montserrat",
                    }}
                />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <textarea
                    placeholder="Description"
                    name="description"
                    autoComplete="off"
                    value={inputDescriptionValue}
                    onChange={handleDescriptionValue}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "5px",
                        border: 'none',
                        fontSize: "1rem",
                        background: 'none',
                        outline: 'none',
                        color:'white',
                        maxWidth: '100%',
                        fontFamily: "Montserrat",
                        height: '2rem'
                    }}
                />
            </label>
            <PriorityButtons priority={priority} setPriority={setPriority}/>
            <hr style={{ width: "100%", height: "1px", background: "white", border: "none" }} />
            <HandleButtons onCancel={handleCancel}/>
        </form>
    );
}