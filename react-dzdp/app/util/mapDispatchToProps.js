/**
 * dispatch to props
 *  用于绑定dispatch与action
 */
import {bindActionCreators} from 'redux'
export default function (actions){
    return (dispatch) => {
        let obj = {dispatch};

        if(typeof actions === 'object'){
            Object.keys(actions).forEach(function(val){
                obj[val] = bindActionCreators(actions[val],dispatch);
            })
        }

        return obj
    }
}
