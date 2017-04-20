<template>
    <div class="flexBox flex-row flex-main-arount flex-wrap"
         infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
    
        <div class="flex1"
             v-for="item in byLists">
            <router-link :to="{ name: 'proInfo', params: { id:`${item.proId}`}}">
                <img class="width185"
                     v-lazy.container="item.images">
                <div class="title">{{item.name}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['byLists']
}
</script>
