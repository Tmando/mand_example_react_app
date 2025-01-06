import { useState } from "react";
import { useJsonFetch } from "./helpers/useJsonFetch";
import { HTTPMethod } from "./helpers/useJsonFetch";
import { BootstrapButton } from "./helpers/BootstrapButton";
import { BootstrapInput } from "./helpers/BootstrapInput";
import { VerticalTable } from "./helpers/VerticalTable";
type RandomNumberStates = {
  min_num: number,
  max_num: number,
  result_number: number
}
type RandomResponse =  {
  result:number
}

export function RandomNumberComponent() {
  const { data, is_loading, fetch_data_funct } = useJsonFetch();
  const [state, set_state] = useState<RandomNumberStates>({
    min_num:NaN,
    max_num:NaN,
    result_number:NaN
  });

  const disable_btn = function () {
    if (isNaN(parseFloat(state.min_num.toString())) ||
      isNaN(parseFloat(state.max_num.toString())) ||
      is_loading == true) {
      return true
    }
    return false;
  }

  
    if(data !== undefined && data !== null && (data as RandomResponse).result !== state.result_number){
      set_state({
        ...state,
        result_number:(data as RandomResponse).result
      });
    }


  return (
    <>
      <h1>Random Number</h1>
      <div className="custom-bootstrap">
        <BootstrapInput
          value={state.min_num}
          type="number"
          input_id="min_num_field"
          label="Min Num"
          placeholder="Min Num"
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            set_state({
              ...state,
              min_num:parseFloat(e.target.value)
            });
          }}
        />
        <hr />
        <BootstrapInput
          onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
            set_state({
              ...state,
              max_num:parseFloat(e.target.value)
            });
          }}
          value={state.max_num}
          type="number"
          input_id="max_num_field"
          label="Max Num"
          placeholder="Max Num" />
        <hr />
        <BootstrapButton
          disabled={disable_btn()}
          label={"Berechnen"}
          onClick={async () => {
            fetch_data_funct({
              url: import.meta.env.VITE_prod_address + "/random",
              method: "POST" as HTTPMethod,
              body: {
                min_num: Number(state.min_num),
                max_num: Number(state.max_num)
              }
            });
          }}
        />
        <hr />
        {!is_loading && !Number.isNaN(state.result_number) && <VerticalTable TableArray={
            {
                "Result": state.result_number
            }
        }
            table_class="table-hover"
            data_property_class="col_label"
            data_entry_class="col_result"
        />}
      </div>
    </>
  );
}