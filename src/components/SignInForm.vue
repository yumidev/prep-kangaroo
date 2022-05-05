<template>
  <Form v-slot="{ meta, errors }" class="form" @submit="onSubmit">
    <InputField :errors="errors" :rules="isRequired" />
    <ErrorMessage name="email" as="div" />
    <InputField
      type="password"
      name="password"
      placeholder="Password"
      :errors="errors"
      :rules="isRequired"
      :imgSrc="require('../assets/lock.png')"
    />
    <ErrorMessage name="password" as="div" />
    <div class="validation-error" v-show="isValidationError">
      Email or password is incorrect
    </div>
    <SubmitButton :disabled="!meta.valid" />
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { Form, configure, ErrorMessage } from "vee-validate";

import InputField from "@/components/InputField.vue";
import SubmitButton from "@/components/SubmitButton.vue";

configure({
  validateOnInput: true,
});

export default defineComponent({
  name: "HomeView",
  components: {
    InputField,
    Form,
    SubmitButton,
    ErrorMessage,
  },
  data() {
    return {
      isValidationError: false,
    };
  },
  methods: {
    isRequired(value: string) {
      return value ? true : "This field is required";
    },
    ...mapActions({
      setUser: "setUser",
    }),
    onSubmit(value: { email: string; password: string }) {
      if (value.password === "password") {
        this.setUser(value.email);
        this.$router.push({
          name: "home",
        });
      } else {
        this.isValidationError = true;
      }
    },
  },
});
</script>

<style scoped>
.form {
  background-color: rgb(248, 120, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form > * {
  margin-bottom: 20px;
}
.error {
  background-color: red;
}
</style>
