<template>
  <mt-header  v-show="showHeader" fixed
                   :title="title">
          <div slot="left">
            <mt-button  class="sprite_login arrow_back" @click='$router.back()'>
            </mt-button>
          </div>
          <mt-button v-show="showBox"  @click='$router.push("/box")'
                     slot="right"
                     class="sprite box"></mt-button>
        </mt-header>
</template>
<script>
export default {
	props: {
		'showHeader': {
			type: Boolean,
			default: true
		},
		'showBox':{
			type: Boolean,
			default: true
		}
	},
	computed: {
		route() {
			return this.$route.path
		},
		routeName() {
			return this.$route.name
		}
	},
	methods: {
		goBack() {
			this.$router.back()
		},
		goRoute(name) {
			if (name === this.routeName)
				return
			this.$router.replace({ name: name })
		}
	}
}
</script>

<style>

</style>
