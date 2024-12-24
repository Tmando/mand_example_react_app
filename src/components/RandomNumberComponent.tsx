import { useEffect, useReducer } from "react";
import { useCustomJsonFetch } from "./helpers/useCustomJsonFetch";
import { HTTPMethod } from "./helpers/useCustomJsonFetch";
import { CustomBootstrapButton } from "./helpers/CustomBootstrapButton";
import { CustomBootstrapInput } from "./helpers/CustomBootstrapInput";
import { CustomVerticalTable } from "./helpers/CustomVerticalTable";
type RandomNumberMaschine = {
  status: string,
  min_num: number,
  max_num: number,
  result_number: number
}
type RandomResponse =  {
  result:number
}

type RandomAction = {
  type: 'set_min_num',
  payload: {
    new_input: number
  }
} | {
  type: 'set_max_num', payload: {
    new_input: number
  }
} | {
  type: 'set_result_number', payload: {
    new_input: number
  }
};

export function RandomNumberComponent() {
  const { data, is_loading, fetch_data_funct } = useCustomJsonFetch();

  const reducer_function = function (state: RandomNumberMaschine, action: RandomAction): RandomNumberMaschine {
    switch (state.status) {
      case "idle": {
        if (action.type === "set_min_num") {
          return { ...state, min_num: action.payload.new_input, status: "idle" };
        }
        if (action.type === "set_max_num") {
          return { ...state, max_num: action.payload.new_input, status: "idle" };
        }
        if (action.type === "set_result_number") {
          return { ...state, result_number: action.payload.new_input, status: "idle" };
        }
        return state;
      }
    }
    return state;
  }
  const [random_inputs, dispatch] = useReducer(reducer_function, { min_num: NaN, max_num: NaN, result_number: NaN, status: "idle" })
  const disable_btn = function () {
    if (isNaN(parseFloat(random_inputs.min_num.toString())) ||
      isNaN(parseFloat(random_inputs.max_num.toString())) ||
      is_loading == true) {
      return true
    }
    return false;
  }

  useEffect(() => {
    if(data !== undefined && data !== null){
      dispatch({ type: "set_result_number", payload: { new_input: (data as RandomResponse).result } })
    }
  }, [data])

  if (is_loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <h1>Random Number</h1>
      <div className="custom-bootstrap">
        <CustomBootstrapInput
          value={random_inputs.min_num}
          type="number"
          input_id="min_num_field"
          label="Min Num"
          placeholder="Min Num"
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            dispatch({ type: "set_min_num", payload: { new_input: parseFloat(e.target.value) } });
          }}
        />
        <hr />
        <CustomBootstrapInput
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            dispatch({ type: "set_max_num", payload: { new_input: parseFloat(e.target.value) } });
          }}
          value={random_inputs.max_num}
          type="number"
          input_id="max_num_field"
          label="Max Num"
          placeholder="Max Num" />
        <hr />
        <CustomBootstrapButton
          disabled={disable_btn()}
          label={"Berechnen"}
          onClick={async () => {
            fetch_data_funct({
              url: import.meta.env.VITE_prod_address + "/random",
              method: "POST" as HTTPMethod,
              body: {
                min_num: Number(random_inputs.min_num),
                max_num: Number(random_inputs.max_num)
              }
            });
          }}
        ></CustomBootstrapButton>
        <hr />
        {!Number.isNaN(random_inputs.result_number) && <CustomVerticalTable TableArray={
            {
                "Result": random_inputs.result_number
            }
        }
            table_class="table-hover"
            data_property_class="col_label"
            data_entry_class="col_result"
        ></CustomVerticalTable>}
      </div>
    </>
  );

}