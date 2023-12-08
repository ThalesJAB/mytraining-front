import { Component, ViewChild, OnInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { WorkoutPlan } from "src/app/models/workoutplan.model";
import { WorkoutplanService } from "src/app/services/workoutplan.service";

@Component({
  selector: "app-workout-plan-list",
  templateUrl: "./workout-plan-list.component.html",
  styleUrls: ["./workout-plan-list.component.css"],
})
export class WorkoutPlanListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ELEMENT_DATA: WorkoutPlan[] = [];

  dataSource = new MatTableDataSource<WorkoutPlan>(this.ELEMENT_DATA);

  displayedColumns: string[] = [
    "id",
    "title",
    "description",
    "startDate",
    "finishDate",
  ];

  constructor(private service: WorkoutplanService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe({
      
      next: (response) => {
        this.ELEMENT_DATA = response;
        this.dataSource = new MatTableDataSource<WorkoutPlan>(response);
        this.dataSource.paginator = this.paginator;
      },

      error: (err) => {},
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
