// interface for user data
export interface User {
    name: string;
    email: string;
    age: number;
}

// union type for skill level
export type SkillLevel = 'Beginner' | 'Internediate' | 'Expert'

//interface for skill data
export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}