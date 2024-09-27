// // TODO: Task 1: Use this starship list
// // const starships = [
// //   { id: 1, name: "Star Explorer", type: "Explorer" },
// //   { id: 2, name: "Galaxy Cruiser", type: "Cruiser" },
// //   { id: 3, name: "Nebula Voyager", type: "Voyager" },
// //   { id: 4, name: "Space Ranger", type: "Fighter" },
// //   { id: 5, name: "Cosmic Glider", type: "Glider" },
// //   { id: 6, name: "Quantum Speeder", type: "Speeder" },
// //   { id: 7, name: "Stellar Carrier", type: "Carrier" },
// //   { id: 8, name: "Solar Defender", type: "Defender" },
// // ];
//
// export function Fleet() {
//   // Task 1: Render all starships
//   return <div>This is Fleet component</div>;
// }

import { Starship } from "./Starship.tsx";

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
  // Task 1: Render all starships
  return (
    <>
      {/*INIT state*/}
      {/*return (<div>This is Fleet component</div>)*/}

      {/*Task 1 Solution:*/}
      <div>
        {starships.map((starship) => (
          <Starship key={starship.id} starship={starship} />
        ))}
      </div>
    </>
  );
}
