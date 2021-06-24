import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceTest';
  user=new User();
  msg = '';

constructor(public service: UserService,public _router: Router, private toaster: ToastrService){

}
  loginUserSeken() {
   console.log("this is for user object",this.user)
    
    
    this.service.loginUser(this.user).subscribe(
    data => {
      this._router.navigate(['dashboard']);
      this.msg = 'successfully logged in';
      this.toaster.success(this.msg);
    },
    error => {
    console.log("this is error credentials", error)
    this.msg = "Check the Credentails or varify the account"
    this.toaster.error(this.msg);
    
    
    }
    )
  
    
   
    }
    


}
