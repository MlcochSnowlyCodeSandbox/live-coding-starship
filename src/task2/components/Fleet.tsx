import { Starship } from "./Starship.tsx";
import { ChangeEvent, useState } from "react";

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
  // const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   // Task 2: Set filter value to state
  // }

  // Task 2: Solution
  const [selectedType, setSelectedType] = useState<string>();
  const starshipTypes = Array.from(new Set(starships.map((starship) => starship.type)));
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };
  const filteredStarships = selectedType ? starships.filter((starship) => starship.type === selectedType) : starships;

  return (
    <>
      {/*INIT state*/}
      {/*<div>*/}
      {/*  {starships.map(starship => (*/}
      {/*    <Starship key={starship.id} starship={starship}/>*/}
      {/*  ))}*/}
      {/*  <select onChange={handleSelectChange}>*/}
      {/*    <option value=""></option>*/}
      {/*    {starshipTypes.map(type => (<option key={type} value={type}>{type}</option>))}*/}
      {/*  </select>*/}
      {/*</div>*/}

      {/*Task 2 Solution:*/}
      <div>
        <select onChange={handleSelectChange}>
          <option value=""></option>
          {starshipTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {filteredStarships.map((starship) => (
          <Starship key={starship.id} starship={starship} />
        ))}
      </div>
    </>
  );
}
