import NavbarComp from '../components/NavbarComp';
import HeroComp from '../components/HeroComp';
import ExperienceComp from '../components/ExperienceComp';
import ProjectComp from '../components/ProjectComp';
import AboutComp from '../components/AboutComp';
import FooterComp from '../components/FooterComp';


function HomePage() {
    return (
        <div>
            <NavbarComp />

            <HeroComp />

            <ExperienceComp />

            <ProjectComp />

            <AboutComp />

            <FooterComp />

        </div>
    );
}

export default HomePage;