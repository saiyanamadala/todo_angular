import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username=""
  password=""
  showError=false
  errorMessage="Invalid Credentaials"

  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService){

  }

  handleLogin(){
    // if(this.username==="sai" && this.password==="dummy"){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.showError=false
      console.log("Success")
      this.router.navigate(['welcome',this.username])

    }
    else{
      this.showError=true
    }
  }

}
