import { v4 as uuidv4 } from 'uuid';
type VerticalTableEntriesProps = {
    TableArray?:TableType,
    data_property_class?:string,
    data_entry_class?:string
}
export interface TableType {
    [x: string]: number | string | boolean | undefined;
}

export function VerticalTableEntries(props:VerticalTableEntriesProps){
    const output_table = [];
    for (const property in props.TableArray) {
        const curEntry = `${props?.TableArray[property]}`;
        output_table.push(
            <tr key={uuidv4()}>
                <td key={uuidv4()} className={props?.data_property_class || ""}>{property}</td>
                <td key={uuidv4()} className={props?.data_entry_class || ""}>{curEntry}</td>
            </tr>
        );
    }
    return <>{output_table}</>
}