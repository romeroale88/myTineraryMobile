const initialState = {
    loggedUser:null
}
const userReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'LOG_USER':
            return{
                ...state,
                loggedUser:action.payload   
            }
        case 'LOG_OUT_USER':
            return{
                ...state,
                loggedUser:null
            }
        default:
            return state
    }
}
export default userReducer