<template>
  <div class="home">
    <ListHeader :numOfOrders="list.length" />
    <ListRow
      v-for="(data, index) in list"
      :key="index"
      :numOfOrders="data.items.length"
      :orderID="data.id || data.time"
      :status="data.status"
    />
    <NavFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListHeader from "@/components/ListHeader.vue";
import ListRow from "@/components/ListRow.vue";
import NavFooter from "@/components/NavFooter.vue";

const mockListData = [
  {
    time: "11:28:11",
    id: "Starrybucks",
    status: "done",
    items: ["mocha", "cinnamon"],
  },
  {
    time: "11:28:11",
    id: "Subway",
    status: "pending",
    items: ["sandwich"],
  },
  {
    time: "12:32:11",
    id: "Pizza",
    status: "pending",
    items: ["peperoni"],
  },
  {
    time: "11:28:01",
    id: "Burger486",
    status: "pending",
    items: ["beef"],
  },
  {
    time: "13:12:41",
    id: "Coffee",
    status: "pending",
    items: ["cafelatte"],
  },
];

export default defineComponent({
  name: "HomeView",
  components: {
    ListHeader,
    ListRow,
    NavFooter,
  },
  mounted() {
    const isAuthenticated = !!this.$store.state.user.email;
    if (!isAuthenticated) {
      this.$router.push({
        name: "sign-in",
      });
    }
  },
  data() {
    return {
      list: mockListData,
    };
  },
});
</script>

<style scoped>
.home {
  background-color: rgb(248, 120, 1);
}

.logo {
  width: 80%;
}
</style>
