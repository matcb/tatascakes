import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AboutComponent from "../../components/AboutComponent/AboutComponent";


export  const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderComponent/>
                <AboutComponent/>
            <FooterComponent/>
        </div>
    )
}