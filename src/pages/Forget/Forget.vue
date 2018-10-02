<template>
	<div class="forget">
		<div class="top">
			<div class="title">
				欢迎加入猫公益
			</div>
			<span>修改密码</span>
		</div>
		<div class="content">
			<div class="input newPassword">
				<span>新密码：</span><input placeholder="请设置新密码" />
			</div>
			<div class="input confirmPass">
				<span>新密码：</span><input placeholder="请再次输入密码" />
			</div>
			<div class="input email">
				<span>邮箱：</span><input placeholder="请输入注册时使用的邮箱" />
			</div>
			<div class="input VerCode">
				<span>验证码：</span><input placeholder="请输入正确的验证码" />
				<div class="BtngetCode">获取验证码</div>
			</div>
			<div class="btn">
				<span>确认修改</span>
			</div>
			<div class="bot">
				改变主意直接<span @click="goLogin">登录</span>
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
.forget{
	background: #FFFFFF;
}
.forget>div{
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