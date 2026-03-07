import { SportActivity, SportType, DifficultyLevel } from './models/sportInfo'

export const SPORT_ACTIVITIES: SportActivity[] = [
  {
    id: 1,
    title: 'Morning Football Training',
    description: 'Team-based football training focused on coordination and endurance.',
    imageUrl: 'assets/images/football.jpg',

    rating: 4.5,
    price: 25,

    createdAt: new Date('2025-01-10'),
    startDate: new Date('2025-04-01'),

    type: SportType.Team,
    difficulty: DifficultyLevel.Intermediate,

    tags: ['teamwork', 'cardio', 'outdoor'],
    availableDays: ['Monday', 'Wednesday', 'Friday'],

    location: {
      name: 'Central Stadium',
      city: 'Kyiv',
      indoor: false
    },

    coach: {
      fullName: 'Andriy Melnyk',
      experienceYears: 8,
      certified: true
    }
  },
  {
    id: 2,
    title: 'Beginner Yoga Class',
    description: 'Relaxing indoor yoga sessions for beginners.',
    imageUrl: 'assets/images/yoga.jpg',

    rating: 4.8,
    price: 15,

    createdAt: new Date('2025-02-15'),
    startDate: new Date('2025-03-20'),

    type: SportType.Individual,
    difficulty: DifficultyLevel.Beginner,

    tags: ['flexibility', 'indoor', 'relax'],
    availableDays: ['Tuesday', 'Thursday'],

    location: {
      name: 'Wellness Center',
      city: 'Lviv',
      indoor: true
    },

    coach: {
      fullName: 'Olena Koval',
      experienceYears: 5,
      certified: true
    }
  },
  {
    id: 3,
    title: 'Mountain Cycling Tour',
    description: 'Outdoor cycling activity in mountain terrain.',
    imageUrl: 'assets/images/cycling.jpg',

    rating: 4.2,
    price: 40,

    createdAt: new Date('2024-12-01'),
    startDate: new Date('2025-05-10'),

    type: SportType.Extreme,
    difficulty: DifficultyLevel.Advanced,

    tags: ['adventure', 'outdoor', 'endurance'],
    availableDays: ['Saturday'],

    location: {
      name: 'Carpathian Trails',
      city: 'Yaremche',
      indoor: false
    },

    coach: {
      fullName: 'Taras Boyko',
      experienceYears: 10,
      certified: true
    }
  },
  {
    id: 4,
    title: 'Swimming for Kids',
    description: 'Swimming lessons for children aged 6-12.',
    imageUrl: 'assets/images/swimming.jpg',

    rating: 4.7,
    price: 20,

    createdAt: new Date('2025-01-25'),
    startDate: new Date('2025-03-05'),

    type: SportType.Water,
    difficulty: DifficultyLevel.Beginner,

    tags: ['water', 'kids', 'health'],
    availableDays: ['Monday', 'Thursday'],

    location: {
      name: 'Aqua Sport Club',
      city: 'Odessa',
      indoor: true
    },

    coach: {
      fullName: 'Iryna Shevchenko',
      experienceYears: 6,
      certified: true
    }
  },
  {
    id: 5,
    title: 'Winter Ski Camp',
    description: 'Intensive ski training in winter conditions.',
    imageUrl: 'assets/images/ski.jpg',

    rating: 4.3,
    price: 120,

    createdAt: new Date('2024-11-20'),
    startDate: new Date('2025-12-15'),

    type: SportType.Winter,
    difficulty: DifficultyLevel.Advanced,

    tags: ['winter', 'ski', 'camp'],
    availableDays: ['Friday', 'Saturday', 'Sunday'],

    location: {
      name: 'Bukovel Resort',
      city: 'Bukovel',
      indoor: false
    },

    coach: {
      fullName: 'Mykhailo Petrenko',
      experienceYears: 12,
      certified: true
    }
  }
];