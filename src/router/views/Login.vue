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
import { mapGetters, mapMutations } from 'vuex'
import { XInput, XButton } from 'vux'
export default {
    data() {
        return {
            name: '',
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
            this.clickLoadStatus = true
            this.pushLoadStack()
            this.$reqData.req({
                apiName: 'login'
            }).then(() => {
                this.clickLoadStatus = false
                this.completeLoad()
                
                sessionStorage.setItem('userSate', JSON.stringify({}))
                this.$router.replace({ name: this.nextPath })
            }).catch(() => {
                this.completeLoad()
                this.clickLoadStatus = false
            })
            console.log(this.name)
            console.log(this.password)

        }
    }
}
</script>