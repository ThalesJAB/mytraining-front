import { Workout } from "./workout.model";

export interface WorkoutPlan {
    id?: any;
    title: String;
    description: String;
    startDate: any;
    finishDate: any;
    workoutsList?: Workout[];
    
  }
  