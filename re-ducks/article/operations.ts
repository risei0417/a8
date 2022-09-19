import { Action } from "@reduxjs/toolkit";
import { CommonConstant } from "constants/common";
import { actions } from "re-ducks/article/slices";
import { Dispatch } from "react";

const fetchData = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await fetch(`${CommonConstant.API_BASE_URL}/getArticle?id=${id}`, {
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
  fetchData,
};
