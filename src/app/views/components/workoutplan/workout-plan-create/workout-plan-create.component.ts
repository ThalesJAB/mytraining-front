import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { WorkoutCreateDialogComponent } from "../../workout/workout-create-dialog/workout-create-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { WorkoutPlan } from "src/app/models/workoutplan.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Workout } from "src/app/models/workout.model";
import { WorkoutplanService } from "src/app/services/workoutplan.service";


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
    private service: WorkoutplanService
    
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

  createWorkoutPlan(){
    if(this.formulario.valid){
      this.dialogData = this.formulario.value;
      this.workoutPlan.workoutsList?.forEach((workout) => {
        workout.id = null
        workout.exerciseList?.forEach((exercise) => {
          exercise.id = null
        })
      })
      this.dialogData.workoutsList = this.workoutPlan.workoutsList;
      this.dialogData.startDate = this.formatDate(this.dialogData.startDate);
      this.dialogData.finishDate = this.formatDate(this.dialogData.finishDate);
      console.log(this.dialogData.startDate);
      console.log(this.dialogData.finishDate);
      this.dialogData.id = null
      this.dialogData.person = null

      this.service.create(this.dialogData).subscribe({
        next: (response) => {
          // QUANDO TIVER TELA PARA VISUALIZAR OS DADOS, ENVIAR A RESPOSTA DA REQUISICAO NA TELA DE VISUALIZACAO
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    
    // Retorna no formato dd/MM/yyyy
    return `${day}/${month}/${year}`;
  }


}
