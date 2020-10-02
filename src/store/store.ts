export class Store {
    // will contain subscribers, reduers, and the state.
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any};

    constructor(reducers = {}, initialState = {}) {
        // reducers parameter will be default empty object if none supplied as arguments.
        this.reducers = reducers;
        this.state = initialState;
    }

    get value() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reduce(this.state, action);
    }

    private reduce(state, action) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state, action);
            // equivalent to: newState.todos = this.reducers.todos()
        }
        return newState;
    }
}