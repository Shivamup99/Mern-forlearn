import http from '../common/http'

class auth{
    
    regUser(data){
       return http.post('/user',data)
    }
    loginUser(data){
       return http.post('/userLogin',data)
       
    }
    forgetPass(data){
        return http.put('/forgotPassword',data)
    }
   
}

export default new auth();