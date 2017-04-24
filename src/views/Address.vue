<template>
  <section id="boxView">
    <mt-header fixed
               title="收货地址">
      <div slot="left">
          <mt-button  class="sprite_login arrow_back" @click='$router.back()'>
            </mt-button>
      </div>
  
      <mt-button slot="right"
                 @click='$router.push("/addaddress")' class="f14">
                 	新增地址
                 </mt-button>  
    </mt-header>
    <div class="top44 bgw">
    <div class="flex flexBox flex-col ">
            <mt-cell-swipe
              :right="[

                {
                  content: '设为默认',
                  style: { background: '#ccc', color: '#fff' },
                  handler: () => this.$messagebox('设为默认')
                },
                { 
                  content: '删除',
                  handler: () => this.$messagebox('删除')
                }
              ]" class=" p10 bordergray">
              <div class="wp100">
              	 <div class="bgw flexBox flex-row  flex-main-between mt10">
                     <div class="cblack">haike</div>
                     <div class="cblack">1872121212</div>
                 </div>
                 <div class="default_a mt10 cblack">上海市长宁区长寿街道娄山关路523弄12号703室</div>
              </div>
         
          </mt-cell-swipe>
           <mt-cell-swipe
              :right="[
              {
                  content: '设为默认',
                   style: { background: '#ccc', color: '#fff' },
                  handler: () => this.$messagebox('设为默认')
                },
                {
                  content: '删除',
                  handler: () => this.$messagebox('delete')
                }
               
              ]"class=" p10 bordergray">
              <div class="wp100">
              	 <div class="bgw flexBox flex-row  flex-main-between mt10">
                     <div class="cblack">haike</div>
                     <div class="cblack">1872121212</div>
                 </div>
                 <div class="mt10 cblack">上海市长宁区长寿街道娄山关路523弄12号703室</div>
              </div>
         
          </mt-cell-swipe>
         </div>

    	
    </div>
  
  </section>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import{addresspPicker} from '../components/'
export default {
  data() {
    return {
      selected:'1',
      popupVisible:false,
      slots: [
        {
          flex: 1,
          values: ['黄色', '红色', '绿色'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['S', 'M', 'L', 'XL'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  components: {
addresspPicker
  },
  methods: {
    ...mapMutations([
  
    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
    handleClick(){
          this.popupVisible = true
        },
    onValuesChange(picker, values){
      console.log(values[0]+','+values[1])
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
