import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../../models/user'
import { LoginService } from '../../services/login/login.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User()

  constructor(
    private router: Router ,
    private loginService : LoginService
  ) {}

  ngOnInit(): void {    
  }

  submitForm(): void {
    localStorage.setItem('currentuser', 'currentuser');
      this.router.navigate(['/requerimiento'])

    // this.loginService.login(this.user.username,this.user.password).subscribe((response)=>{
    //   console.log(response);
    //   localStorage.setItem('currentuser', response);
    //   this.router.navigate(['/requerimiento'])
    // },
    // (error: HttpErrorResponse)=>{
    //   console.error(error);
    // });
  }
}
