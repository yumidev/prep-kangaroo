<template>
  <div class="row">
    <span>{{ orderID }}</span>
    <span :class="['count', status === 'done' && 'done']">{{
      numOfOrders
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  props: {
    orderID: {
      type: String,
    },
    numOfOrders: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
});
</script>

<style scoped>
.row {
  padding: 5px 20px;
  background-color: white;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid lightgray;
}
.count {
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-weight: bold;
}
.done {
  border-radius: 15px;
  background-color: gray;
  color: white;
}
</style>
