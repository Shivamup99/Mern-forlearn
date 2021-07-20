import http from '../common/http'

class user{
    
    getUser()
    {
       let token=localStorage.getItem('token')
       let _id = localStorage.getItem('_id')
   
        return http.get(`/user/${_id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }
    putProfile(data,id){
        let token=localStorage.getItem('token')
       let _id = localStorage.getItem('_id')
   
        return http.put(`/profile/${id}`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
    }
   
}

export default new user();