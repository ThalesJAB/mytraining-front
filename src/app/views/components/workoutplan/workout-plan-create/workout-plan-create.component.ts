import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { WorkoutCreateDialogComponent } from "../../workout/workout-create-dialog/workout-create-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { WorkoutPlan } from "src/app/models/workoutplan.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Workout } from "src/app/models/workout.model";

@Component({
  selector: "app-workout-plan-create",
  templateUrl: "./workout-plan-create.component.html",
  styleUrls: ["./workout-plan-create.component.css"],
})
export class WorkoutPlanCreateComponent implements OnInit {
  workoutPlan: WorkoutPlan = {
    title: "",
    description: "",
    startDate: "",
    finishDate: "",
    workoutsList: [],
  };

 
  
  formulario!: FormGroup;

  dialogData: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogCreateWorkout: MatDialog,
    
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      title: ["", [Validators.minLength(3), Validators.required]],
      description: ["", [Validators.minLength(3), Validators.required]],
      startDate: ["", [Validators.required]],
      finishDate: ["", [Validators.required]],
    });
  }

  openDialog() {
    const dialogRef = this.dialogCreateWorkout.open(
      WorkoutCreateDialogComponent,
      { width: "50%" }
    );

    

    dialogRef.afterClosed().subscribe({
      next: (response: Workout) => {
        if(response){
          this.addWorkoutToPlan(response);
        }

      },

      error: (err) => {},
    });
  }

  addWorkoutToPlan(newWorkout: Workout) {
    this.workoutPlan.workoutsList?.push(newWorkout)
  }

  deleteWorkout(workout: Workout) {
    const index = this.workoutPlan.workoutsList!.indexOf(workout);
    if (index !== -1) {
      this.workoutPlan.workoutsList!.splice(index, 1);
    }
  }
}
