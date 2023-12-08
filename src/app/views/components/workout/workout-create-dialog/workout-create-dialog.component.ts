import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Exercise } from "src/app/models/exercise.model";
import { TrainingType } from "src/app/models/trainingtype.model";

import { Workout } from "src/app/models/workout.model";

@Component({
  selector: "app-workout-create-dialog",
  templateUrl: "./workout-create-dialog.component.html",
  styleUrls: ["./workout-create-dialog.component.css"],
})
export class WorkoutCreateDialogComponent implements OnInit {
  workout: Workout = {
    name: "",
    description: "",
    trainingType: "",
    exerciseList: [],
  };

  listaDeExercicios: string[] = [];

 


  trainingTypes: TrainingType[] = [
    { value: 1, viewValue: "A" },
    { value: 2, viewValue: "B" },
    { value: 3, viewValue: "C" },
    { value: 4, viewValue: "D" },
    { value: 5, viewValue: "E" },
  ];

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ref: MatDialogRef<WorkoutCreateDialogComponent>
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.required,
        ],
      ],
      description: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(200),
          Validators.required,
        ],
      ],
      trainingType: ["", [Validators.required]],
    });
  }

  createWorkout() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;

      this.workout.name = formData.name;
      this.workout.description = formData.description;
      this.workout.trainingType = formData.trainingType;
      this.ref.close(this.workout);
    }
  }

  addExercise(){
    /*
    const newExercise: Exercise = {
      name: '',
      description: '',
      reps: 0,
      sets: 0,
      rest: '',
    };

    this.workout.exerciseList?.push(newExercise);
    
*/
  this.listaDeExercicios.push('Novo exercício');
    
  }

  saveExercise(exercise: Exercise){
    this.workout.exerciseList?.push(exercise)
 

    console.log(this.workout.exerciseList)
  }




}
