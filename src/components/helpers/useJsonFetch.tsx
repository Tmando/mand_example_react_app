import { useState } from 'react';
import { CustomJsonValue } from "./CustomJsonValue";
export type HTTPMethod = "GET" | "POST" | "PUT" | "HEAD" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE"
export type customFetchInputs = {
    url: string;
    method: HTTPMethod;
    header?: {[x: string]: number | string | boolean };
    body?: CustomJsonValue;
}

type customFetchResponse = {
    data?: CustomJsonValue
    error?: string,
    is_loading?: boolean,
    fetch_data_funct:(inputs:customFetchInputs) => void
};

type customFetchStates = {
    is_loading?: boolean,
    data?: CustomJsonValue,
    error?: string
};


export const useJsonFetch = (): customFetchResponse => {
    const [state, set_state] = useState<customFetchStates>({
        is_loading:false
    })
    
    const custom_fetch_data = async function(inputs: customFetchInputs) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if(inputs.header !== undefined) {
            const keyList = Object.keys(inputs?.header);
            for (const curKey in keyList) {
                myHeaders.append(curKey,inputs?.header[curKey].toString());
            }
        }

        const fetchData = async () => {
            try {
            set_state({
                    is_loading:true
            });
            const response = await fetch(inputs.url,{
                method:inputs.method,
                body:JSON.stringify(inputs?.body) ?? null,
                headers: myHeaders
              });
              const json = await response.json();
              set_state({
                ...state,
                data:json,
                is_loading:false
              });
            } catch (error) {
                set_state({
                    is_loading:false,
                    error:JSON.stringify(error)
                });
            }
          };
          fetchData();
    }

    const fetch_data_funct = function(inputs:customFetchInputs){
        custom_fetch_data(inputs);
    }


    return {data: state.data,error:state.error,is_loading:state.is_loading,fetch_data_funct}
}