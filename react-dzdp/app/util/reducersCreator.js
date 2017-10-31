/**
 * reducer creators
 */
export default function reducersCreator(initialState,typesHandler){
    //存储初始化状态，便于重置初始化状态
    initialState = Object.assign({initItem:null},initialState)
    const initState = Object.assign({initState:initialState},initialState);

    return (state = initState,action) => {
        if(typesHandler.hasOwnProperty(action.type))
            return typesHandler[action.type](state,action);
        else
            return state;
    }
}
