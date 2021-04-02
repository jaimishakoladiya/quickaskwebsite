import {
    ADD_DEPT_QUESTIONS, DELETE_DEPT_QUESTIONS, ADD_JOB_QUESTIONS, DELETE_JOB_QUESTIONS
    , ADD_MANAGER_QUESTIONS, DELETE_MANAGER_QUESTIONS
} from "../../types/companyprofile/companyprofileTypes";

export const adddeptquestion = (newquestion) => {
    return {
        type: ADD_DEPT_QUESTIONS,
        payload: newquestion
    }
}

export const deletedeptquestion = (id) => {
    return {
        type: DELETE_DEPT_QUESTIONS,
        payload: id
    }
}
export const addjobquestion = (newquestion) => {
    return {
        type: ADD_JOB_QUESTIONS,
        payload: newquestion
    }
}

export const deletejobquestion = (id) => {
    return {
        type: DELETE_JOB_QUESTIONS,
        payload: id
    }
}

export const addmanagerquestion = (newquestion) => {
    return {
        type: ADD_MANAGER_QUESTIONS,
        payload: newquestion
    }
}

export const deletemanagerquestion = (id) => {
    return {
        type: DELETE_MANAGER_QUESTIONS,
        payload: id
    }
}