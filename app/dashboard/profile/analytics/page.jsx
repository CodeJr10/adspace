// app/dashboard/profile/analytics/page.jsx
"use client";

import { useEffect, useRef } from "react";

import { Chart } from "chart.js/auto";

const SportsAnalyticsDashboard = () => {
  const goalsScoredRef = useRef(null);
  const topPlayersRef = useRef(null);
  const weeklyPerformanceRef = useRef(null);

  useEffect(() => {
    // Goals Scored Bar Chart
    const goalsScoredChart = new Chart(goalsScoredRef.current, {
      type: "bar",
      data: {
        labels: ["Match 1", "Match 2", "Match 3", "Match 4"],
        datasets: [
          {
            label: "Games Played",
            data: [3, 2, 5, 4],
            backgroundColor: "rgba(255, 221, 87, 0.5)", // Updated color
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true, position: "top" } },
        maintainAspectRatio: false,
      },
    });

    // Top Players Pie Chart
    const topPlayersChart = new Chart(topPlayersRef.current, {
      type: "pie",
      data: {
        labels: ["Player 1", "Player 2", "Player 3", "Player 4"],
        datasets: [
          {
            data: [20, 25, 30, 25],
            backgroundColor: [
              "#FFDD57", // Updated color
              "#60A5FA",
              "#2563EB",
              "#1D4ED8",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "top" } },
        maintainAspectRatio: false,
      },
    });

    // Weekly Performance Line Chart
    const weeklyPerformanceChart = new Chart(weeklyPerformanceRef.current, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Performance Rating",
            data: [75, 80, 85, 90],
            borderColor: "#FFDD57", // Updated color
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true, position: "top" } },
        maintainAspectRatio: false,
      },
    });

    return () => {
      goalsScoredChart.destroy();
      topPlayersChart.destroy();
      weeklyPerformanceChart.destroy();
    };
  }, []);

  return (
    <div className="p-4 h-screen flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-[#1B1F3B]">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold text-[#FFDD57] mb-4">
          Sports Analytics Dashboard
        </h2>

        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Total Games Played Per Day
          </h3>
          <div className="h-full">
            <canvas ref={goalsScoredRef}></canvas>
          </div>
        </section>

        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Top Players by Scoring
          </h3>
          <div className="h-full">
            <canvas ref={topPlayersRef}></canvas>
          </div>
        </section>

        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Weekly Performance
          </h3>
          <div className="h-full">
            <canvas ref={weeklyPerformanceRef}></canvas>
          </div>
        </section>
      </div>

      {/* Right Side Stats */}
      <div className="flex-1 space-y-4">
        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Average Participants per Match
          </h3>
          <p className="text-2xl font-bold text-[#FFDD57]">3.75</p>
        </section>

        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Most Improved Player
          </h3>
          <p className="text-lg text-[#FFDD57]">Player 3</p>
          <p className="text-sm text-gray-500">Improved by 20% this season</p>
        </section>

        <section className="bg-[#2C2F4A] p-4 rounded-lg shadow-lg h-1/3">
          <h3 className="text-md font-medium text-[#FFDD57]">
            Upcoming Matches
          </h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-400">
              Match 5: Team A vs Team B - Date: 2024-11-01
            </li>
            <li className="text-gray-400">
              Match 6: Team C vs Team D - Date: 2024-11-05
            </li>
            <li className="text-gray-400">
              Match 7: Team E vs Team F - Date: 2024-11-10
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SportsAnalyticsDashboard;
