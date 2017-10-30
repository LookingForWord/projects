/**
 * 获取本地信息模块
 */
export default {
    getItem (key){
        let value ;

        try{
            value = localStorage.getItem(key);
        }catch(err){
            if(process.env.NODE_ENV === 'dev')
                console.error('localStorage.getItem报错：',err.message);

        }finally {
            return value;
        }
    },

    setItem(key,value){
        try{
            localStorage.setItem(key,value);
        }catch (err){
            if(process.env.NODE_ENV === 'dev')
                console.error('localStorage.setItem报错：',err.message);
        }
    }
}
