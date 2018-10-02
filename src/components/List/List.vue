<template>
	
	<div class="list clearfix">
		<div class="list_le">
			<div class="list_title">
				<img src="./img/猫爪.png" width="25" height="25"/>
				<span>标题：<i>XXXXXXXXX</i></span>
			</div>
			<div class="list_content">
				<p>你个话痨小孩！说实话我觉得活泼张扬、清新单纯的你是还不错，就像肯德基柚香鸡腿堡，柚子酱搭配烤鸡腿，酸甜鲜嫩，另外你的约定我勉强</p>
			</div>
			<a>查看全文 > </a>
		</div>
		
		<div class="list_ri">
			<span style="text-align: right; color: #CCCCCC; font-size: 12px; margin-bottom: 15px;" class="list_time">2018年7月12日 11:53</span>
			<img src="./img/1661402420.jpg" width="180" height="180" style="border-radius: 5px;"/>
		</div>
		
		<div class="list_bot" style="clear: both;">
			<span> <i class="iconfont icon-xing"></i> <label>53</label> </span>
			<span> <i class="iconfont icon-pinglun"></i> <label>53</label> </span>
			<span> <i class="iconfont icon-zan1"></i> <label>53</label> </span>
		</div>
	</div>
	
</template>

<script>
	
</script>

<style scoped>
.list{
	width: 970px;
	height: 240px;
	margin: 0 auto;
	margin-top: 30px;
	padding: 12px 20px 0 5px;
	border: 1px solid #CCCCCC;
	border-radius: 5px;
}

.list .list_le{
	float: left;
}

.list .list_ri{
	float: right;
}

.list .list_title span{
	display: inline-block;
	font-size: 20px;
	height: 25px;
	line-height: 25px;
	transform: translate(5px,-5px);
}

.list .list_content p{
	width: 730px;
	margin-left:25px;
	line-height: 200%;
	color: #666666;
	text-indent:2em;
    display: -webkit-box;    
	-webkit-box-orient: vertical;    
	-webkit-line-clamp: 3;    
	max-height: 72px;     
	overflow: hidden;    
	text-overflow: ellipsis;    
	text-overflow: -o-ellipsis-lastline;
}

.list .list_le a{
	display: inline-block;
	color:#FC8D59;
	font-size: 14px;
	transform: translate(680px,100px);
}

.list .list_ri span,.list .list_ri img{
	display: block;
}

.list .list_bot{
	height: 30px;
	line-height: 30px;
	text-align: right;
}

.list .list_bot span{
	display: inline-block;
	width: 100px;
	text-align: center;
	cursor: pointer;
}
</style>