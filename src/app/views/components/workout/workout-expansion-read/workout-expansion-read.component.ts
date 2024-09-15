import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';

@Component({
  selector: 'app-workout-expansion-read',
  templateUrl: './workout-expansion-read.component.html',
  styleUrls: ['./workout-expansion-read.component.css']
})
export class WorkoutExpansionReadComponent {
@Input() workout!: Workout;

@Output() deleteWorkoutEvent = new EventEmitter<Workout>();

isEditingEnabled: boolean = false;


deleteWorkout(workout: Workout) {

  const confirmDelete = confirm('Tem certeza que deseja excluir o treino?');
  if (confirmDelete) {
    this.deleteWorkoutEvent.emit(workout);
  }
 
}
}
