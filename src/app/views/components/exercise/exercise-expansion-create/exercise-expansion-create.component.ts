import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-exercise-expansion-create',
  templateUrl: './exercise-expansion-create.component.html',
  styleUrls: ['./exercise-expansion-create.component.css']
})
export class ExerciseExpansionCreateComponent implements OnInit{

  
  exercise: Exercise = {
    name: '',
    description: '',
    reps: 0,
    sets: 0,
    rest: '',
  }


  formulario!: FormGroup;

  @Output() formDataSaved = new EventEmitter<Exercise>();

  @ViewChild('expansionPanel') expansionPanel!: MatExpansionPanel;

  isEditingEnabled: boolean = true;

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      reps:[Validators.required],
      sets:[Validators.required],
      rest:['', [Validators.required]],


    })
  }

  addExercise(){
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      this.exercise.name = formData.name;
      this.exercise.description = formData.description;
      this.exercise.reps = formData.reps;
      this.exercise.sets = formData.sets;
      this.exercise.rest = formData.rest;

      this.formDataSaved.emit(this.exercise);
      this.isEditingEnabled=false;
      console.log('isEditingEnabled:', this.isEditingEnabled);
      if (this.expansionPanel) {
          this.expansionPanel.close();
      }

      this.cdr.detectChanges();
     
    }

  }








}
