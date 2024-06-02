import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  loginName=''
   constructor(private route: ActivatedRoute){

   //console.log(this.route.snapshot.params['name']);
   this.loginName=this.route.snapshot.params['name']
   }
}
