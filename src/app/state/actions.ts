import { createAction,props} from '@ngrx/store';
export const login = createAction('[Login Component] login',
props<{}>()
)
export const loginSuccess = createAction('[Login Component] login Success',
props<{payload:any}>()
)
export const loginFailure = createAction('[Login Component] login Failure')