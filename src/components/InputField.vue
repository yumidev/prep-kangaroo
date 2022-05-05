<template>
  <div class="input-field">
    <img :src="imgSrc" alt="" class="icon" />
    <Field
      class="input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
    />
    <span v-if="errors">{{ errors.field }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "InputField",
  components: {
    Field,
  },
  props: {
    name: {
      type: String,
      default: "email",
    },
    type: {
      type: String,
      default: "email",
    },
    placeholder: {
      type: String,
      default: "Email Address",
    },
    rules: {
      type: Function,
      required: true,
    },
    imgSrc: {
      type: String,
      default: require("../assets/email-outline.png"),
    },
    errors: {
      type: Object,
    },
  },
});
</script>

<style scoped>
.input-field {
  background-color: orange;
  width: 80vw;
  height: 40px;
  border-radius: 25px;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px 20px;
}
.input-field .icon {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
.input {
  border: none;
  width: 100%;
  color: white;
}
.input::placeholder {
  color: white;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}
</style>
