import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { WorkoutPlan } from '../models/workoutplan.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutplanService {

  constructor(private http: HttpClient) {
    
   
  }

  findAll():Observable<WorkoutPlan[]>{
    const url = `${API_CONFIG.baseUrl}/persons/workoutplans`;
    return this.http.get<WorkoutPlan[]>(url);
  }
}
