import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import UserDashBoard from "./layouts/UserDashBoard"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <PrivateRoute >
            <UserDashBoard>
              <Home />
            </UserDashBoard>
          </PrivateRoute>
        } />
        <Route path="/Profile" element={<PrivateRoute >
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
