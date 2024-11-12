import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <Link to='/Login'>Login</Link>
            <Link to='/Profile'>Profile</Link>
            Home
        </div>
    )
}

export default Home