import "../../style.css"


type CustomBootstrapInputProps = {
    type?: string
    floating_container_class?: string
    input_id: string
    value?: string | number | readonly string[] | undefined
    label: string
    placeholder: string
    input_class?: string
    accept?: string
    alt?: string
    capture?: boolean | "user" | "environment" | undefined,
    autoComplete?: string
    autoFocus?: boolean
    disabled?: boolean
    height?: number
    max?: number
    maxLength?: number
    min?: number
    minLength?: number
    multiple?: boolean
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInputCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInvalid?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onInvalidCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSelectCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void
    pattern?: string
    readOnly?: boolean
    required?: boolean
    size?: number
    src?: string
    step?: number
    width?: string
}


export function BootstrapInput(props: CustomBootstrapInputProps) {
    return (
        <>
            <div className="custom-bootstrap">
                <div className={(props?.floating_container_class ?? '') + ' form-floating'}>
                    <input
                        {
                            ...props
                        }
                        className = {(props?.input_class ?? '') + ' form-control'} />
                    <label htmlFor={props?.input_id}>{props?.label}</label>
                </div>
            </div>
        </>

    )
}