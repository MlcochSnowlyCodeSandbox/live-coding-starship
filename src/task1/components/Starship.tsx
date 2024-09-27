type Starship = {
  id: number;
  name: string;
  type: string;
};

export interface StarshipProps {
  starship: Starship;
}

export function Starship({ starship }: StarshipProps) {
  // INIT state
  // return (<div>This is starship component</div>)

  // Task 1: Solution
  return <div>{starship.name}</div>;
}
