<template>
<div>
    <mt-header fixed
               title="用户注册">
      <div slot="left">
        <mt-button class="sprite_login arrow_back"
                   @click='$router.back()'>
        </mt-button>
      </div>
    </mt-header>
    <div class="bgw p15 top44">
        <x-input 
                 name="username"
                 placeholder="请输入姓名"
                 v-model="name"
                 is-type="china-name"></x-input>       
            <x-input 
               placeholder="发送验证码" 
               v-model="valcode"
               type="text">
                <span slot="right" type="primary" mini  @click="send" :disabled="time > 0"> {{ text }}</span>
      
            </x-input>
        <x-input 
                 name="password"
                 placeholder="请输入密码"
                 v-model="password"
                 :type='pwdtype'
                 > 
                 <img slot="right" class="w20" src="../../assets/images/eye_c.png" v-show="close" @click="pwchange()">
                 <img slot="right" class="w20" src="../../assets/images/eye_o.png" v-show="!close" @click="pwchange()">
        </x-input>
        <div class="f12 gray p15">
        <input type="checkbox" name="" style="position: relative;top: 3px;">

        我已阅读并接受 <span class="cred">嗨克用户注册协议 </span></div>
        <div class="p15 top44">
              <x-button class="buttonRed " @click.native="onClick"
                   >注册</x-button>
        </div>
     
    </div>

</div>
    
</template>
<script>
import { XInput, XButton } from 'vux'
import { Checklist } from 'mint-ui'
export default {
      props: {
            second: {
                type: Number,
                default: 60
            }
        },
    data() {
        return {
            name: '',
            pwdtype:'password',
            password: '',
            close:true,
            valcode:'',
            time: 0
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
        },
        pwchange(){
           this.close=!this.close;
           if(this.close){
            this.pwdtype="password";
           }else{
             this.pwdtype="text";
           }

        },
         send() {
                this.time = this.second
                this.timer()
                this.$emit('send')
            },
            timer() {
                if (this.time > 0) {
                    this.time = this.time - 1
                    setTimeout(this.timer, 1000)
                }
            }
    },
        computed: {
            text() {
                return this.time > 0 ? this.time + 's' : '获取验证码'
            }
        }

}
</script>
<style type="text/css">

</style>




