import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import UserDashBoard from "./layouts/UserDashBoard"
import Products from "./pages/Products"
import Medicine from "./pages/Medicine"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute >
          <UserDashBoard>
            <Products />
          </UserDashBoard>
        </PrivateRoute>} />
        <Route path="/Medicine" element={<PrivateRoute >
          <UserDashBoard>
            <Medicine />
          </UserDashBoard>
        </PrivateRoute>} />

        <Route path="/Profile" element={
          <PrivateRoute >
            <UserDashBoard>
              <Profile />
            </UserDashBoard>
          </PrivateRoute>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<PrivateRoute>
          <NotFound />
        </PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App
