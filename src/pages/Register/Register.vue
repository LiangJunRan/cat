<template>
	<div class="register">
		<div class="top">
			<div class="title">
				欢迎加入猫公益
			</div>
			<span>注册账号</span>
		</div>
		<div class="content">
			<div class="input newPassword">
				<span>用户名：</span><input placeholder="请输入用户名" />
			</div>
			<div class="input confirmPass">
				<span>密码：</span><input placeholder="请输入6位以上字符密码" />
			</div>
			<div class="input email">
				<span>手机号：</span><input placeholder="请输入您常使用的手机号" />
			</div>
			<div class="input VerCode">
				<span>验证码：</span><input placeholder="请输入正确的验证码" />
				<div class="BtngetCode">获取验证码</div>
			</div>
			<div class="bot" style="padding-top:0; padding-bottom: 30px;">
				点击注册账号，表示同意<span>服务条款</span>和<span>隐私条款</span>
			</div>
			<div class="btn">
				<span>注册账号</span>
			</div>
			<div class="bot">
				已有账号，直接<span @click="goLogin">登录</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		goLogin(){
			this.$router.push('/login')
		}
	}
}
</script>

<style scoped>

.register{
	background: #FFFFFF;
}
.register>div{
	margin: 0 auto;
}
.title{
	padding-top:100px;
	font-size: 60px;
	font-family: "HYLeMiaoTiW";
	color: #000000;
}

.top span{
	display: inline-block;
	padding-top: 10px;
	color: #FF8E55;
	font-size: 30px;
}

.content{
	padding: 45px 0 0 0;
	width: 400px;
}

.content .input{
	width: 400px;
	height: auto;
	border-bottom:2px solid #CCCCCC ;
	padding-bottom: 11px;
	text-align: left;
	margin-bottom: 30px;
}

.content .input span{
	font-size: 22px;
	display: inline-block;
	width:118px ;
}
.content input{
	outline: none;
	font-size: 14px;
}

.BtngetCode{
	width: 80px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	background: #FC8D59;
	font-size: 14px;
	color: #FFFFFF;
	border-radius:5px;
	transform: translateX(15px);
	display: inline-block;
	cursor: pointer;
}

/* .BtngetCode */

.btn{
	width: 400px;
	height: 60px;
	line-height: 60px;
	background: #FC8D59;
	cursor: pointer;
	border-radius: 5px;
}

.btn span{
	font-size: 30px;
	color: #FFFFFF;
}

.bot{
	padding-top:30px;
	font-size: 16px;
}

.bot span{
	color: #FC8D59;
	cursor: pointer;
}

</style>