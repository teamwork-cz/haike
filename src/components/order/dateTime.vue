<template>
	<section style="">
	   <div @click="openPicker()">
       <mt-cell :title="title" class="bgw" is-link >
         <span class="cblack"  v-text="c_pickerValue"></span>
       </mt-cell>
   </div>
  
	<mt-datetime-picker
  ref="picker"
  v-model="pickerValue"
  type="date"
  @confirm="handleConfirm"
   >
</mt-datetime-picker>

	</section>
</template>
<script>
import { DatetimePicker } from 'mint-ui';
	export default{
	props: ['title'],
	data() {
    return {
      pickerValue:"",
      c_pickerValue:''
    }
  },
  components: {
    DatetimePicker
  },
	methods:{
	  openPicker() {
        this.$refs.picker.open();
      },
    handleConfirm(){
      this.pickerValue = new Date(this.pickerValue);
      this.pickerValue=this.pickerValue.getFullYear() + '/' + (this.pickerValue.getMonth() + 1) + '/' + this.pickerValue.getDate() ;
    	console.log(this.pickerValue)
      this.c_pickerValue=this.pickerValue
      this.$emit('input',this.pickerValue)
    }
		},

	}
</script>
<style>

</style>