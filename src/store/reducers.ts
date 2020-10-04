import * as fromActions from './actions';

export const initialState = {
    loaded: false,
    loading: false,
    data: [{ label: "Eat food", complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
    switch(action.type) {
        case fromActions.ADD_TODO: {
            // grab the todo (in the action payload):
            const todo = action.payload;
            // compose new array by taking previous data, and appending new todo:
            const data = [...state.data, todo];
            // return as new object whilst merging existing state:
            return {
                ...state,
                data,
            };
        }

        case fromActions.REMOVE_TODO: {
            const data = state.data.filter(todo => todo.label !== action.payload.label);
            return {
                ...state,
                data,
            };
        }
    }
  return state;
}