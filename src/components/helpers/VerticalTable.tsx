import "../../style.css"
import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';


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

type VerticalTableStates = {
    tableData?: TableType,
    tableHeader?: Array<string>,
    tableEntries?: Array<ReactNode>,
    tableHeaderEntries?: Array<ReactNode>,
    keyHeader?:string,
    labelHeader?:string
}

export function VerticalTable(tableProps: TableProps) {

    const [state, set_state] = useState<VerticalTableStates>({

    });

    const set_table_header = function(){
        if(state.keyHeader !== "" || state.labelHeader !== "" ){
            const output_header = [];
            output_header.push(
                <th key={uuidv4()}>
                    <td key={uuidv4()} className={tableProps?.data_property_class || ""}>{state.keyHeader}</td>
                    <td key={uuidv4()} className={tableProps?.data_entry_class || ""}>{state.labelHeader}</td>
                </th>
            );
            set_state({
                ...state,
                tableHeaderEntries:output_header
            });
        }
    }


    const create_output_table = function(input_table_array:TableType){
        const curTableArray = input_table_array;
        const output_table = [];
        for (const property in curTableArray) {
                const curEntry = `${tableProps?.TableArray[property]}`;
                output_table.push(
                    <tr key={uuidv4()}>
                        <td key={uuidv4()} className={tableProps?.data_property_class || ""}>{property}</td>
                        <td key={uuidv4()} className={tableProps?.data_entry_class || ""}>{curEntry}</td>
                    </tr>
                );
        }
        return output_table;
    }


    useEffect(() => {
        if(tableProps?.key_header !== undefined){
            set_state({
                ...state,
                keyHeader:tableProps?.key_header
            });
        }
        if(tableProps?.label_header !== undefined){
            set_state({
                ...state,
                keyHeader:tableProps?.label_header
            });
        }
        if(tableProps?.label_header !== undefined || tableProps?.key_header !== undefined){
            set_table_header();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableProps?.key_header,tableProps?.label_header]);

    useEffect(() => {
        if(tableProps?.TableArray !== undefined){
            set_state({
                ...state,
                tableData:tableProps.TableArray
            });
            set_state({
                ...state,
                tableEntries:create_output_table(tableProps.TableArray)
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tableProps.TableArray]);

    return (
        <div className="custom-bootstrap">
            <div className="table-responsive">
                <table className={"table " + (tableProps?.table_class || "")}>
                    {state.tableHeader}
                    <tbody>
                        {state.tableEntries}
                    </tbody>
                </table>
            </div>
        </div>
    );
}