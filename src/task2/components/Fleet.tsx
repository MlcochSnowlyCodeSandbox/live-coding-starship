import { Starship } from "./Starship.tsx";
import { ChangeEvent } from "react";

// TODO: Task 2: Use this starship list
const starships = [
  { id: 1, name: "Star Explorer", type: "Explorer" },
  { id: 2, name: "Galaxy Cruiser", type: "Cruiser" },
  { id: 3, name: "Nebula Voyager", type: "Voyager" },
  { id: 4, name: "Space Ranger", type: "Fighter" },
  { id: 5, name: "Cosmic Glider", type: "Glider" },
  { id: 6, name: "Quantum Speeder", type: "Speeder" },
  { id: 7, name: "Stellar Carrier", type: "Carrier" },
  { id: 8, name: "Solar Defender", type: "Defender" },
];

export function Fleet() {
  // Task 2: Render select with filter of starships types
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
    // Task 2: Set filter value to state
  };

  return (
    <>
      <div>
        {starships.map((starship) => (
          <Starship key={starship.id} starship={starship} />
        ))}
        <select onChange={handleSelectChange}></select>
      </div>
    </>
  );
}
