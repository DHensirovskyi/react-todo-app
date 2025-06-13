import { useRef } from "react"

export default function Title(){
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    return(
        <div className='Title'style={{display: 'flex', marginBottom: '2rem'}}>
            <input type="text" placeholder="New Page" ref={inputRef} style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'rgb(255, 255, 255, 100%)',
                fontWeight: 'bold',
                fontSize: '3.7rem',
                fontFamily: "Montserrat",
                maxWidth: '100%'}}
                />
                <button style={{
                    border: 'none',
                    background: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    borderRadius: '100%',
                    marginLeft: 'auto',
                    marginTop: '2.5%'
                }}>
                </button>
        </div>
    )
}