import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_REQUEST});
        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("fetch issues", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues:response.data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_FAILURE,
                error: error.massage,
            });
            
        }
    };
};
export const fetchIssueById = (id) => {
    return async (dispatch) =>{
        dispatch({type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/issues/${id}`);
            console.log("fetch issue by id", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            });
        }
    };
};
export const updateIssueStatus = ({id,status}) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST});
        try {
            const response = await api.put(`/api/issue/${id}/status/${status}`);
            console.log("update issue status", response.data);
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
                error: error.message,
            });
        }
    };
};
export const assignedUserToIssue = ({issueId,userId}) =>{
    return async (dispatch) => {
        dispatch({type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
        try {
            const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`)
            console.log("Assign issue --- ", response.data);
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issue: response.data,
            });
        } catch (error) {
            console.log("error",error)
            dispatch({
                type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error: error.message,
            });
            
        }
    };
};
