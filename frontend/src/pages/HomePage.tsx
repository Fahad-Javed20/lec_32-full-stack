import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import HeroComponent from "../components/HeroComponent"
import PricingComponent from "../components/PricingComponent"
import StatisticsComponent from "../components/StatisticsComponent"


const HomePage = () => {
  return (
    <div>
    <HeaderComponent />
    <HeroComponent />
    <PricingComponent />
    <StatisticsComponent />
    <FooterComponent />
    </div>
  )
}

export default HomePage
