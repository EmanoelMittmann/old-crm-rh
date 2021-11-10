import {
    VALIDTOKEN,
    HEADERMENUITEMCLICKED,
    iTEMONMOUSEOVER,
    iTEMONMOUSEOUT,
    OPENMODAL,
    CLOSEMODAL,
    SETJOBLIST,
    SETSTATUSLIST,
    SETPROJECTTYPELIST,
    SETPROJECTLIST,
    JOBOPTIONCLICKED,
    STATUSOPTIONCLICKED,
    PROJECTTYPEOPTIONCLICKED,
    PROJECTOPTIONCLICKED,
    MODALEDITOPEN,
    MODALREGISTEROPEN,
    EDITJOBCLICKED,
    EDITSTATUSCLICKED,
    EDITPROJECTTYPECLICKED,
    SETSETTINGSPAGES,
    SETSEARCHNAME,
    SETSEARCHNAMEPROJECT,
    SETFILTERSTATUS,
    RESETCURRENTPAGE,
    RESETFILTERSTATUS,
    SETFILTERORDER,
    SETPROJECTSPAGES, 
    RESETCURRENTPAGEPROJECT,
    SETFILTERORDERPROJECTS,
    SETFILTERSTATUSPROJECTS,
    SETSTATUSCOLORS,
    SETPROJECTTYPELISTPROJECTS,
    SETSTATUSLISTPROJECTS,
    SETFILTERTYPESPROJECTS

} from '../types'

export const loggingIn = (payload) => ({
    type: VALIDTOKEN,
    payload
});

export const menuItemClicked = (payload) => ({
    type: HEADERMENUITEMCLICKED,
    payload
})

export const showItemDescription = (payload) => ({
    type: iTEMONMOUSEOVER,
    payload
})

export const hideItemDescription = (payload) => ({
    type: iTEMONMOUSEOUT,
    payload
})

export const openModal = () => ({
    type: OPENMODAL,
})

export const closeModal = () => ({
    type: CLOSEMODAL,
})

export const setJobList = ( payload ) => ({
    type: SETJOBLIST,
    payload
})

export const setStatusList = (payload) => ({
    type: SETSTATUSLIST,
    payload
})

export const setProjectTypeList = (payload) => ({
    type: SETPROJECTTYPELIST,
    payload
})



export const setProjectList = (payload) => ({
    type: SETPROJECTLIST,
    payload
})

export const jobOptionClicked = (payload) => ({
    type: JOBOPTIONCLICKED,
    payload
})

export const statusOptionClicked = (payload) => ({
    type: STATUSOPTIONCLICKED,
    payload
})

export const projectTypeOptionClicked = (payload) => ({
    type: PROJECTTYPEOPTIONCLICKED,
    payload
})

export const projectOptionClicked = (payload) => ({
    type: PROJECTOPTIONCLICKED,
    payload
})

export const modalEditOpen = () => ({
    type: MODALEDITOPEN
})

export const modalRegisterOpen = () => ({
    type: MODALREGISTEROPEN
})

export const editJobClicked = (payload) => ({
    type: EDITJOBCLICKED,
    payload
})

export const editStatusClicked = (payload) => ({
    type: EDITSTATUSCLICKED,
    payload
})

export const editProjectTypeClicked = (payload) => ({
    type: EDITPROJECTTYPECLICKED,
    payload
})

export const settingsPages = (payload) => ({
    type: SETSETTINGSPAGES,
    payload
})

export const setSearchName = (payload) => ({
    type: SETSEARCHNAME,
    payload
})

export const setFilterStatus = (payload) => ({
    type: SETFILTERSTATUS,
    payload
})

export const setFilterOrder = (payload) => ({
    type: SETFILTERORDER,
    payload
})

export const resetCurrentPage = (payload) => ({
    type: RESETCURRENTPAGE,
    payload
})

export const resetFilterStatus = () => ({
    type: RESETFILTERSTATUS,
})

export const projectsPages = (payload) => ({
    type: SETPROJECTSPAGES,
    payload
})

export const setSearchNameProject = (payload) => ({
    type: SETSEARCHNAMEPROJECT,
    payload
})

export const resetCurrentPageProject = (payload) => ({
    type: RESETCURRENTPAGEPROJECT,
    payload
})

export const setFilterOrderProjects = (payload) => ({
    type: SETFILTERORDERPROJECTS,
    payload
})

export const setFilterStatusProjects = (payload) => ({
    type: SETFILTERSTATUSPROJECTS,
    payload
})

export const setStatusColors = (payload) => ({
    type: SETSTATUSCOLORS,
    payload
})

export const setStatusListProjects = (payload) => ({
    type: SETSTATUSLISTPROJECTS,
    payload
})

export const setTypeListProjects = (payload) => ({
    type: SETPROJECTTYPELISTPROJECTS,
    payload
})

export const setFilterTypesProjects = (payload) => ({
    type: SETFILTERTYPESPROJECTS,
    payload
})
