export interface CompetitionType {
  id: number;
  name: string;
}

export interface LevelType {
  level: string;
}

export interface SchoolType {
  lat: number;
  lon: number;
  name: string;
}

export interface SearchOptions {
  competitionTypes: CompetitionType[];
}
