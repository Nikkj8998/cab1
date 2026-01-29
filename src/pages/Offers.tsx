import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSectionoffer from "@/components/ContactSectionoffer";
import HeroSectionoffer from "@/components/HeroSectionofferr";
import "./Offers.css";
import Header from "@/components/Header";

const Offers = () => {
    return (
        <div className="offers-theme">
            <main className="min-h-screen">
                <Header />
                <HeroSectionoffer />
                <IntroSection />
                <ServicesSection />
                <ProcessSection />
                <IndustriesSection />
                <ContactSectionoffer />
            </main>
        </div>
    );
};

export default Offers;
