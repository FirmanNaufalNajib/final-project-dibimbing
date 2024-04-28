import Login from "./pages/auth/Login"
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

export const RouteList = [
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/allUser",
    element: (
    <ProtectedRoutes>
      <AllUsers />
    </ProtectedRoutes>
    )
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/allUser",
    element: <AllUsers/>
  },
  {
    path: "/loggedUser",
    element: <LoggedUsers/>

  },
  {
    path: "/allUser/updateProfile/:id",
    element: <UpdateProfile/>{""},

  },
  {
    path: "/allUser/updateUserRole/:id",
    element: <UpdateUserRole/>{""}

  },
  {
    path: "/banner/",
    element:  <Banner/>

  },
  {
    path: "/banner/createBanner",
    element: <CreateBanner/>

  },
  {
    path: "/banner/updateBanner/:id",
    element: <UpdateBanner/>{""}

  },
  {
    path: "/promos",
    element: <Promos/>

  },
  {
    path: "/promos/promosById/:id",
    element: <PromoById/>{""}

  },
  {
    path: "/promos/createPromo",
    element: <CreatePromo/>

  },
  {
    path: "/promos/promosById/:id/updatePromo/:id",
    element: <UpdatePromo/>{""}

  },
  {
    path: "/category",
    element: <Category/>

  },
  {
    path: "/category/categoryDetail/:id",
    element: <CategoryDetail/>{""}

  },
  {
    path: "/category/createCategory",
    element: <CreateCategory/>

  },
  {
    path: "/category/categoryDetail/:id/updateCategory/:id",
    element: <UpdateCategory/>{""}

  },
  {
    path: "/activities",
    element: <Activities/>

  },
  {
    path: "/activities/activityDetail/:id",
    element: <ActivityDetail/>{""}

  },
  {
    path: "/activities/activityDetail/:id/updateActivity/:id",
    element: <UpdateActivity/>{""}

  },
  {
    path: "/activities/createActivity",
    element: <CreateActivity/>

  },
  {
    path: "/activities/activityByCategory/:id",
    element: <ActivityByCategoryId/>{""}

  },
  {
    path: "/activities/activityUser/:id",
    element: <ActivityUser/>{""}

  },
  {
    path: "/uploadImage",
    element: <UploadImage/>

  }

]
