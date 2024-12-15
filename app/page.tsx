import React from "react";
import Header from "./components/Header";
import PricingCard from "./components/PricingCard";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center bg-blue-50 min-h-screen py-16 px-4">
        <PricingCard />
      </main>
    </div>
  );
};

export default App;
