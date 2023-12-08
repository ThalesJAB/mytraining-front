import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
  
  
  constructor(private router: Router, 
              private authService: AuthService,
              private snack: MatSnackBar ){}

  
  ngOnInit(): void{
    this.router.navigate(['planos-de-treino/novo-plano'])
  }

  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
    
    this.snack.open("Logout realizado com sucesso!", "", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
      panelClass: ["logoutInfo"],
    });

  }
  
}