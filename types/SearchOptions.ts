export interface CompetitionType {
  id: number;
  name: string;
}

export interface LevelType {
  level: string;
}

export interface SchoolType {
  studentname: string;
  studentid: number;
  mentions: number;
  schoolname: string;
  schoolaccess: string;
  lat: number;
  lon: number;
  zipcode: number;
  city: string;
  state: string;
  statecode: string;
  competition: string;
  awardlevel: string;
  awardtype: string;
  awardyear: number;
  // COMPETITION.NAME as competition,
  // AWARD.YEAR as awardyear,
  // AWARD.LEVEL as awardlevel,
  // AWARD.AWARD as awardtype,
  // SCHOOL.TYPE as schoolaccess,
  // UF.NAME as state,
  // UF.UF as statecode,
  // CITY.NAME as city,
  // SCHOOL.NAME as schoolname,
  // ADDRESS.LAT,
  // ADDRESS.LON,
  // STUDENT.NAME as studentname
}

export interface StateType {
  id: number;
  name: string;
}

// export interface SearchOptions {
//   competitionTypes: CompetitionType[];
// }
