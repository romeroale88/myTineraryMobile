import axios from 'axios'

const userActions = {
    newUser: (newUser)=>{
        return async (dispatch,getState)=>{
            const res = await axios.post('https://mytinerary-romero.herokuapp.com/api/user/signup',newUser)
            console.log(res.data)

            if(!res.data.success){
                return res.data
            }
            dispatch({type: 'LOG_USER',payload: res.data})
        }
    },
    loginUser: (user)=>{
        return async (dispatch, getState) =>{
            const res = await axios.post('https://mytinerary-romero.herokuapp.com/api/user/signin',user)
            if(!res.data.success){
                return res.data
            }
            dispatch({type: 'LOG_USER', payload: res.data})
        }
    },
    logoutUser: () =>{
        return (dispatch, getState) =>{
            dispatch({type: 'LOG_OUT_USER'})
        }
    }
}

export default userActions