import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material


import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';







// Outros Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';



// Componentes do projeto
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { WorkoutPlanListComponent } from './views/components/workoutplan/workout-plan-list/workout-plan-list.component';
import { LoginComponent } from './views/components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { WorkoutPlanCreateComponent } from './views/components/workoutplan/workout-plan-create/workout-plan-create.component';
import { WorkoutCreateDialogComponent } from './views/components/workout/workout-create-dialog/workout-create-dialog.component';
import { WorkoutExpansionPanelComponent } from './views/components/workout/workout-expansion-panel/workout-expansion-panel.component';
import { ExerciseExpansionCreateComponent } from './views/components/exercise/exercise-expansion-create/exercise-expansion-create.component';
import { ExerciseExpansionReadComponent } from './views/components/exercise/exercise-expansion-read/exercise-expansion-read.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    WorkoutPlanListComponent,
    LoginComponent,
    WorkoutPlanCreateComponent,
    WorkoutCreateDialogComponent,
    WorkoutExpansionPanelComponent,
    ExerciseExpansionCreateComponent,
    ExerciseExpansionReadComponent,
  
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule

  ],
  providers: [AuthInterceptorProvider,
     {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
