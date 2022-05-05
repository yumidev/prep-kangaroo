<template>
  <div class="sign-in">
    <img
      class="logo"
      alt="Kangaroo Logo"
      src="@/assets/kangaroo-white-logo.png"
    />
    <SignInForm />
    <div class="link">
      <a href="/">Forgot your password?</a>
      <div class="no-account">
        <span>No account?</span><a href="/">Register</a><span>or</span
        ><a href="/">Select location</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignInForm from "@/components/SignInForm.vue";

export default defineComponent({
  name: "SignInView",
  components: {
    SignInForm,
  },
});
</script>

<style scoped>
.sign-in {
  background-color: rgb(248, 120, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.logo {
  width: 300px;
  margin-bottom: 60px;
}
.link {
  color: white;
}
a:visited {
  color: white;
}
.no-account > * {
  margin-right: 8px;
}
</style>
