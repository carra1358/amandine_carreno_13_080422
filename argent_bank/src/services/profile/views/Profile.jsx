import Footer from "services/common/components/footer/Footer";
import Head from "services/common/components/header/Head";
import Greetings from "../components/greetings/Greetings";

function Profile (){
    return (
        <div>
           <Head mode="userLogin"/>
           <Greetings/>
           <Footer/>
        </div>
    )
}

export default Profile;