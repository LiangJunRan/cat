<template>
	<div class="login">
		<div class="top">
			<div class="title">
				欢迎加入猫公益
			</div>
			<span>登录</span>
		</div>
		
		<div class="content">
			<div class="input userName">
				<span>账号：</span><input placeholder="请输入手机号/邮箱/用户名" />
			</div>
			<div class="input password" style="margin-top: 45px; margin-bottom: 20px;">
				<span>密码：</span><input placeholder="请输入密码" />
			</div>
			<!-- <div>
				<span>30天记住我</span>
			</div> -->
			<div class="btn">
				<span @click="goIndex()">登录</span>
			</div>
			<div class="bot">
				<div> <span @click="goFoeget()">忘记密码？</span> </div>
				<div> 没有账号？ <span @click="goRegister()">注册账号</span> </div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	methods:{
		goIndex(){
			this.$router.push('/index')
		},
		
		goFoeget(){
			this.$router.push('/forget')
		},
		goRegister(){
			this.$router.push('/register')
		}
	}
}
</script>
<style scoped>
.login{
	background: #FFFFFF;
}
.login>div{
	margin: 0 auto;
}
.title{
	padding-top:120px;
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
	padding: 60px 0 0 0;
	width: 400px;
	
}

.content .input{
	width: 400px;
	height: auto;
	border-bottom:2px solid #CCCCCC ;
	padding-bottom: 11px;
	text-align: left;
}
.content .input span{
	font-size: 22px;
	padding-right: 30px;
}
.content input{
	outline: none;
	font-size: 14px;
}

.btn{
	background: #FC8D59;
	height: 60px;
	line-height: 60px;
	width: 400px;
	margin: 30px 0 0 0;
	border-radius: 5px;
	cursor: pointer;
}

.btn span{
	color: #FFFFFF;
	font-size: 30px;
}

.bot>div{
	padding-top: 30px;
	font-size: 12px;
	color: #666666;
}
.bot span{
	font-size: 16px;
	color: #FC8D59;
	cursor: pointer;
}
</style>