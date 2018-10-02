<template>
	<div class="diary">
		<Header></Header>
		<div class=""> 
			
			<div class="top">
				<div class="top_le">
					<h3>为喵星人寻找主人</h3>
					<span></span>
				</div>
				<div class="top_ri cur" >
					<h3>我和喵星人的故事</h3>
					<span></span>
				</div>
				<div class="btn">
					发布
				</div>
			</div>
			
			<div class="content">
				<div class="lists">
					<List></List>
					<List></List>
					<List></List>
				</div>
			</div>
			
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import List from "../../components/List/List"


export default{
	components:{
		Header,
		Footer,
		List,
	},
}
</script>

<style scoped>

.top{
	width: 1200px;
	height: 120px;
	margin: 0 auto;
	padding-top: 30px;
}

.top_le,.top_ri{
	width: 600px;
	margin: 0 auto;
	float: left;
	font-size: 24px;
	color: #666666;
}

.cur span{
	margin-top:5px;
	display: inline-block;
	border-top:20px solid #FC8D59;
	border-left:20px solid transparent;
	border-right:20px solid transparent;
}

.cur h3{
	color: #000000;
	font-weight:800;
}

.btn{
	clear: both;
	width: 100px;
	height: 30px;
	line-height: 30px;
	border:1px solid #FC8D59;
	border-radius:5px;
	cursor: pointer;
	color: #FC8D59;
	font-size: 18px;
	margin:0 auto;
}

.content{
	width: 1200px;
	min-height: 20px;
	margin: 0 auto;
}

.lists{
	width: 1000px;
	min-height: 50px;
	margin: 0 auto;
	text-align: left;
}
</style> 