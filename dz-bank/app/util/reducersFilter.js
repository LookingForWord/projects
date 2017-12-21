/**
 * reducers filter
 * 针对复用reducer即相同的action type进行过滤
 */
export default function reducersFilter(reducer,filterFunc = (action) => true){

    return (state,action) => {
        const isInitState = state === undefined;

        let filterResult = false;
        if(typeof action.payload === 'object') filterResult = filterFunc(action);

        return filterResult || isInitState ? reducer(state,action) : state;
    }
}
