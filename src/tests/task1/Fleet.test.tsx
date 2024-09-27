import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Fleet } from "../../task1/components/Fleet.tsx";
import "@testing-library/jest-dom";

describe("Task 1", () => {
  it("Task 1: renders all starships", () => {
    render(<Fleet />);

    const starships = [
      "Star Explorer",
      "Galaxy Cruiser",
      "Nebula Voyager",
      "Space Ranger",
      "Cosmic Glider",
      "Quantum Speeder",
      "Stellar Carrier",
      "Solar Defender",
    ];

    starships.forEach((starship) => {
      expect(screen.getByText(starship)).toBeInTheDocument();
    });
  });
});
