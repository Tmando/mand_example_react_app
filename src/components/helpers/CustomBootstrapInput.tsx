import "../../style.css"


type CustomBootstrapInputProps = {
    type?: string
    floating_container_class?: string
    input_id: string
    value?: string | number | null
    label: string
    placeholder: string
    input_class?: string
    accept?: string
    alt?: string
    capture?: string
    autoComplete?: string
    autoFocus?: boolean
    disabled?: boolean
    height?: string
    list?: any
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


export function CustomBootstrapInput(props: CustomBootstrapInputProps) {
    return (
        <>
            <div className="custom-bootstrap">
                <div className={(props?.floating_container_class ?? '') + ' form-floating'}>
                    <input
                        id={props?.input_id ?? ''}
                        value={props?.value ?? ''}
                        type={props?.type ?? ''}
                        className={(props?.input_class ?? '') + ' form-control'}
                        placeholder={props?.placeholder ?? ''}
                        accept={props?.accept}
                        alt={props?.alt}
                        autoComplete={props?.autoComplete}
                        autoFocus={props?.autoFocus}
                        disabled={props?.disabled}
                        height={props?.height}
                        list={props?.list}
                        max={props?.max}
                        maxLength={props?.maxLength}
                        min={props?.min}
                        minLength={props?.minLength}
                        multiple={props?.multiple}
                        name={props?.name}
                        onChange={props?.onChange}
                        onChangeCapture={props?.onChangeCapture}
                        onInput={props?.onInput}
                        onInputCapture={props?.onInputCapture}
                        onInvalid={props?.onInvalid}
                        onInvalidCapture={props?.onInvalidCapture}
                        onSelect={props?.onSelect}
                        onSelectCapture={props?.onSelectCapture}
                        pattern={props?.pattern}
                        readOnly={props?.readOnly}
                        size={props?.size}
                        src={props?.src}
                        step={props?.step}
                        width={props?.width}
                    />
                    <label htmlFor={props?.input_id}>{props?.label}</label>
                </div>
            </div>
        </>

    )
}