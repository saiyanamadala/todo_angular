import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username="sai"
  password=""
  showError=false
  errorMessage="Invalid Credentaials"

  constructor(private router:Router){

  }

  handleLogin(){
    if(this.username==="sai" && this.password==="dummy"){
      this.showError=false
      console.log("Success")
      this.router.navigate(['welcome',this.username])

    }
    else{
      this.showError=true
    }
  }

}
