export enum SportType {
  Team = 'Team',
  Individual = 'Individual',
  Extreme = 'Extreme',
  Water = 'Water',
  Winter = 'Winter'
}

export enum DifficultyLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

export interface Location {
  name: string;
  city: string;
  indoor: boolean;
}

export interface Coach {
  fullName: string;
  experienceYears: number;
  certified: boolean;
}

export interface SportActivity {
  id: number; 

  title: string; 
  description: string; 
  imageUrl: string; 

  rating: number; 
  price: number;

  createdAt: Date; 
  startDate: Date;

  type: SportType; 
  difficulty: DifficultyLevel; 

  tags: string[]; 
  availableDays: string[]; 

  location: Location;
  coach: Coach;
}