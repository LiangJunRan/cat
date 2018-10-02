<template>
	<header :class="{bgcolor: '/index'===$route.path}">
		<div class="content">
			<div class="logo">
				<i style="width: 50px; height: 50px; border-radius: 50%; background: #FF8E55; display: inline-block;"></i>
				<div style="display: inline-block; color: #FF8E55; transform: translate(10px,-10px);" >
					<p style="font-size:20px;">公益猫</p>
					<p style="font-size:12px;font-family:'HYLeMiaoTiW';">每一只猫猫都值得被爱 为ta寻找港湾</p>
				</div>
				
			</div>
			<div class="navlist">
				<ul>
					<li @click="goIndex()" :class="{cur: '/index'===$route.path}">首页</li>
					<li @click="goCommunity()" :class="{cur:'/community'===$route.path}">社区</li>
					<li @click="godiary()" :class="{cur: '/diary'===$route.path}">日记</li>
					<li>发布</li>
					<li>我的</li>
				</ul>
			</div>
			<div class="Headerbtn">
				<div>登录</div>
				<div>注册</div>
			</div>
		</div>
	</header>
</template>

<script>

export default{
	methods:{
		goIndex(){
			this.$router.push('/index')
		},
		goCommunity(){
			this.$router.push('/community')
		},
		godiary(){
			this.$router.push('/diary')
		}
	}
}

</script>

<style scoped>
header{
	width: 100%;
	height: 50px;
	background: #FFFFFF;
	text-align: left;
}

.bgcolor{
	background: #ffddce;
}

header .content{
	width: 1200px;
	height: 50px;
	margin: 0 auto;
}

header .content .logo,header .content .navlist{
	float: left;
} 

header .logo{
	height: 50px;
	width: 275px;
}

header .navlist ul li{
	float: left;
	width: 80px;
	text-align: center;
	line-height: 50px;
	cursor:pointer;
}

header .navlist .cur{
	color: #FFFFFF;
	font-weight: 800;
	background: #FF8E55;
}

header .Headerbtn{
	float: right;
}

.Headerbtn div{
	display: inline-block;
	text-align: center;
	color: #FFFFFF;
	font-size: 14px;
	width: 50px;
	height: 30px;
	line-height: 30px;
	border-radius:5px;
	margin-right: 20px;
	margin-top: 10px;
	background: #FC8D59;
}
</style>