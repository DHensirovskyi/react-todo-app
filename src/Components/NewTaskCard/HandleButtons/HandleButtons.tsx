import './HandleButtons.css'

interface HandleButtonsProps{
    onCancel?:() => void
}

export default function HandleButtons({onCancel}: HandleButtonsProps){
    return(
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                <button
                    type="button"
                    className="Cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="AddTask">
                    Add Task
                </button>
            </div>
    )
}