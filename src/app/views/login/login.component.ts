import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login} from '../../state/actions';
import {  ServiceService } from '../../services/service.service';
import { selectAuthState,authState} from '../../state/users/reducers';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginForm: FormGroup;
  isSubmitted  =  false;
  getState: Observable<any>;
  constructor(public formBuilder: FormBuilder,private store:Store<authState>, public service: ServiceService) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;

    });
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    const payload = this.loginForm.value;
    // this.service.logIn(payload).subscribe((res)=>{
    //   console.log(res);

    // });
    this.store.dispatch(login(payload));
  }

}
