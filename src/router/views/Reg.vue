<template>
    <div>
        <x-input title="姓名"
                 name="username"
                 placeholder="请输入姓名"
                 v-model="name"

                 is-type="china-name"></x-input>
        <x-input title="密码"
                 name="password"
                 placeholder="请输入密码"
                 v-model="password"
                 type='password'></x-input>
        <x-button @click.native="onClick"
                  type="primary">登录</x-button>
    </div>
</template>
<script>
import { XInput, XButton } from 'vux'
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