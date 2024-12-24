import "../../style.css"
import { useEffect } from "react";
import { useReducer } from "react";
import { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';


export interface TableType {
    [x: string]: number | string | boolean | undefined;
}

type CustomTableProps = {
    TableArray: TableType
    data_property_class?: string
    data_entry_class?: string
    table_class?: string
    key_header?: string
    label_header?: string
    onChange?: any
}

type CustomVerticalTableMaschine = {
    status: string,
    tableData?: TableType,
    tableHeader?: Array<string>,
    tableEntries?: Array<ReactNode>,
    tableHeaderEntries?: Array<ReactNode>,
    keyHeader?:string,
    labelHeader?:string
}

type CustomVerticalTableAction = {
    type: 'set_table_data',
    payload: {
        new_input: TableType
    }
} | {
    type: 'set_table_header', payload: {
        new_input: Array<string>
    }
} | {
    type: 'set_table_entries', payload: {
        new_input: Array<ReactNode>
    }
} | {
    type: 'set_table_header_entries', payload: {
        new_input: Array<ReactNode>
    }
} | {
    type: 'set_key_header', payload: {
        new_input: string
    }
} | {
    type: 'set_label_header', payload: {
        new_input: string
    }
}

export function CustomVerticalTable(tableProps: CustomTableProps) {
    const reducer_function = function (state: CustomVerticalTableMaschine, action: CustomVerticalTableAction) {
        switch (state.status) {
            case "idle": {
                if (action.type === "set_table_data") {
                    return { ...state, tableData: action.payload.new_input, status: "idle" };
                }
                if (action.type === "set_table_header") {
                    return { ...state, tableHeader: action.payload.new_input, status: "idle" };
                }
                if (action.type === "set_table_entries") {
                    return { ...state, tableEntries: action.payload.new_input, status: "idle" };
                }
                if (action.type === "set_table_header_entries") {
                    return { ...state, tableHeaderEntries: action.payload.new_input, status: "idle" };
                }
                if (action.type === "set_key_header") {
                    return { ...state, keyHeader: action.payload.new_input, status: "idle" };
                }
                if (action.type === "set_label_header") {
                    return { ...state, labelHeader: action.payload.new_input, status: "idle" };
                }
                return state;
            }
        }
        return state;
    }

    const [custom_table_inputs, dispatch] = useReducer(reducer_function, { status: 'idle',keyHeader:"", labelHeader:"" });

    const set_table_header = function(){
        if(custom_table_inputs.keyHeader !== "" || custom_table_inputs.labelHeader !== "" ){
            const output_header = [];
            output_header.push(
                <th key={uuidv4()}>
                    <td key={uuidv4()} className={tableProps?.data_property_class || ""}>{custom_table_inputs.keyHeader}</td>
                    <td key={uuidv4()} className={tableProps?.data_entry_class || ""}>{custom_table_inputs.labelHeader}</td>
                </th>
            );
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
            dispatch({type:"set_key_header", payload:{
                new_input : tableProps?.key_header
            }})
        }
        if(tableProps?.label_header !== undefined){
            dispatch({type:"set_label_header", payload:{
                new_input : tableProps?.label_header
            }})
        }
        if(tableProps?.label_header !== undefined || tableProps?.key_header !== undefined){
            set_table_header();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableProps?.key_header,tableProps?.label_header]);

    useEffect(() => {
        if(tableProps?.TableArray !== undefined){
            dispatch({type:"set_table_data", payload:{
                new_input : tableProps.TableArray
            }})
            const output_table = create_output_table(tableProps.TableArray);
            dispatch({type:"set_table_entries", payload:{
                new_input : output_table
            }})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tableProps.TableArray]);

    return (
        <div className="custom-bootstrap">
            <div className="table-responsive">
                <table className={"table " + (tableProps?.table_class || "")}>
                    {custom_table_inputs.tableHeader}
                    <tbody>
                        {custom_table_inputs.tableEntries}
                    </tbody>
                </table>
            </div>
        </div>
    );
}