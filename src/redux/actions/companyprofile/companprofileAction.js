import {
    ADD_DEPT_QUESTIONS, DELETE_DEPT_QUESTIONS, ADD_JOB_QUESTIONS, DELETE_JOB_QUESTIONS
, ADD_MANAGER_DATA   , ADD_MANAGER_QUESTIONS, DELETE_MANAGER_QUESTIONS,
 ADD_DEPT_DATA,ADD_JOB_DATA, EDIT_DEPT_DATA, EDIT_JOB_DATA,EDIT_MANAGER_DATA,DELETE_QUESTION
,DELETE_DEPT_DATA,DELETE_JOB_DATA,
DELETE_MANAGER_DATA, GET_DEPT_DATA,GET_JOB_DATA,GET_MANAGER_DATA
} from "../../types/companyprofile/companyprofileTypes";
import axios from "axios";
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
export const adddeptdata=(data)=>{
    return {
        type:ADD_DEPT_DATA,
        payload:data
    }
}
export const addmanagerdata=(data)=>{
    return{
        type:ADD_MANAGER_DATA,
        payload:data
    }
}

export const addjobdata=(data)=>{
    return{
        type:ADD_JOB_DATA,
        payload:data
    }
}

export const editdeptdata=(data,id)=>{
    return{
        type:EDIT_DEPT_DATA,
        payload:data,
        id:id
    }
}
export const editjobdata=(data,id)=>{
    return{
        type:EDIT_JOB_DATA,
        payload:data,
        id:id
    }
}
export const editmanagerdata=(data,id)=>{
    return{
        type:EDIT_MANAGER_DATA,
        payload:data,
        id:id
    }
}

export const deletedeptdata=(id)=>{
    return{
        type:DELETE_DEPT_DATA,
        payload:id,
       
    }
}
export const deletejobdata=(id)=>{
    return{
      type:DELETE_JOB_DATA,
      payload:id,
    }
}
export const deletemanagerdata=(id)=>{
    return{
        type:DELETE_MANAGER_DATA,
        payload:id,
    }
}
export const deletequestion=(section,userid,queid)=>{
    return{
        type:DELETE_QUESTION,
        payload:section,
        userid:userid,
        queid:queid
    }
}
export const getdeptdata=(data)=>{
    return {
        type:GET_DEPT_DATA,
        payload:data
    }
}
export const getjobdata=(data)=>{
    return{
        type:GET_JOB_DATA,
        payload:data
    }
}
export const getmanagerdata=(data)=>{
    return{
        type:GET_MANAGER_DATA,
        payload:data
    }
}

const user = JSON.parse(localStorage.getItem("user"));

const token = user.token;
export const fetchdata =  () => {
    return async dispatch => {
        try {
            let dept = await axios({
                method:'get',
                url:"http://localhost:2002/get-department",
                headers:{
                  Authorization:token
                }
              })
              let job = await axios({
                method:'get',
                url:"http://localhost:2002/get-job-detail",
                headers:{
                  Authorization:token
                }
              })
              let manager = await axios({
                method:'get',
                url:"http://localhost:2002/get-manager",
                headers:{
                  Authorization:token
                }
              })
           dispatch(getdeptdata(dept.data.result))
           dispatch(getjobdata(job.data.result))
           dispatch(getmanagerdata(manager.data.data))
        }
        catch(e){
            console.log(e)
        }
    }
}