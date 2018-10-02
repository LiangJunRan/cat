<template>
	<div class="index">
		<Header></Header>
		
		<!-- 主要内容 -->
		<div class="">
			
			
			<div class="top">
				<div class="content">
					<div class="horn">
						<img src="./img/horn.png"/>
					</div>
					<div class="title1" >
						<span>报告组织，发现喵星人踪迹!!!</span>
					</div>
					<div class="title2" >
						<span style="font-size:60px;color: #FF8E55;">发布喵星人</span>
					</div>
					<div class="cats">
						
					</div>
				</div>
				
			</div>
			
			<div class="main">
				
				<div class="search">
					<div class="title">
						<div class="bor" style="float: left; "></div>
						<span>寻找喵星人</span>
						<div class="bor" style="float: right;"></div>
					</div>
					<div class="form">
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
				
				<div class="lists clearfix">
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1 cur" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1 cur" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1" ></i>
							</div>
						</div>
						
						<div class="list">
							<div class="listimg">
								<img width="280" height="320" src="./img/166554441.jpg" />
							</div>
							<div class="listbot">
								<div class="headerimg" >
									<img src="" />
								</div>
								<span style="padding-left:5px;">昵称</span>
								<i class="iconfont icon-pinglun" ></i>
								<i class="iconfont icon-zan1 cur" @click="dianzan()"></i>
							</div>
						</div>
						
				</div>
			</div>
		</div>
		
		
		<Footer></Footer>
	</div>
</template>

<script>
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default{
	
	data () {
		return {
			radio3: '',
			activeColor: "red",
		};
	},
	
	components:{
		Header,
		Footer,
	},
	
	methods:{
		dianzan(){
			
		}
	}
	
}

</script>

<style scoped>

.index .top{
	width: 100%;
	height: 330px;
	background: #FFDDCE;
}

.index .content{
	width: 1200px;
	height: 330px;
	margin: 0 auto;
}

.index .top .horn{
	width: 120px;
	height: 103px;
	transform: translate(135px,55px);
}

.top .title1{
	width: 280px;
	height: 80px;
	line-height:80px;
	background: url(./img/矩形.png) no-repeat;
	background-size:280px 80px;
	transform: translate(280px,-50px);
}

.top .title2{
	width: 420px;
	height: 120px;
	line-height: 120px;
	background: url(./img/矩形.png) no-repeat;
	background-size:420px 120px ;
	transform: translate(340px,-20px);
}

.top span{
	font-family: "HYLeMiaoTiW";
	font-size: 16px;
}

.top .cats{
	height: 115px;
	width: 450px;
	background:url(./img/cats.png) no-repeat;
	transform: translate(760px,-90px);
}

.main{
	margin-top: 20px;
}

.main .title{
	width: 400px;
	margin: 0 auto;
}

.main .title span{
	font-size: 28px;
	font-weight: 800;
	color: #666666;
}

.main .title .bor{
	width: 100px;
	height: 2px;
	background: #FC8D59;
	transform: translateY(20px);
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

.main .lists{
	width: 1200px;
	min-height: 200px;
	margin: 0 auto;
}

.main .lists .list{
	width: 280px;
	float: left;
	padding: 0 10px 20px 10px;
}

.list .listimg{
	width: 280px;
	height: 320px;
}

.list .listbot{
	text-align: left;
	padding-top: 10px;
	padding-right: 10px;
	height: 30px;
	line-height: 30px;
}

.listbot .headerimg{
	width:30px; 
	height: 30px; 
	border-radius:50%;
	display: inline-block;
	background: #FC8D59;
}

.listbot i{
	display: inline-block; 
	float: right; 
	width: 30px; 
	height: 30px; 
	font-size: 24px;
	
}

.listbot i[class="iconfont icon-zan1"]{
	color: #CCCCCC;
}

.listbot i.cur{
	color: red;
}

</style>