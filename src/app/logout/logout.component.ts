import { Component } from '@angular/core';

import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  providers: [HardcodedAuthenticationService],
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService){}

  ngOnInit(){
    this.hardcodedAuthenticationService.logout();
  }

}
