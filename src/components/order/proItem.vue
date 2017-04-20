<template>
	<section style="">
	 <div @click="openPicker()">
       <mt-cell title="配送方式"  is-link  class="bgw">
       <span class="cblack"  >{{selectVal}}</span>
     </mt-cell>
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
    	slots: [   //从接口取出values的值或者直接写死
	        {
	          flex: 1,
	          values: ['顺丰', '申通', '邮政'],
	          className: 'slot1',
	          textAlign: 'center',
	          defaultIndex:'0'
	        }, 
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
   }
	}
}
</script>
<style>
</style>
