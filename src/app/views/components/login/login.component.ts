import { HttpResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Credentials } from "src/app/models/credentials";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  creds: Credentials = {
    email: "",
    password: "",
  };

  formulario!: FormGroup;

  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.formulario = this.formBuilder.group({
      email: ["", [Validators.minLength(3), Validators.required]],
      password: ["", [Validators.minLength(3), Validators.required]],
    });
  }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()){
      this.authService.logout();
    }else{
      this.router.navigate([''])
    }
    
  }

  logar() {
    this.service.authenticate(this.creds).subscribe({
      next: (response) => {
        console.log(response.headers.get("Authorization"));
        this.service.successFullLogin(
          response.headers.get("Authorization")!.substring(7)
        );

        this.router.navigate([''])
      },

      error: (err) => {
        this.snack.open("Usuário e/ou senha inválidos!", "", {
          horizontalPosition: "end",
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["errorTeste"],
        });
      },
    });

    this.creds.email = "";
    this.creds.password = "";
  }
}
