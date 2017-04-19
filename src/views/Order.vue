<!-- <template>
	<section id="Order">
		<city></city>
		<cinemaArea></cinemaArea>
		<cinema></cinema>
	</section>
</template>

<script>
import { mapMutations } from 'vuex'
import { cinema, cinemaArea, city } from '../components/'
export default{
	data () {
		return {
		}
	},
	components: {
		cinema,
		cinemaArea,
		city
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad',
		  'showCityList'
		]),
		requestData (url, fn) {
		  this.pushLoadStack()
		  this.$http.get(url).then(fn).then(this.completeLoad)
		}
	}
}
</script>

<style>  
</style>
 -->
<template>
  <section>
    <mt-header fixed
               title="使用中的衣箱">
        <div slot="left">
         <mt-button v-link="'/'" ><</mt-button> 
         </div>
    </mt-header>
    <section>
      <
    </section>
      <div class="fixedBottom wp100  bgw">   
       <div class="flexBox flex-row flex-main-center">
        <router-link :to="{ name: 'order'}">
          <mt-button size="normal" class=""  @click="addPro()">寄这个衣箱给我（1/3）</mt-button>
          </router-link>
       </div>         
             
      </div>
  
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  components: {

  },
  methods: {
    ...mapMutations([
  
    ]),
    requestData(url, fn) {
      this.pushLoadStack()
      this.$http.get(url).then((res) => {
        this.completeLoad()
        fn(res)
      })
    },

  },
  created() {


  }
}
</script>

<style>

</style>
