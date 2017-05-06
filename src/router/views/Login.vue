<template>
<section>
    <mt-header fixed title="登录">
         <div slot="left">
            <mt-button  class="sprite_login arrow_back" @click='$router.back()'>
            </mt-button>
        </div>
    </mt-header>
    <div class="top44 bgw p15" style="padding-top: 50px">
        <x-input name="phoneNo"
                 placeholder="请输入手机号码"
                 v-model="phoneNo"
                 labelWidth=0
                 type='tel'
                 required
                 is-type="china-mobile"></x-input>
        <x-input 
                 name="password"
                 placeholder="请输入密码"
                 v-model="password"
                 :type='pwdtype'
                 > 
                 <img slot="right" class="w20" src="../../assets/images/eye_c.png" v-show="close" @click="pwchange()">
                 <img slot="right" class="w20" src="../../assets/images/eye_o.png" v-show="!close" @click="pwchange()">
        </x-input>
        <div class="p15 top40">
              <x-button class="buttonRed " @click.native="onClick"
                   >登录</x-button>
        </div>
         <div class="flexBox flex-row flex-main-arount cred f12 top30">
            <div>忘记密码</div>
            <div @click="goRoute({name:'reg'})">注册用户</div>
        </div>
    </div>
</section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { XInput, XButton } from 'vux'
export default {
    data() {
        return {
            phoneNo: '',
            password: '',
            pwdtype:'password',
            close:true,
        }
    },
    created() {
        this.clickLoadStatus = false
        // console.log('test')
        this.nextPath = this.$route.params.nextPath || 'index'
    },
    components: {
        XInput,
        XButton
    },
    methods: {
        ...mapMutations([
            'pushLoadStack',
            'completeLoad'
        ]),
        onClick() {
            if (this.clickLoadStatus)
                return
            if (!this.phoneNo || !this.password)
                //这里可以toast
                return
            this.clickLoadStatus = true
            this.pushLoadStack()

            this.$reqData.req({
                apiName: 'login',
                baseURL: 'http://rapapi.org',
                url: '/mockjsdata/17098/account/login',
                method: 'post',
                params: {
                    phoneNo: this.phoneNo,
                    pwd: this.password
                }
            }).then((res) => {
                this.clickLoadStatus = false
                this.completeLoad()
                console.log(res)
                res = res.data
                if (res.errno !== 0) {
                    this.$toast(res.msg)
                    return
                }
                sessionStorage.setItem('userSate', JSON.stringify(res))
                this.$router.replace({ name: this.nextPath })
            }).catch(() => {
                this.completeLoad()
                this.clickLoadStatus = false
                this.$toast('系统异常')
            })
            // console.log(this.name)
            // console.log(this.password)

        },
        goRoute(route) {
              console.log(this.$router)
              // route.params.sku=this.sku
              this.$router.push(route)
            },
         pwchange(){
           this.close=!this.close;
           if(this.close){
            this.pwdtype="password";
           }else{
             this.pwdtype="text";
           }

        },
    }
}
</script>