<template>
	<footer>
		<div class="content">
			<div class="logo">
				<div class="logoImg">
					
				</div>
			</div>
			<div class="milddle">
					<div class="">
						<span>联系我们 CONTANT</span>
					</div>
					<div>
						<span>E-mail:</span><span>xxxxxx@xxx.com</span>
					</div>
					<div>
						<span>QQ:</span><span>xxxxxxxxx</span>
					</div>
			</div>
			<div class="wxORCode">
				<span style="display:inline-block;color: #FFFFFF;">微信公众号</span>
				<div class="wxORCodeImg">
					
				</div>
				<span style="font-size: 12px; color: #FFFFFF;" >扫一扫，我们一起来养猫</span>
			</div>
		</div>
		
	</footer>
</template>

<script>

</script>

<style scoped>
footer{
	margin-top: 80px;
	width: 100%;
	height: 200px;
	/* line-height: 200px; */
	background: #FC8D59;
}

.content{
	padding-top: 20px;
	width:1250px;
	margin: 0 auto;
}

.content .logo{
	float: left;
	transform: translateX(150px);
}

.logo .logoImg{
	width: 150px;
	height: 150px;
	background: #333333;
}

.milddle{
	width: 398px;
	height: 150px;
	border-left: 1px solid #FFFFFF;
	border-right: 1px solid #FFFFFF;
	margin: 0 auto;
	display: inline-block;
	text-align: left;
	
}

.milddle>div{
	padding-left: 30px;
}

.milddle span{
	color: #FFFFFF;
	display: inline-block;
	padding-bottom: 20px;
}

.wxORCode{
	width: 150px;
	height: 150px;
	float: right;
	transform: translateX(-150px);
	/* background: #000000; */
}

.wxORCode .wxORCodeImg{
	width: 130px;
	height: 130px;
	background: #000000;
	margin: 0 auto;
}
</style>