export class Store {
    // will contain subscribers, reduers, and the state.
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        // reducers parameter will be default empty object if none supplied as arguments.
        this.subscribers = [];
        this.reducers = reducers;
        // above gives internal access to reducers from within the store.
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }

<<<<<<< Updated upstream
    /*  NOTES FOR dispatch() and reduce()
    Any time we dispatch an action, we are essentially telling
    the store to update the particular state. So this.state
    is the result of calling the reduce(), which will loop
    over all our reducers, create an object property for each one,
    and bind the value as the result of each reducer function call.
    */
=======
    subscribe(fn) {
        this.subscribers = [...this.subscribers, fn];
        this.notify();
    }

>>>>>>> Stashed changes
    dispatch(action) {
        this.state = this.reduce(this.state, action);
        this.notify();
    }

    /* any time we call notify() we loop through the subscriber list
       and pass the new state.
    */
    private notify() {
        this.subscribers.forEach(fn => fn(this.value));
    }

    /* reduce() iterates over reducers and passes in state, any actions
       that have been dispatched. reducers then compose new state,
       and bind back to this.state obj. 
    */
    private reduce(state, action) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
            // equivalent to: newState.todos = this.reducers.todos()
        }
        return newState;
    }
}