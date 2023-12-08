import { Exercise } from "./exercise.model";

export interface Workout{
    id?: any;
    name: String;
    description: String;
    trainingType: any;
    exerciseList?: Exercise[];


}