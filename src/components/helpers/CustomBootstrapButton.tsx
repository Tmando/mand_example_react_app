import "../../style.css"

export type ButtonProps = {
    label?: string
    class?: string
    disabled?: boolean
    id?: string
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void
}
export function CustomBootstrapButton(props:ButtonProps){
    return <><div className="custom-bootstrap"><button 
    id={props?.id}  
    onClick={props?.onClick} 
    disabled={props?.disabled}
    className={(props?.class ?? '') + ' btn btn-outline-primary'}>    
        {props?.label}
    </button>
    </div>
    </>
}