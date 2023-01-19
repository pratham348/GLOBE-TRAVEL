import FirstComponent from "./FirstComponent"
import "./home.scss"
import HeaderLight from "../common-light/HeaderLight"
import SecondComponent from "./SecondComponent"
import FooterLight from "../common-light/FooterLight"
import ThirdComponent from "./ThirdComponent"
import ForthComponent from "./ForthComponent"
const Home = () => {
 return (
  <>
   <HeaderLight className="head" />
   <section className="home-section">
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent/>
    <ForthComponent/>
   </section>
   <FooterLight />
  </>
 )
}

export default Home
