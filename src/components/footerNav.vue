<template>
	<footer class="footer"
	        :class="{'go-back': !showNav}">
		<section class="footer mint-1px-t"
		         v-show="showNav">
			<nav class="nav nav-movie"
			     @click='goRoute("index")'
			     :class="{'cur-page': route === '/'}">
	
				<div class="nav-icon">
					<img v-show="route !== '/'"
					     src="../assets/images/home.svg"
					     alt="">
					<img v-show="route === '/'"
					     src="../assets/images/homeS.svg"
					     alt="">
				</div>
			</nav>
			<nav class="nav nav-cinama"
			     @click='goRoute("hiSelect")'
			     :class="{'cur-page': routeName === 'hiSelect'}">
				<div class="nav-icon">
					<img v-show="route !== '/hiselect'"
					     src="../assets/images/hi.svg"
					     alt="">
					<img v-show="route === '/hiselect'"
					     src="../assets/images/hiS.svg"
					     alt="">
				</div>
			</nav>
			<nav class="nav nav-show"
			     :class="{'cur-page': route === '/show'}">
				<div class="nav-icon">
					<img v-show="route !== '/show'"
					     src="../assets/images/show.svg"
					     alt="">
					<img v-show="route === '/show'"
					     src="../assets/images/showS.svg"
					     alt="">
				</div>
			</nav>
				<nav class="nav nav-me"
			     @click='goRoute("me")'
			     :class="{'cur-page': routeName === 'me'}">
				<div class="nav-icon">
					<img v-show="route !== '/me'"
					     src="../assets/images/me.svg"
					     alt="">
					<img v-show="route === '/me'"
					     src="../assets/images/meS.svg"
					     alt="">
				</div>
			</nav>
		</section>
		<!--  	<section v-show="!showNav" @click="goBack" style="width: 100%">
							  		<p class="back"> < </p>
							  	</section> -->
	</footer>
</template>
<script>
export default {
	props: {
		'showNav': {
			type: Boolean,
			default: true
		}
	},
	computed: {
		route() {
			return this.$route.path
		},
		routeName() {
			return this.$route.name
		}
	},
	methods: {
		goBack() {
			this.$router.back()
		},
		goRoute(name) {
			if (name === this.routeName)
				return
			this.$router.replace({ name: name })
		}
	}
}
</script>

<style>
.footer {
	background-color: #fff;
	position: fixed;
	width: 100%;
	bottom: 0px;
	height: 50px;
	display: -webkit-box;
	padding-top: 7px;
	box-sizing: border-box;
	z-index: 10000;
}

.footer nav {
	-webkit-box-flex: 1;
	text-align: center;
	color: #8a869e;
}

.footer .cur-page.nav {
	color: #ff4d64;
}

.nav-icon {
	width: 22px;
	height: 22px;
	margin: 0 auto;
}

.nav-icon img {
	width: 100%;
	height: 100%;
}

.nav-movie::after,
.nav-cinama::after,
.nav-show::after,
.nav-me::after {
	padding-top: 2px;
	text-align: center;
	width: 30px;
	display: inline-block;
	font-size: 12px;
}

.nav-movie::after {
	content: "首页";
}

.nav-cinama::after {
	content: "嗨选";
}

.nav-show::after {
	content: "嗨show";
	width: 50px
}

.nav-me::after {
	content: "我的";
}

.go-back {
	background: #ff2c43;
}

.back {
	font-size: 30px;
	color: #fff;
	padding-left: 35px;
	margin-top: -4px;
	transform: scaleY(1.5);
}
</style>
