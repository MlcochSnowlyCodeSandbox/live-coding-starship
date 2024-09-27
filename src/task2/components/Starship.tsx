type Starship = {
  id: number;
  name: string;
  type: string;
};

export interface StarshipProps {
  starship: Starship;
}

export function Starship({ starship }: StarshipProps) {
  return <div>{starship.name}</div>;
}
