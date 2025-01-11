import "../../style.css";
import { VerticalTableHeader } from "./VerticalTableHeader";
import { VerticalTableEntries } from "./VerticalTableEntries";


export interface TableType {
    [x: string]: number | string | boolean | undefined;
}

type TableProps = {
    TableArray: TableType
    data_property_class?: string
    data_entry_class?: string
    table_class?: string
    key_header?: string
    label_header?: string
}

export function VerticalTable(tableProps: TableProps) {
    return (
        <div className="custom-bootstrap">
            <div className="table-responsive">
                <table className={"table " + (tableProps?.table_class || "")}>
                    {
                        <VerticalTableHeader 
                            key_header={tableProps.key_header} 
                            label_header={tableProps.label_header} 
                            data_property_class={tableProps.data_property_class} 
                            data_entry_class={tableProps.data_entry_class}/>
                    }
                    <tbody>
                        <VerticalTableEntries 
                            data_property_class={tableProps.data_property_class} 
                            data_entry_class={tableProps.data_entry_class}
                            TableArray = {tableProps.TableArray}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}