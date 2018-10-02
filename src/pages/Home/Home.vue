<template>
	<div class="home">
		<div class="logo">
			<img src="./img/1.png" />
		</div>
		<div class="title">
			<span>关于猫的公益</span>
		</div>
		<div class="Proverb">
			<span>如果你无法简洁的表达你的想法，那就只能说明你还不够了解它。</span>
			<span class="Proverb_name">———阿尔伯特·爱因斯坦</span>
		</div>
		<div class="btn">
			<div @click="goLogin" class="btn_le">
				<span>加入我们</span>
			</div>
			<div @click="goIndex" class="btn_ri">
				<span>逛逛社区</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		goLogin(){
			this.$router.push('/login')
		},
		goIndex(){
			this.$router.push('/index')
		}
	}
}
</script>

<style scoped>
.home{
	width: 100%;
	height: 100%;
	background: #ffddce;
}

.home>div{
	margin: 0 auto;
}

.logo{
	margin: 0px auto 0px auto;
	padding-top: 120px;
	padding-bottom: 30px;
}

.title span{
	font-size: 60px;
	font-family:"HYLeMiaoTiW" ;
}

.Proverb{
	padding-top:60px ;
	padding-bottom: 80px;
}
.Proverb span{
	font-size:20px;
	color: #333333;
	display: block;
}

.Proverb_name{
	padding-top: 30px;
	font-size: 22px;
	transform: translateX(240px);
}

.btn{
	height: 60px;
	width: 810px;
}

.btn_le,.btn_ri{
	width: 200px;
	height: 60px;
	background: #fc8d59;
	border-radius: 5px;
	display: inline-block;
	line-height: 60px;
	cursor: pointer;
	margin:0 100px 0 100px;
}

.btn_le span,.btn_ri span{
	font-size: 24px;
	color: #ffffff;
	
}


</style>