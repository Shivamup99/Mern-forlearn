import http from '../common/http'

class house{
    token=localStorage.getItem('token')
    _id = localStorage.getItem('_id')
    getHouse()
    {
        return http.get(`/houseSale`,{
            headers:{
                Authorization:`Bearer ${this.token}`
            }
        })
    }
}

export default new house();