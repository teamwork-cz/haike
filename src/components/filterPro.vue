<template>
  <section style="" id="filterPro">
    <span class="vm city-name f14" @click='openPicker()'>筛选</span>
    <span class="select vm"></span>
  <mt-popup
  v-model="popupVisible"
  position="right"
  popup-transition="popup-fade" 
 
  > 
<div class="pl10">
  <div class="priceItem top44 f14">
    <div class="">价格区间</div>
    <input type="number" placeholder="最低价"> - <input type="number" placeholder="最高价">
  </div>
  <div class="filterItem  f14 " v-for="item in data">
     <div class="flex-row flexBox flex-main-between ">
       <div>{{item.pname}}</div>
       <div class="flex-row flexBox flex-main-between flex-cross-center">
        <div class="pr10">全部</div> 
        <icon class="arrow_down_right mr10"  :class="{ 'arrow_up_right': arrowDown, 'arrow_down_right': !arrowDown }"  @click="arrowDown=!arrowDown"></icon>      
       </div>
     </div>
       <div class="flexBox flex-row flex-wrap" :class="{ 'ht50': !arrowDown }">
       <!-- 选中的class是给下面这个div加上 .active  @曹华南 -->
            <div class="itemInput"  v-for="item1 in item.pdsPropertyDs" @click="chooseItem(`${item1.pid}`)" >{{item1.pvalue}}</div>
          
      </div>    
  </div>


<!--     <div class="filterItem  f14 ">
     <div class="flex-row flexBox flex-main-between ">
       <div>长度</div>
       <div class="flex-row flexBox flex-main-between flex-cross-center">
        <div class="pr10">全部</div> 
        <icon class="arrow_down_right mr10"  :class="{ 'arrow_down_right': arrowDown, 'arrow_up_right': !arrowDown }"  @click="arrowDown=!arrowDown"></icon>      
       </div>
     </div>
       <div class="flexBox flex-row flex-wrap" :class="{ 'ht50': !arrowDown }">
            <div class="itemInput  active">即膝</div>
            <div class="itemInput ">迷你</div>
            <div class="itemInput ">连衣裙</div>
             <div class="itemInput ">等等</div>
      </div>    
  </div> -->

</div>

<div class="filterButton f18 flexBox flex-row flex-main-arount">
 <div class="flex1 refilter">重置</div>
  <div class="flex1 surefilter">确定</div>
</div>
</mt-popup>

  </section>
</template>
<script>
import { Picker } from 'mint-ui';
  export default{
  data() {
    return {
      popupVisible:false,
      showToolbar:true,
      selectVal:"",
      arrowDown:false,
        data: [
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "1",
                            "pvalue": "时尚"
                        },{
                            "pid": "1",
                            "pvalue": "时尚"
                        },{
                            "pid": "1",
                            "pvalue": "时尚"
                        },{
                            "pid": "1",
                            "pvalue": "时尚"
                        }
                    ],
                    "pname": "场合",
                    "pps": 0
                },
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "2",
                            "pvalue": "淑女"
                        }
                    ],
                    "pname": "上市季节",
                    "pps": 1
                },
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "3",
                            "pvalue": "休闲"
                        }
                    ],
                    "pname": "长度",
                    "pps": 2
                },
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "4",
                            "pvalue": "宴会"
                        }
                    ],
                    "pname": "衣服类型",
                    "pps": 3
                },
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "5",
                            "pvalue": "会议"
                        }
                    ],
                    "pname": "尺码",
                    "pps": 4
                },
                {
                    "pdsPropertyDs": [
                        {
                            "pid": "6",
                            "pvalue": "时尚"
                        }, {
                            "pid": "7",
                            "pvalue": "时尚"
                        }
                    ],
                    "pname": "色调",
                    "pps": 5
                }
            ]

   
    }
  },
  components: {
    Picker
  },
  methods:{
    openPicker() {
       this.popupVisible = true
      },
   onValuesChange(picker, values){
      console.log(values[0]);
      this.selectVal=values[0];
      },
   comfirm(){
    this.popupVisible = false;
   },
   cancel(){
   this.popupVisible = false;
   },
   chooseItem(pid){
alert(pid)
   }
  }
}
</script>
<style>
#filterPro .mint-popup-right{
  height: 100%;
  width: 80%
}
.priceItem input{
    height: 25px;
    width: 100px;
    background: #F0F2F5;
    border: none;
    text-align: center;
    border-radius: 5px;
}
.itemInput{
    width: 65px;
    background-color: #F0F2F5;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 15px;
    border-radius: 10px
}
.itemInput.active{
   color: #FF3F71;
   width: 63px;
   background-color: #fff;
   border:1px solid #FF3F71;
}
.filterButton{
  position: fixed;
    bottom: 50px;
    height: 50px;
    line-height: 50px;
    width: 100%
}
.refilter{
      border-bottom: 1px solid #ccc;
       border-top: 1px solid #ccc;
    width: 50%;
    text-align: center;
}
.surefilter{
      width: 50%;
    text-align: center;

    color: #fff;
    background-color: #ff3f71;
}
.ht50{
  height: 27px !important;
  overflow: hidden;
}
</style>
