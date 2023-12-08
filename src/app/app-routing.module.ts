import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { WorkoutPlanListComponent } from './views/components/workoutplan/workout-plan-list/workout-plan-list.component';
import { LoginComponent } from './views/components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { WorkoutPlanCreateComponent } from './views/components/workoutplan/workout-plan-create/workout-plan-create.component';


const routes: Routes = [
{
  path: '',
  component: NavComponent,
  canActivate: [authGuard],
  children: [
    {
      path: 'planos-de-treino',
      component: WorkoutPlanListComponent
    },

    {
      path: 'planos-de-treino/novo-plano',
      component: WorkoutPlanCreateComponent
    }
  ]
},

{
  path: 'home',
  component: HomeComponent
},

{
  path: 'login',
  component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
