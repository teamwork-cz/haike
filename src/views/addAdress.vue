<template>
  <section id="boxView">
    <mt-header fixed
               title="新增地址">
      <div slot="left">
        <mt-button><</mt-button>
      </div>
    </mt-header>
    <div class="top44 bgw p10">
        <mt-field class="bordergray" label="收货人" placeholder="请填写"></mt-field>
        <mt-field class="bordergray" label="手机号码" placeholder="请填写" type="email"></mt-field>
        <addressPicker></addressPicker>
        <mt-field class="bordergray" label="街道" placeholder="请填写" type="tel"></mt-field>
        <mt-field  label="详细地址" placeholder="请填写" type="url"></mt-field>
    </div>  
     <div class="fixedBottom wp100  bgw" @click="goRoute({ name: 'address'})">   
         <div class="flexBox flex-row flex-main-center" > 
            <mt-button size="normal">添加</mt-button>
         </div>                      
      </div> 
  </section>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import{addressPicker} from '../components/'
export default {
  data() {
    return {
      selected:'1',
    }
  },
  components: {
addressPicker
  },
  methods: {
    ...mapMutations([
  
    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
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
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #FF3F71 !important;
    color: #FF3F71 !important;;
    margin-bottom: -1px !important;;
}
 .mint-popup-bottom{
    width: 100%
  }
.default_a:before{
	content: "[设为默认]";
	color: red
}
</style>
