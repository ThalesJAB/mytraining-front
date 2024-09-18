import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Exercise } from "src/app/models/exercise.model";
import { TrainingType } from "src/app/models/trainingtype.model";
import { v4 as uuid } from "uuid";

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

  trainingTypes: TrainingType[] = [
    { value: "A", viewValue: "A" },
    { value: "B", viewValue: "B" },
    { value: "C", viewValue: "C" },
    { value: "D", viewValue: "D" },
    { value: "E", viewValue: "E" },
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

  this.workout.exerciseList?.push({
    id: uuid(),
    name: '',
    description: '',
    reps: 0,
    sets: 0,
    rest: '',
  });
    
  }

  saveExercise(exercise: Exercise, id: String){    
    const index = this.workout.exerciseList!.findIndex(ex => ex.id === id);
    if (index >= 0){
      this.workout.exerciseList![index] = {
       ...exercise, id: id
      }
    }
  }

  deleteExercise(exercise: Exercise, id: String){
    const index = this.workout.exerciseList!.findIndex(ex => ex.id === id);
    if (index !== -1) {
      this.workout.exerciseList!.splice(index, 1);
    }
  }

}
