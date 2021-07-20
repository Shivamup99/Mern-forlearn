import React ,{useState,useEffect} from'react'
import { Route } from "react-router-dom";
import Banner from '../component/Banner';
import Navbar from '../component/Navbar';
import Houseform from '../component/Houseform';
import Rent from '../component/Rent';
import Forsale from '../component/Forsale';
import Contact from '../component/Contact';
import About from '../component/About';
import Register from '../component/Register';
import Notfound from '../component/Notfound';
import Forget from '../component/Forget';
import Reset from '../component/Reset';
import Profile from '../component/Profile';
import Logout from '../component/Logout';
import Protected from '../component/Protected'
import user from '../services/service'
import house from '../services/forSale'

function Main(){
const[users,setUsers]=useState([])
const [houses , setHouses] = useState([])
// const [profile , setProfile]= useState([])
useEffect(()=>{
  loadUser()

},[])
 
const loadUser = async()=>{
   
  let users=await user.getUser();
  let home = await house.getHouse()
    setUsers(users.data)
    setHouses(home.data)
    // console.log('users',users.data)
    // console.log('house',home.data)
}

// const loadProfile = async()=>{
//   let userPro = await user.getProfile()
//   console.log('userProfile',userPro.data)
// }

return(
    <>
     <Navbar users ={users}/>
      <Route path="/" exact  component={Banner} />
      <Protected path="/sale/property" exact component={Houseform} />
      <Protected path="/to/rent/house" exact component={Rent}/>
      <Protected path ="/for/sale/house" exact >
       <Forsale houses={houses}/>
      </Protected> 
      <Protected path="/contact/us" exact component={Contact}/>
      <Route path="/about/us" exact component={About}/>
      
      <Route path="/register-user" exact component={Register}/>
      <Route path="/forget-password" exact  component={Forget}/>
      <Route path="/resetpassword/:token" exact  component={Reset}/>
      <Protected path ="/logout" exact component={Logout}/>
      <Protected path="/my-profile/:_id" exact  >
        <Profile users={users}/>
        </Protected>
      <Route path="/404" component={Notfound}/>

      {/* <Redirect to="/404"/> */}
      </>
)
}
export default Main