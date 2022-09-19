import { Action } from "@reduxjs/toolkit";
import { CommonConstant } from "constants/common";
import { Dispatch } from "react";
import { actions } from "re-ducks/index/slices";

const fetchDataList = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await fetch(`${CommonConstant.API_BASE_URL}/getIndex`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
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
