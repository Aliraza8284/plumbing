// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import HomePage from "./components/HomePage";
import About from "./components/About";          // <- changed from AboutPage
import Plumbing from "./components/Plumbing";    // <- changed from PlumbingPage
import Sewers from "./components/Sewers";        // <- changed from SewersPage
import HVAC from "./components/HVAC";            // <- changed from HVACPage
import Coupons from "./components/Coupons";
import ContactPage from "./components/ContactPage";

// Dropdown Pages
import History from "./components/History";
import TestimonialsPage from "./components/TestimonialsPage";
import BathroomPlumbing from "./components/BathroomPlumbing";
import CommercialPlumbing from "./components/CommercialPlumbing";
import DrainCleaning from "./components/DrainCleaning";
import EarthquakeShutOffValves from "./components/EarthquakeShutOffValves";
import EmergencyServices from "./components/EmergencyServices";
import GasPlumbing from "./components/GasPlumbing";
import HydroJetting from "./components/HydroJetting";
import LeakDetection from "./components/LeakDetection";
import PlumbingMaintenance from "./components/PlumbingMaintenance";
import PipingRepiping from "./components/PipingRepiping";
import RooterService from "./components/RooterService";
import SewerInspection from "./components/SewerInspection";
import SewerRepairAndReplacement from "./components/SewerRepairAndReplacement";
import TrenchlessSewers from "./components/TrenchlessSewers";
import WaterHeaters from "./components/WaterHeaters";
import WaterLinePlumbing from "./components/WaterLinePlumbing";

import Cleaning from "./components/Cleaning";
import SewerHydroJetting from "./components/SewerHydroJetting";
import SewerInspectionServices from "./components/SewerInspectionServices";
import RepairAndReplacement from "./components/RepairAndReplacement";
import TrenchlessSewerTechnology from "./components/TrenchlessSewerTechnology";

import HeatPumps from "./components/HeatPumps";
import EmergencyHVAC from "./components/EmergencyHVAC";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* -------- Main Pages -------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/sewers" element={<Sewers />} />
          <Route path="/hvac" element={<HVAC />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* -------- About Us Dropdowns -------- */}
          <Route path="/about/history" element={<History />} />
          <Route path="/about/testimonials" element={<TestimonialsPage />} />

          {/* -------- Plumbing Dropdowns -------- */}
          <Route path="/plumbing/bathroom-plumbing" element={<BathroomPlumbing />} />
          <Route path="/plumbing/commercial-plumbing" element={<CommercialPlumbing />} />
          <Route path="/plumbing/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/plumbing/earthquake-shut-off-valves" element={<EarthquakeShutOffValves />} />
          <Route path="/plumbing/emergency-services" element={<EmergencyServices />} />
          <Route path="/plumbing/gas-plumbing" element={<GasPlumbing />} />
          <Route path="/plumbing/hydro-jetting" element={<HydroJetting />} />
          <Route path="/plumbing/leak-detection" element={<LeakDetection />} />
          <Route path="/plumbing/plumbing-maintenance" element={<PlumbingMaintenance />} />
          <Route path="/plumbing/piping-repiping" element={<PipingRepiping />} />
          <Route path="/plumbing/rooter-service" element={<RooterService />} />
          <Route path="/plumbing/sewer-inspection" element={<SewerInspection />} />
          <Route path="/plumbing/sewer-repair-and-replacement" element={<SewerRepairAndReplacement />} />
          <Route path="/plumbing/trenchless-sewers" element={<TrenchlessSewers />} />
          <Route path="/plumbing/water-heaters" element={<WaterHeaters />} />
          <Route path="/plumbing/water-line-plumbing" element={<WaterLinePlumbing />} />

          {/* -------- Sewers Dropdowns -------- */}
          <Route path="/sewers/cleaning" element={<Cleaning />} />
          <Route path="/sewers/hydro-jetting" element={<SewerHydroJetting />} />
          <Route path="/sewers/inspection" element={<SewerInspectionServices />} />
          <Route path="/sewers/repair-and-replacement" element={<RepairAndReplacement />} />
          <Route path="/sewers/trenchless-technology" element={<TrenchlessSewerTechnology />} />

          {/* -------- HVAC Dropdowns -------- */}
          <Route path="/hvac/heat-pumps" element={<HeatPumps />} />
          <Route path="/hvac/emergency-hvac" element={<EmergencyHVAC />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}