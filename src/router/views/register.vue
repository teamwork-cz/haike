<template>
    <div>
        <x-input name="phoneNo"
                 placeholder="请输入手机号"
                 v-model="phoneNo"
                 labelWidth=0
                 type='tel'
                 required
                 is-type="china-mobile"></x-input>
        <group title="验证码" class="weui-cells_form">
            <x-input title="验证码" class="weui-cell_vcode">
                <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
            </x-input>
            <x-input title="发送验证码" class="weui-vcode">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
        </group>
        <x-input name="password"
                 required
                 placeholder="请输入密码"
                 v-model="password"
                 type='password'></x-input>
        <x-button @click.native="onClick"
                  type="primary">登录</x-button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { XInput, XButton } from 'vux'
export default {
    data() {
        return {
            phoneNo: '',
            password: ''
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

        }
    }
}
</script>