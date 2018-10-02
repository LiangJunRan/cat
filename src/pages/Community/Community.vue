<template>
	<div class="community">
		<Header></Header>
		
		<div class="">
			
			<div class="top">
				<div class="content">
					<div class="topmain">
						<div class="topmain_row1">
							<img src="./img/猫爪.png" />
							<span>喵星人的故事</span>
						</div>
						<div class="topmain_row2">
							<div class="img">
								<img src="../Index/img/354863575.jpg" width="100" height="100"/>
							</div>
							<div class="but">
								<span>记录喵星人</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="main">
				
				<div class="search">

					<div class="form">
						<div class="title">
							<span>喵星人的成长故事</span>
						</div>
						<div class="input input1 clearfix">
							<div> <label>城市：</label> <input /> </div>
							<div> <label>年龄段：</label> <input /> </div>
						</div>
						<div class="input input2 clearfix">
							
							<div style="padding-right:0px; width: 310px; text-align: left;"> 
								<label>性别：</label>  
								<input type="radio" id="gongmao" name="gender" value="gongmao" class="checkbox_style"/>
								<label for="gongmao" class="label"> 
									<i></i>公猫
								</label>
								<input type="radio" id="mumao" name="gender" value="mumao" class="checkbox_style"/>
								<label for="mumao" class="label">
									<i></i>母猫
								</label>
								<input type="radio" id="buming" name="gender" value="buming" class="checkbox_style"/>
								<label for="buming" class="label">
									<i></i>不明
								</label>
							</div>
							
							<div>
								<label style="width: 80px;">健康状况：</label>  
								<input type="radio" id="healthy" name="healthyType" value="healthy" class="checkbox_style"/>
								<label for="healthy" class="label"> 
									<i></i>健康
								</label>
								<input type="radio" id="commonly" name="healthyType" value="commonly" class="checkbox_style"/>
								<label for="commonly" class="label">
									<i></i>一般
								</label>
								<input type="radio" id="weak" name="healthyType" value="weak" class="checkbox_style"/>
								<label for="weak" class="label">
									<i></i>较弱
								</label>
								<input type="radio" id="disease" name="healthyType" value="disease" class="checkbox_style"/>
								<label for="disease" class="label">
									<i></i>小疾
								</label>
								<input type="radio" id="disability" name="healthyType" value="disability" class="checkbox_style"/>
								<label for="disability" class="label">
									<i></i>残疾
								</label>
							</div>
						</div>
					</div>
				</div>
				
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

.community .top{
	width: 100%;
	height: 316px;
	background: url(./img/bg1.png) no-repeat;
	background-size:110%;
}

.top .content{
	width: 1200px;
	height: 316px;
	margin: 0 auto;
}

.topmain{
	text-align: left;
	margin:60px 0 0 45px;
}

.topmain_row1 span{
	display: inline-block;
	font-size: 24px;
	color: rgb(51, 51, 51);
	font-weight: bold;
	line-height: 1;
	text-indent: 24px;
	transform: translateY(-5px);
}

.topmain_row2{
	margin: 25px 0 0 100px;
	height: 100px;
}

.topmain_row2>div{
	display:inline-block;
}

.topmain_row2 img{
	width:100px;
	height: 100px;
	border-radius:50%;
}

.topmain_row2 .but{
	height:60px;
	line-height: 60px;
	width: 200px;
	text-align:center;
	background: #FC8D59;
	color: #FFFFFF;
	font-size:24px;
	border-radius:5px;
	transform: translate(20px,-40px);
	cursor: pointer;
}

.main{
	width: 1200px;
	min-height: 20px;
	margin: 0 auto;
}


.main .title{
	width: 400px;
	text-align: left;
	margin-bottom: 15px;
}

.main .title span{
	font-size: 24px;
	font-weight: 800;
	color: #666666;
}

.main .form{
	width: 1200px;
	border-top: 1px solid #FC8D59;
	margin: 10px auto;
	padding-top: 16px;
}

.main .input{
	margin-bottom: 20px;
}

.main .input>div{
	float: left;
	height: 30px;
	line-height: 30px;
	padding-right:80px;
}

.main .input label{
	display: inline-block;
	width: 65px;
	height: 30px;
	line-height: 30px;
	text-align: left;
}

.main .form input{
	border: 1px solid rgb(145,191,219);

	border-radius:5px;
	outline:none;
}

.main .form .input1 input{
	width: 160px;
	height: 30px;
}

.main .form .input2 input{
	display: none;
}

.label i{
	display: inline-block;
	background: #E0F3F8; 
	width: 20px; 
	height: 20px;
	margin-right: 5px;
	transform: translateY(5px);
	border-radius:5px;
}

.checkbox_style + label{
	background-color: #FFF;
	display: inline-block;
}

.checkbox_style:checked + label i{
	background-color: #FC8D59;
}

.lists{
	width: 1000px;
	min-height: 50px;
	margin: 0 auto;
	text-align: left;
}



</style>