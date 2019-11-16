import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authState ,selectAuthState} from 'src/app/state/users/reducers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any;
  getState: Observable<any>;
  constructor(private store:Store<authState>,private router: Router) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.user = state.user;
      console.log(this.user);
    });
    if(this.user == null){
      this.router.navigateByUrl('/login');
    }
  }

}
