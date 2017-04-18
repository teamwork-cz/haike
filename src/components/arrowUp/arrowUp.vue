<template>
	<section style="">
		 <div class="to-top" @click='toTop'></div>

	</section>
</template>
<script>
	export default{
		methods:{
			toTop(){
				window.scrollTo(0,0)
			}
		}
	}
</script>
<style>

</style>