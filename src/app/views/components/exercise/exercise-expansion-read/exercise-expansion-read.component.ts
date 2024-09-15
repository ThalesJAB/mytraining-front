import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-expansion-read',
  templateUrl: './exercise-expansion-read.component.html',
  styleUrls: ['./exercise-expansion-read.component.css']
})
export class ExerciseExpansionReadComponent {
  @Input() exercise!: Exercise;

  isEditingEnabled: boolean = false;

  constructor(){

  }
  ngOnInit(): void {
    console.log(this.exercise)
  }

}
