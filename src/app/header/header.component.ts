import { Component } from '@angular/core';
import bootstrap from '../../main.server';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //isUserLoggedIn: boolean = false;
  constructor(public hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }
  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
