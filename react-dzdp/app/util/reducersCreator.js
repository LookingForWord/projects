/**
 * reducer creators
 */
export default function reducersCreator(initalState,typesHandler){
    //存储初始化状态，便于重置初始化状态
    initalState = Object.assign({initItem:null},initalState)
    const initState = Object.assign({initState:initalState},initalState);

    return (state = initState,action) => {
        if(typesHandler.hasOwnProperty(action.type))
            return typesHandler[action.type](state,action);
        else
            return state;
    }
}
