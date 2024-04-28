
import Login from "./pages/auth/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/Dashboard"
import AllUsers from "./pages/user/AllUser"
import LoggedUsers from "./pages/user/LoggedUser"
import UpdateProfile from "./pages/user/UpdateProfile"
import UpdateUserRole from "./pages/user/UpdateUserRole"
import CreateBanner from "./pages/banner/CreateBanner"
import Banner from "./pages/banner/Banner"
import UpdateBanner from "./pages/banner/UpdateBanner"
import Promos from "./pages/promo/Promos"
import PromoById from "./pages/promo/PromoById"
import CreatePromo from "./pages/promo/CreatePromo"
import UpdatePromo from "./pages/promo/UpdatePromo"
import Category from "./pages/category/Category"
import CategoryDetail from "./pages/category/CategoryDetail"
import CreateCategory from "./pages/category/CreateCategory"
import UpdateCategory from "./pages/category/UpdateCategory"
import Activities from "./pages/activity/Activities"
import ActivityDetail from "./pages/activity/ActivityDetail"
import UpdateActivity from "./pages/activity/UpdateActivity"
import CreateActivity from "./pages/activity/CreateActivity"
import ActivityByCategoryId from "./pages/activity/ActivityByCategoryId"
import UploadImage from "./pages/uploadImage/UploadImage"
import ActivityUser from "./pages/activity/ActivityUser"

function App() {


  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    
      <Route path="/allUser" element={<AllUsers/>}/>
      <Route path="/loggedUser" element={<LoggedUsers/>}/>
      <Route path="/allUser/updateProfile/:id" element={<UpdateProfile/>}/>
      <Route path="/allUser/updateUserRole/:id" element={<UpdateUserRole/>}/>

      <Route path="/banner/createBanner" element={<CreateBanner/>}/>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/banner/updateBanner/:id" element={<UpdateBanner/>}/>

      <Route path="/promos" element={<Promos/>}/>
      <Route path="/promos/promosById/:id" element={<PromoById/>}/>
      <Route path="/promos/createPromo" element={<CreatePromo/>}/>
      <Route path="/promos/promosById/:id/updatePromo/:id" element={<UpdatePromo/>}/>

      <Route path="/category" element={<Category/>}/>
      <Route path="/category/categoryDetail/:id" element={<CategoryDetail/>}/>
      <Route path="/category/createCategory" element={<CreateCategory/>}/>
      <Route path="/category/categoryDetail/:id/updateCategory/:id" element={<UpdateCategory/>}/>

      <Route path="/activities" element={<Activities/>}/>
      <Route path="/activities/activityDetail/:id" element={<ActivityDetail/>}/>
      <Route path="/activities/activityDetail/:id/updateActivity/:id" element={<UpdateActivity/>}/>
      <Route path="/activities/createActivity" element={<CreateActivity/>}/>
      <Route path="/activities/activityByCategory/:id" element={<ActivityByCategoryId/>}/>
      <Route path="/activities/activityUser/:id" element={<ActivityUser/>}/>

      <Route path="/uploadImage" element={<UploadImage/>}/>

     

 

      
    </Routes>
  </BrowserRouter>  
</>
  )
}

export default App
