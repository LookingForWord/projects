/**
 * State to Props
 */
export default function mapStateToProps(params){
    return (state) => {
        let obj = {};

        if(typeof params === 'object'){
            Object.keys(params).forEach(function(val){
                obj[val] = state[params[val]];
            })
        }

        return obj;
    }
}
