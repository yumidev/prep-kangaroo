<template>
  <div class="footer">
    <div class="content-wrapper">
      <div class="nav-button selected">
        <img class="icon" src="@/assets/timelapse.png" alt="" />
        <span>Timeslots</span>
      </div>
      <div class="nav-button">
        <img class="icon" src="@/assets/takeout.png" alt="" />
        <span>My Deliveries</span>
      </div>
      <div class="nav-button">
        <img class="icon" src="@/assets/info.png" alt="" />
        <span>Support</span>
      </div>
      <div class="nav-button">
        <img class="icon" src="@/assets/settings.png" alt="" />
        <span>Settings</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  padding: 5px 20px;
  border-top: 2px solid lightgray;
  width: fill-available;
  height: 50px;
}
.content-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.content-wrapper .selected {
  color: orange;
}
.nav-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 30px;
}
</style>
