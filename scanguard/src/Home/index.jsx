import "./home.css"
import { useNavigate } from "react-router-dom";
import image from '../assets/img.webp'
import image2 from '../assets/omt.jpg'
import image3 from '../assets/ff.jpg'

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

        <div className="hero-section flex center column">
            <div className="title">
                <h2>Validate and prepare all your identification documents from home</h2>
            </div>
            <div className="btn">
                <button>Get Started</button>
            </div>
        </div>
        <div class="tabs">

            <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked />
            <label for="tab1" class="tabs__label">Overview</label>
            <div class="tabs__content flex ">

                <div className="overview-container flex ">
                    <div className="description flex column ">
                        <h1>Verify Any ID with ScanGuard</h1>
                        <p>
                            ScanGuard Document Reader is designed 
                            for Identity verification services that specialize 
                            in reading and digital verification of passports,
                            ID cards. driver's licenses, visas, and other ID
                            documents
                        </p>
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="overview-container flex ">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="description flex column ">
                        <h1>Fraud-free identity verification</h1>
                        <p>
                        Protect your identity from scams and unauthorized 
                        use with our easy-to-use verification system,
                        keeping your personal information secure online
                        </p>
                    </div>
                    
                </div>

                <div className="overview-container flex ">
                    <div className="image-2">
                        <img src={image2} alt="" />
                    </div>
                    <div className="description flex column ">
                        <h1>Simple Document Preparation</h1>
                        <p>
                        Simplify the process of getting your ID 
                        documents  ready with our easy-to-use 
                        system, ensuring everything is in order and our platform stands out with seamless
                        integration with trusted partners like Libanpost
                        and OMT.we ensure a seamless experience
                        from document submission to processing and
                        final approval
                        </p>
                    </div>
                </div>

            </div>

            <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" />
            <label for="tab2" class="tabs__label">Identity Verification</label>
            <div class="tabs__content">       
            </div>
        </div>
           
    </div>
}

export default Home