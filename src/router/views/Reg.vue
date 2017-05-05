<template>
    <div class="bgw" style="padding-top:40px">
        <x-input 
                 name="username"
                 placeholder="请输入姓名"
                 v-model="name"
                 is-type="china-name"></x-input>       
            <x-input 
               placeholder="发送验证码" 
               v-model="valcode"
               type="text">
                <span slot="right" type="primary" mini>验证</span>
            </x-input>

        <x-input 
                 name="password"
                 placeholder="请输入密码"
                 v-model="password"
                 type='password'
                 > 
                 <img slot="right" class="w20" src="../../assets/images/eye_c.png">
                 <!-- <img slot="right" class="" src="../../assets/images/eye_o.png"> -->
        </x-input>
        <div class="f12 gray p15">我已阅读并接受 <span class="cred">嗨克用户注册协议 </span></div>
        <div class="p15 top44">
              <x-button class="buttonRed " @click.native="onClick"
                   >注册</x-button>
        </div>
     
    </div>
</template>
<script>
import { XInput, XButton } from 'vux'
import { Checklist } from 'mint-ui'
export default {
    data() {
        return {
            name: '',
            password: ''
        }
    },
    created() {
        // console.log('test')
        this.nextPath = this.$route.params.nextPath || 'index'
    },
    components: {
        XInput,
        XButton
    },
    methods: {
        onClick() {
            console.log(this.name)
            console.log(this.password)
            this.$router.replace({ name: this.nextPath })
        }
    }
}
</script>
<style type="text/css">

</style>