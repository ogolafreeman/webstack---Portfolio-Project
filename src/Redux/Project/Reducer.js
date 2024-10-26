import { ACCEPT_INVITATION_PROJECTS_REQUEST, CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_REQUEST, DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECTS_REQUEST, SEARCH_PROJECTS_SUCCESS } from "./ActionTypes";

const initialState={
    projects:[],
    loading:false,
    error:null,
    ProjectDetails:null,
    searchProjects:[]
}
export const projectReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_PROJECTS_REQUEST:
        case CREATE_PROJECTS_REQUEST:
        case DELETE_PROJECTS_REQUEST:
        case FETCH_PROJECTS_BY_ID_REQUEST:
        case ACCEPT_INVITATION_PROJECTS_REQUEST:
        case INVITE_TO_PROJECTS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case FETCH_PROJECTS_SUCCESS:
            return{
                ...state,
                loading:false,
                projects:action.playload,
                error:null
            };
        case SEARCH_PROJECTS_SUCCESS:
            return{
                ...state,
                loading:false,
                searchProjects:action.playload,
                error:null
            };
            case CREATE_PROJECTS_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    projects: [...state.projects,action.project],
                    error:null
                };
                case FETCH_PROJECTS_BY_ID_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        ProjectDetails: action.project,
                        error:null
                    };
                    case DELETE_PROJECTS_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        projects: state.projects.filter((project) =>project.id === action.projectId),
                        error:null
                    };
        default:
            return state;
    }
};
