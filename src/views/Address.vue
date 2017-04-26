<template>
  <section id="boxView">
    <mt-header fixed
               title="收货地址">
      <div slot="left">
        <mt-button class="sprite_login arrow_back"
                   @click='$router.back()'>
        </mt-button>
      </div>
  
      <mt-button slot="right"
                 @click='$router.push("/addaddress")'
                 class="f16">
        新增地址
      </mt-button>
    </mt-header>
    <div class="top54 bgw ">
      <div class="flex flexBox flex-col ">
        <template v-for="(address,index) in addaddress">
          <mt-cell-swipe :right="[
                                  {
                                    content: '设为默认',
                                    style: { background: '#ccc', color: '#fff',width:'85px',fontsize:'14px'},
                                    handler: () => {setDefault(index)}
                                  },
                                  { 
                                    content: '删除',
                                    style: { background: '#FF3F71', color: '#fff',width:'75px',fontsize:'14px' },
                                    handler: () =>{onDelete(index)}
                                  }
                                ]"
                         class=" p15 bordergray">
            <div class="wp100">
              <div class="bgw flexBox flex-row  flex-main-between ">
                <div class="cblack">{{address.name}}</div>
                <div class="cblack">{{address.tel}}</div>
              </div>
              <div class=" mt10 cblack"
                   :class='{default_a:index===0}'>{{address.region}}{{address.address}}</div>
            </div>
  
          </mt-cell-swipe>
        </template>
  
      </div>
    </div>
  
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      selected: '1'
    }
  },
  computed: {
    ...mapGetters({
      addaddress: 'getAddresses'
    })
  },
  methods: {
    ...mapActions([
      'updateaddresses'
    ])
    ,
    onDelete(index) {
      this.updateaddresses({ type: 'del', index: index })
    },
    setDefault(index) {
      this.updateaddresses({ type: 'default', index: index })

    }
  }
}
</script>

<style>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #FF3F71 !important;
  color: #FF3F71 !important;
  ;
  margin-bottom: -1px !important;
  ;
}

.mint-popup-bottom {
  width: 100%
}

.default_a:before {
  content: "[默认地址]";
  color: #FF3F71
}
.mint-cell-title{
  flex: none !important;
}
.mint-cell-value{
  width: 100%
}
.mint-cell-swipe-button{
  text-align: center;
}

</style>
