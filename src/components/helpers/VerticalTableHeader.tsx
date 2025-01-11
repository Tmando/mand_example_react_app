type VerticalTableHeaderProps = {
    data_property_class?: string
    data_entry_class?: string
    key_header?: string
    label_header?: string
}


import { v4 as uuidv4 } from 'uuid';

export function VerticalTableHeader(props:VerticalTableHeaderProps){
    const output_header = [];
    if(props.key_header !== "" || props.label_header !== "" ){
        output_header.push(
            <th key={uuidv4()}>
                <td key={uuidv4()} className={props?.data_property_class || ""}>{props?.key_header}</td>
                <td key={uuidv4()} className={props?.data_entry_class || ""}>{props?.label_header}</td>
            </th>
        );
    }
    return <>
    {output_header}
    </>
}