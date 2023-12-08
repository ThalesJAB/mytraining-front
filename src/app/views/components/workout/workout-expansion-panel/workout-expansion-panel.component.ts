import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';

@Component({
  selector: 'app-workout-expansion-panel',
  templateUrl: './workout-expansion-panel.component.html',
  styleUrls: ['./workout-expansion-panel.component.css']
})
export class WorkoutExpansionPanelComponent {
@Input() workout!: Workout;

@Output() deleteWorkoutEvent = new EventEmitter<Workout>();

isEditingEnabled: boolean = false;


deleteWorkout(workout: Workout) {
  this.deleteWorkoutEvent.emit(workout);
}
}
