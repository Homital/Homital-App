<template>
  <view class="page">
    <uni-section title="Name your room" type="line"></uni-section>
    <view class="input-body">
      <input v-model="roomAdded" placeholder="Give it a name :>"
      type="text" class="example-body" />
    </view>
    <view class="add_button">
      <button style="width:80%;margin-top:35px;margin-bottom:15px;"
      type="primary"
      v-bind:loading ='processingAdd'
      @tap="add_room">{{processingAdd == false? 'Add room'
                :'adding room'}}</button>
    </view>
  </view>
</template>

<script>
import uniSection from '@/components/uni-section/uni-section.vue';
const auth = require('../../common/authorisation');
export default {
  components: {
    uniSection,
  },
  data() {
    return {
      roomAdded: '',
      username: '',
      processingAdd: false,
    };
  },
  methods: {
    async add_room() {
      const tHIS = this;
      tHIS.processingAdd = true;

      // add room
      const url = await getApp().globalData.base_url + `/user/rooms`;
      await auth.functions.makeAuthenticatedCall(
          async (res) => {
            console.log('reached add room');
            if (res.statusCode == 200) {
              console.log('successfully add room ' + tHIS.roomAdded +
              ' for user: ' + tHIS.username);
              // save info to be pushed to list, save time getting whole list
              getApp().globalData.room_added = tHIS.roomAdded;
              getApp().globalData.room_id_added = res.data.room_id;
              getApp().globalData.room_role_added = res.data.role;
              // // printing to check saved, yes saved so commented out
              // console.log('print room_id from response:'+res.data.room_id);
              // console.log('print roomId:'+getApp().globalData.room_id_added);
              // go back to room list page
              tHIS.processingAdd = false;
              uni.navigateBack();
            } else {
              tHIS.error = res.data.error;
              uni.showToast({
                icon: 'none',
                title: tHIS.error,
                duration: 2000,
              });
            }
          },
          url,
          {name: tHIS.roomAdded},
          'POST',
      );
    },
  },
};
</script>

<style>
  /* #ifndef APP-NVUE */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4;
    min-height: 100%;
    height: auto;
  }

  .combo-body {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    font-size: 14px;
    background-color: #ffffff;
  }

  /* #endif */
  .example {
    padding: 0 15px;
  }

  .example-info {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    padding: 15px;
    color: #3b4144;
    background-color: #ffffff;
    font-size: 14px;
    line-height: 20px;
  }

  .example-info-text {
    font-size: 14px;
    line-height: 20px;
    color: #3b4144;
  }


  .example-body {
    flex-direction: column;
    padding: 15px;
    background-color: #ffffff;
  }

  .word-btn-white {
    font-size: 18px;
    color: #FFFFFF;
  }

  .word-btn {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 48px;
    margin: 15px;
    background-color: #007AFF;
  }

  .word-btn--hover {
    background-color: #4ca2ff;
  }


  .input-body {
    padding: 10px 12px;
    background-color: #FFFFFF;
  }

  .result-box {
    text-align: center;
    padding: 0px 0px;
    font-size: 16px;
  }
</style>
