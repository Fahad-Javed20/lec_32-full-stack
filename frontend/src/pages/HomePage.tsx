import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import PricingComponent from "../components/PricingComponent";
import StatisticsComponent from "../components/StatisticsComponent";

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <PricingComponent />
      <StatisticsComponent>
        <h1>Results That Speak for Themselves</h1>
        <h1>
          We focus on delivering measurable results through clean design,
          efficient development, and reliable digital solutions.
        </h1>
      </StatisticsComponent>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
