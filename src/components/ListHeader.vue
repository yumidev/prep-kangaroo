<template>
  <div class="header">
    <span>My orders</span>
    <span class="count">{{ numOfOrders }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  props: {
    numOfOrders: {
      type: Number,
    },
  },
});
</script>

<style scoped>
.header {
  margin-top: 40px;
  height: 40px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.count {
  height: 30px;
  width: 30px;
  line-height: 30px;
  border-radius: 15px;
  background-color: white;
  color: orange;
  font-weight: bold;
}
</style>
