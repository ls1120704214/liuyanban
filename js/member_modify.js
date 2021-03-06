//等待网页加载完毕再执行
window.onload=function(){
	code();
	//表单验证
	var fm=document.getElementsByTagName('form')[0];
	fm.onsubmit=function(){
		//能用客户端的尽量客户端
		//JS对于PHP课程来说，选学，不强制掌握
		//密码验证
		if (fm.password.value!='') {
			if (fm.password.value.length<6) {
				alert('密码不得小于6位!');
				fm.password.value=''
				fm.password.focus();
				return false;
			};
		};
		//邮箱验证
		if (!/^[\w\-\.]+@[\w-.]+(\.\w+)+$/.test(fm.email.value)) {
			alert('邮件格式不正确！');
			fm.email.focus();
			return false;
		};
		//QQ验证
		if (fm.qq.value!='') {
			if (!/^[1-9]{1}[\d]{4,10}$/.test(fm.qq.value)) {
				alert('QQ号码格式不正确！');
				fm.qq.value='';
				fm.qq.focus();
				return false;
			};
		};
		//网址验证
		if (fm.url.value!='' & fm.url.value!='http://') {
			if (!/^((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_\/]+)+$/.test(fm.url.value)) {
				alert('网址格式不正确！');
				fm.url.focus();
				return false;
			};
		};
		//个性签名验证
		if (fm.autograph.value!='') {
			if (fm.autograph.value.length>40) {
				alert('个性签名长度不能超过40字符！');
				fm.autograph.focus();
				return false;
			};
		};
		//验证码简单验证
		if (fm.code.value.length!=4) {
			alert('验证码格式不正确！');
			fm.code.value='';
			fm.code.focus();
			return false;
		};
		return true;
		
		};
};
