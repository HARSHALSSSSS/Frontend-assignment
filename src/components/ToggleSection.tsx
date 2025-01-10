import { useState } from "react";


import SentimentSection  from "../components/SentimentSection.tsx";
import TeamCard from "../components/TeamCard.tsx";

import Tokenomics from "../components/Tokenomics.tsx";

function ToggleSection() {
  const [activeSection, setActiveSection] = useState("Overview");

  const sections = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];

  return (
    <div>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
        {sections.map((section) => (
          <div
            key={section}
            className={`cursor-pointer ${activeSection === section ? "text-[#0141CF] border-[#0052FE] border-b-4 pb-4" : ""}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <hr />

      <div className="py-4">
        {activeSection === "Overview"  }
        {activeSection === "Fundamentals"  }
        {activeSection === "News Insights" }
        {activeSection === "Sentiments" && <SentimentSection />}
        {activeSection === "Team" && <TeamCard />}
        {activeSection === "Technicals" }
        {activeSection === "Tokenomics" && <Tokenomics />}
      </div>
    </div>
  );
}

export default ToggleSection;