import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-expansion-read',
  templateUrl: './exercise-expansion-read.component.html',
  styleUrls: ['./exercise-expansion-read.component.css']
})
export class ExerciseExpansionReadComponent {
  @Input() exercise!: Exercise;

  isEditingEnabled: boolean = true;

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
