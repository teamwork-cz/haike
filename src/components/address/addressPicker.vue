<template>
  <section style="">
     <div @click="openPicker()">
       <mt-field class="bordergray" label="所在地区" placeholder="请填写"  :value="selectVal"></mt-field>
   </div>
  <mt-popup
  v-model="popupVisible"
  position="bottom"
  popup-transition="popup-fade" 
  > 
  <mt-picker :slots="slots" :showToolbar="showToolbar" @change="onValuesChange" >
     <div class="flexBox flex-row flex-main-between p15 pt10">
       <div @click="cancel()">取消</div>
       <div @click="comfirm()">确认</div>
    </div>
  </mt-picker>  
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
    slots: [
        {
          flex: 1,
          values: ['北京', '上海', '安徽', '江苏'],
          className: 'slot1',
          textAlign: 'center'
        },{
          flex: 1,
          values: ['北京'],
          className: 'slot1',
          textAlign: 'center'
        },{
          flex: 1,
          values: ['北京'],
          className: 'slot1',
          textAlign: 'center'
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
     var a= picker.getValues()[0];
     if(!Array.indexOf){
      Array.prototype.indexOf = function(el){
     for (var i=0,n=this.length; i<n; i++){
     if (this[i] === el){
      return i;
     }
     }
     return -1;
       } 
    }

     var index=this.slots[0].values.indexOf(a);
     console.log(index);
     this.selectVal=picker.getValues().join('-');

        },
   comfirm(){
    this.popupVisible = false;
   },
   cancel(){
   this.popupVisible = false;
   }
  }
}
</script>
<style>
.picker-toolbar {
    background-color: #F5F5F5;
    color: #0074FF;
}

</style>
