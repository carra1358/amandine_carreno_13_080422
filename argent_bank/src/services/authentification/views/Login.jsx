import Footer from "services/common/components/footer/Footer";
import "./login.scss"
import Head from "services/common/components/header/Head";
import { FaUserCircle} from "react-icons/fa"
import Form from "../components/form/Form";

function Login (){
return (
    <div>
        <Head/>
        <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="sign-in-icon"/>
        <h1>Sign In</h1>
        <Form/>
      
      </section>
    </main>
        
        <Footer/>
    </div>
)
}

export default Login;