import { Action } from "@reduxjs/toolkit";
import { CommonConstant } from "constants/common";
import { Dispatch } from "react";
import { actions } from "re_ducks/category/slices";

export const fetchDataList = (params: { category: string }) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await fetch(`${CommonConstant.API_BASE_URL}/getCategory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(params),
      });
      const json = await res.json();
      dispatch(actions.save(json));
    } catch (err) {
      dispatch(actions.error());
    }
  };
};

export default {
  fetchDataList,
};
