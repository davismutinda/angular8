import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError,switchMap} from 'rxjs/operators';
import { ServiceService} from '../../services/service.service';
 import { loginSuccess,loginFailure} from '../actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private service: ServiceService,
        public router: Router,
        private toastr: ToastrService
      ) {}
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Login Component] login'),
    switchMap(payload =>{
        return this.service.logIn(payload).pipe(map((user) => {
        this.toastr.success('Successfully login In'),
         this.router.navigateByUrl('dashboard');
         sessionStorage.setItem('Token',user.token)
          return loginSuccess({payload:user});
          
        }),
        catchError(error => of(loginFailure()))
        )
    })
    )
  );
 
}