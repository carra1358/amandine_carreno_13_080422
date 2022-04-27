import Footer  from "services/common/components/footer/Footer";
import  Head from "services/common/components/header/Head";
import chat from "../../../assets/icon/icon-chat.png"
import money from "../../../assets/icon/icon-money.png"
import security from "../../../assets/icon/icon-security.png"
import Feature from "../components/Feature";
import "./home.scss"



// component rendering Home page
function Home (){
    return(
        <div>
           <Head/>
           <div className="hero">
          <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>  
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature src={chat} title="You are our #1 priority" content=" Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
        <Feature src={money} title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!"/>
        <Feature src={security} title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe." />
      </section>
      <Footer/>
        </div>
    )
}

export default Home;