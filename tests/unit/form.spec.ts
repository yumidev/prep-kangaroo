import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import SignInForm from "@/components/SignInForm.vue";

describe("SignInForm.vue", () => {
  it("renders inactive submit button", async () => {
    const wrapper = mount(SignInForm);
    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue("mock@mail.com");

    await flushPromises();

    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
});

describe("SignInForm.vue", () => {
  it("renders active submit button", async () => {
    const wrapper = mount(SignInForm);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    await emailInput.setValue("mock@mail.com");
    await passwordInput.setValue("mockPassword");

    await flushPromises();

    expect(wrapper.find("button").attributes().disabled).toBeUndefined();
  });
});

describe("SignInForm.vue", () => {
  it("shows error message when authentication fails", async () => {
    const wrapper = mount(SignInForm);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    await emailInput.setValue("mock@mail.com");
    await passwordInput.setValue("mockPassword");

    await wrapper.find("button").trigger("click");
    await flushPromises();

    expect(wrapper.find(".validation-error").text()).toBe(
      "Email or password is incorrect"
    );
  });
});
