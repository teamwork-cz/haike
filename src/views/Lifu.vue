<template>
    <div class="flexBox flex-row flex-main-arount flex-wrap"
         infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
    
        <div class="flex45"
             v-for="item in lfLists">
            <router-link :to="{ name: 'proInfo', params: { id:`${item.brandId}`}}">
                <img class=""
                     v-lazy.container="'http://www.hykeyun.com/image?u=' + item.image">
                <div class="title">{{item.title}}</div>
                <div class="flexBox flex-row flex-main-between f12 p10">
                    <div class="cred">¥388/4天</div>
                    <div class="gray">市场价¥{{item.sellPrice}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['lfLists']
}
</script>
