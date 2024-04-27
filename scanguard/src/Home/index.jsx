import "./home.css"
import { useNavigate } from "react-router-dom";
const Home = ()=>{
    const navigate = useNavigate()
    return <div className="home-page">
        <div className="navbar flex center">
            <div className="logo">
                <h2>ScanGuard</h2>
            </div>
            <div className="links flex ">
                <button><span>Home</span></button>
                <button><span>Service</span></button>
                <button><span>Contact Us</span></button>
            </div>
            <div className="btns">
                <button onClick={()=>navigate('/auth')}>SignIn</button>
                <button onClick={()=>navigate('/auth')}>SignUp</button>
            </div>
        </div>
        <div className="hero"></div>
    </div>
}

export default Home