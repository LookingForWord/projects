/**
* 获取登录信息模块
*		有数据自动填充，判断时间戳是否过期
* @param vm Vue实例
* @param timeDate 记住密码的时间天数 默认值 3天
*/
export default function getLoginMsg(vm,timeDate = 3){
	if(window.localStorage){
		let loginStr = window.localStorage.getItem('login');
		if(loginStr){
			let login = JSON.parse(loginStr);
			//检验是否过期
			let timeStatus = new Date().getTime()-login.timestamp-timeDate*24*60*60*1000;
			if(timeStatus < 0){
				vm.login.username = login.username;
				vm.login.password = login.password;
			}else{
				window.localStorage.removeItem('login');
				vm.login.username = '';
				vm.login.password = '';
			}
		}
	}
}