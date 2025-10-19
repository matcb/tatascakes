import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ProdutosComponent from "../../components/ProdutosComponent/ProdutosComponent";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import NavigationComponent from "../../components/NavigationComponent/NavigationComponent";
import ProgressComponent from "../../components/ProgressComponent/ProgressComponent";

export const Home: React.FC = () => {
    return (
        <div className="relative">
            {/* Progress Indicator */}
            <ProgressComponent />
            
            {/* Navigation Dots */}
            <NavigationComponent />
            
            {/* Header */}
            <HeaderComponent />
            
            {/* Main Content Sections */}
            <div className="relative">
                <AboutComponent />
                <ProdutosComponent />
                <ContactComponent />
            </div>
            
            {/* Footer */}
            <FooterComponent />
        </div>
    )
}