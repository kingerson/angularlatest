import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../../../shared/models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User()

  constructor(
    private router: Router    
  ) {}

  ngOnInit(): void {    
  }

  submitForm(): void {
    localStorage.setItem('currentuser', 'hola')
    this.router.navigate(['/admin'])
  }

  

}
