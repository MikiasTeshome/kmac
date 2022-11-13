import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBox from '../container/service/ServiceIconBox';
// import ServiceSkill from '../container/service/ServiceSkill';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="Ersas || Architecture" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Architectural and interior design that worth your investment"

            />
            <ServiceIconBox 
                servieType='architecture_design'
            />
            {/* <ServiceSkill /> */}
            <AboutSix />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



