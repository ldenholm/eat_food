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
        case 'ADD_TODO': {
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
    }
  return state;
}