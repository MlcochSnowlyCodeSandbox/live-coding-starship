import { memo } from "react";

type Starship = {
  id: number;
  name: string;
  type: string;
};

export interface StarshipProps {
  starship: Starship;
}

// INIT state
// export const Starship = ({starship}: StarshipProps) => {
//   return <div>{starship.name}</div>
// }

// Task 2: Solution
export const Starship = memo(({ starship }: StarshipProps) => {
  return <div>{starship.name}</div>;
});
