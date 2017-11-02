/**
 * 获取会话信息模块
 */
export default {
    getItem (key){
        let value ;

        try{
            value = sessionStorage.getItem(key);
        }catch(err){
            if(process.env.NODE_ENV === 'dev')
                console.error('sessionStorage.getItem报错：',err.message);

        }finally {
            return value;
        }
    },

    setItem(key,value){
        try{
            sessionStorage.setItem(key,value);
        }catch (err){
            if(process.env.NODE_ENV === 'dev')
                console.error('sessionStorage.setItem报错：',err.message);
        }
    }
}