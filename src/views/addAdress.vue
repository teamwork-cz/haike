<template>
  <section id="boxView">
    <mt-header fixed
               title="新增地址">
      <div slot="left">
        <mt-button class="sprite_login arrow_back"
                   @click='$router.back()'>
        </mt-button>
      </div>
    </mt-header>
    <div class="top54 bgw p10">
      <mt-field class="bordergray"
                v-model="name"
                label="收货人"
                placeholder="请填写"></mt-field>
      <mt-field class="bordergray"
                label="手机号码"
                v-model="tel"
                placeholder="请填写"
                type="email"></mt-field>
      <addressPicker v-on:picked='addressPicked'></addressPicker>
      <mt-field class="bordergray"
                label="街道"
                v-model="address"
                placeholder="请填写"
                type="tel"></mt-field>
      <mt-field label="详细地址"
                v-model="detailAddr"
                placeholder="请填写"
                type="url"></mt-field>
    </div>
    <div class="fixedBottom wp100  bgw">
      <div class="flexBox flex-row flex-main-center">
        <mt-button size="normal"
                   @click.native='addSubmit'>添加</mt-button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { addressPicker } from '../components/'
export default {
  data() {
    return {
      name: '',
      address: '',
      tel: '',
      region: '',
      detailAddr: ''
    }
  },
  computed: {
    addressObj() {
      return {
        name: this.name,
        address: this.address,
        tel: this.tel,
        region: this.region,
        detailAddr: this.detailAddr
      }
    }
  },
  components: {
    addressPicker
  },
  methods: {
    ...mapActions([
      'updateaddresses'
    ]),
    goRoute(route) {
      console.log(this.$router)
      this.$router.push(route)
    },
    addSubmit() {
      console.log(this.addressObj)
      this.updateaddresses({ type: 'add', address: this.addressObj})
      this.goRoute({ name: 'address' })
    },
    addressPicked(val) {
      this.region = val
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
