import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types.js";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// GET LEADS

export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/lead/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD

export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/lead/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadDeleted: "U have been Killed" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err, "El error 2"));
};

// ADD LEAD

export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post("/api/lead/", lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ leadCreated: "Lead Created" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
