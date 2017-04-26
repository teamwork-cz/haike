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
                 class="f14">
        新增地址
      </mt-button>
    </mt-header>
    <div class="top44 bgw">
      <div class="flex flexBox flex-col ">
        <template v-for="(address,index) in addaddress">
          <mt-cell-swipe :right="[
                                  {
                                    content: '设为默认',
                                    style: { background: '#ccc', color: '#fff' },
                                    handler: () => {setDefault(index)}
                                  },
                                  { 
                                    content: '删除',
                                    handler: () =>{onDelete(index)}
                                  }
                                ]"
                         class=" p10 bordergray">
            <div class="wp100">
              <div class="bgw flexBox flex-row  flex-main-between mt10">
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
  content: "[设为默认]";
  color: red
}
</style>
