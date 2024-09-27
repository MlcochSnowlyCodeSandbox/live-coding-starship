import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { Fleet } from "../../task2/components/Fleet.tsx";
import { Starship as OriginalStarship } from "../../task2/components/Starship.tsx";

describe("Task 2", () => {
  it("contains a select element with options for all types of starships and a Filter button", () => {
    render(<Fleet />);

    // Check if the select element is in the document
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // Check if the select element contains options for all types of starships
    const starshipTypes = ["Explorer", "Cruiser", "Voyager", "Fighter", "Glider", "Speeder", "Carrier", "Defender"];

    starshipTypes.forEach((type) => {
      const optionElement = screen.getByRole("option", { name: type });
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("renders only filtered starships of selected type after changing the select", () => {
    render(<Fleet />);

    // Simulate changing the select element to "Cruiser"
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Cruiser" } });

    // Check if only the starships of type "Cruiser" are rendered
    const starships = [{ name: "Galaxy Cruiser", type: "Cruiser" }];

    starships.forEach((starship) => {
      expect(screen.getByText(starship.name)).toBeInTheDocument();
    });

    // Check that starships of other types are not rendered
    const nonCruiserStarships = [
      "Star Explorer",
      "Nebula Voyager",
      "Space Ranger",
      "Cosmic Glider",
      "Quantum Speeder",
      "Stellar Carrier",
      "Solar Defender",
    ];

    nonCruiserStarships.forEach((starship) => {
      expect(screen.queryByText(starship)).not.toBeInTheDocument();
    });
  });

  it("contains an empty option in the select element and renders all starships when selected", () => {
    render(<Fleet />);

    // Check if the select element is in the document
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // Check if the select element contains an empty option
    const emptyOption = screen.getByRole("option", { name: "" });
    expect(emptyOption).toBeInTheDocument();

    // Simulate selecting the empty option
    fireEvent.change(selectElement, { target: { value: "" } });

    // Check if all starships are rendered
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

  it("does not re-render Starship component after select value is changed", () => {
    // Mock the Starship component
    const renderSpy = vi
      .spyOn(OriginalStarship, "type")
      .mockImplementation(({ starship }) => <div>{starship.name}</div>);

    render(<Fleet />);

    // Initial render should call Starship render for each starship
    expect(renderSpy).toHaveBeenCalledTimes(8);

    // Simulate changing the select element to "Cruiser"
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Cruiser" } });

    // Check that Starship render is not called again
    expect(renderSpy).toHaveBeenCalledTimes(8);

    // Restore the original implementation
    renderSpy.mockRestore();
  });
});
