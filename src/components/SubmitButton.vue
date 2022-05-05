<template>
  <button class="button">LOGIN</button>
</template>

<style scoped>
.button {
  height: 50px;
  width: calc(80vw + 40px);
  background: white;
  color: orange;
  font-weight: 700;
  border: none;
  border-radius: 25px;
}
.button:disabled {
  background: gray;
  color: lightgray;
}
</style>
