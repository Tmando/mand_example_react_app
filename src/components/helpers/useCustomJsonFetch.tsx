import { useReducer } from "react";
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
}

type customFetchMaschine = {
    state: string,
    is_loading?: boolean,
    data?: CustomJsonValue,
    error?: string
}

type customFetchAction = {
    type: 'fetch'
} |
{
    type: 'fetched', payload: {
        data: CustomJsonValue
    }
}
    |
{
    type: 'error', payload: {
        error: string
    }
};

export const useCustomJsonFetch = (): customFetchResponse => {
    const reducer_function = function (state: customFetchMaschine, action: customFetchAction):customFetchMaschine {
        switch (state.state) {
            case "idle": {
                if (action.type === "fetch") {
                    return { ...state, state: "loading", is_loading: true };
                }
                return state;
            }
            case "loading": {
                if (action.type === "fetched") {
                    return { ...state, state: "idle", is_loading: false, data: action.payload.data };
                }
                if (action.type === "error") {
                    return { ...state, state: "idle", is_loading: false,error:action.payload.error };
                }
                return state;
            }
        }
        return state;
    }
    const [fetch_inputs, dispatch] = useReducer(reducer_function, { state: "idle", is_loading: false,data:null,error:"" })
    
    const custom_fetch_data = async function(inputs: customFetchInputs) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        if(inputs.header !== undefined) {
            const keyList = Object.keys(inputs?.header);
            for (const curKey in keyList) {
                myHeaders.append(curKey,inputs?.header[curKey].toString());
            }
        }

        dispatch({type:"fetch"});
        const fetchData = async () => {
            try {
              const response = await fetch(inputs.url,{
                method:inputs.method,
                body:JSON.stringify(inputs?.body) ?? "",
                headers: myHeaders
              });
              const json = await response.json();
              dispatch({type:"fetched",payload:{
                data:json
              }});
            } catch (error) {
                dispatch({type:"error",payload:{
                    error:JSON.stringify(error)
                }});
            }
          };
          fetchData();
    }

    const fetch_data_funct = function(inputs:customFetchInputs){
        custom_fetch_data(inputs);
    }


    return {data: fetch_inputs.data,error:fetch_inputs.error,is_loading:fetch_inputs.is_loading,fetch_data_funct}
}