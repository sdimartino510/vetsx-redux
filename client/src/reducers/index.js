import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer.plugin({
    addTodo: (state, action) => {
      switch(action.type) {
        
        default:
          return state;
      }
    }
  }),
});
