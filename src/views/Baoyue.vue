<template>
    <div class="flexBox flex-row flex-main-arount flex-wrap"
         infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
    
        <div class="flex45"
             v-for="item in byLists">
            <router-link :to="{ name: 'proInfo', params: { id:`${item.id}`}}">
                <img class=""
                     v-lazy.container="'http://www.hykeyun.com/image?u=' + item.image">
                <div class="title">{{item.title}}</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['byLists']
}
</script>
