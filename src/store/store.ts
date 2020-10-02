export class Store {
    // will contain subscribers, reduers, and the state.
    private subscribers: Function[];
    private reducers: { [key: string]: Function };
    private state: { [key: string]: any};

    constructor(reducers = {}, initialState = {}) {
        // reducers parameter will be default empty object if none supplied as arguments.
        this.state = initialState;
    }

    get value() {
        return this.state;
    }
}