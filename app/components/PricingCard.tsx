"use client";

import React, { useState } from "react";

const PricingCard: React.FC = () => {
  const [pageViews, setPageViews] = useState<number>(100000); // Default to 100K pageviews
  const [isYearly, setIsYearly] = useState<boolean>(false);

  // Pricing tiers for monthly
  const pricing = {
    10000: 8,
    50000: 12,
    100000: 16,
    500000: 24,
    1000000: 36,
  };

  // Calculate price based on selected pageviews
  const price = pricing[pageViews] || 0;
  const discountedPrice = isYearly ? price * 0.75 : price; // Apply 25% discount for yearly

  // Handle the pageview range change
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value === 1) {
      setPageViews(10000);
    } else if (value === 2) {
      setPageViews(50000);
    } else if (value === 3) {
      setPageViews(100000);
    } else if (value === 4) {
      setPageViews(500000);
    } else if (value === 5) {
      setPageViews(1000000);
    }
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center max-h-full overflow-hidden">
      <h2 className="text-lg text-gray-600 font-medium">Pageviews</h2>
      <p className="text-4xl font-bold text-gray-800">
        ${discountedPrice}.00{" "}
        <span className="text-lg text-gray-500">
          / {isYearly ? "year" : "month"}
        </span>
      </p>

      {/* Range slider to select pageviews */}
      <div className="my-6">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          className="slider w-full"
          onChange={handleRangeChange}
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>10K</span>
          <span>50K</span>
          <span>100K</span>
          <span>500K</span>
          <span>1M</span>
        </div>
      </div>

      {/* Toggle between monthly and yearly billing */}
      <div className="flex justify-center items-center gap-2">
        <span className="text-gray-600 font-medium">Monthly Billing</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={handleToggle}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-gray-600 font-medium">Yearly Billing</span>
        <span className="text-sm text-red-500 font-semibold">25% discount</span>
      </div>

      <ul className="text-gray-600 mt-4">
        <li className="flex items-center justify-center gap-2">
          <span>✅</span> Unlimited websites
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>✅</span> 100% data ownership
        </li>
        <li className="flex items-center justify-center gap-2">
          <span>✅</span> Email reports
        </li>
      </ul>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
        Start my trial
      </button>
    </div>
  );
};

export default PricingCard;
