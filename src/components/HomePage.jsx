// src/components/HomePage.jsx
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsPage from "./TestimonialsPage"; // <-- Yahan import theek kiya gaya hai
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function HomePage() {
    return (
        <main>
            <Hero />

            <Services />

            <WhyChooseUs />
            {/* <Contact /> */}
        </main>
    );
}