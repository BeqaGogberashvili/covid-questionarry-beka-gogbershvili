<template>
  <div class="w-[80%] mx-auto mt-[89px]">
    <the-navigation>1</the-navigation>
    <div class="flex flex-col items-center justify-center">
      <div class="flex">
        <div>
          <Form @submit="onSubmit">
            <div class="form-group">
              <label for="first_name" class="mb-1 text-[22px] font-helvetica"
                >სახელი*</label
              >
              <Field
                name="first_name"
                id="first_name"
                :value="savedData.first_name"
                type="text"
                rules="required|min:2"
                class="p-5"
              />
              <ErrorMessage name="first_name" />
            </div>

            <div class="form-group">
              <label for="last_name" class="mb-1 text-[22px] font-helvetica"
                >გვარი*</label
              >
              <Field
                name="last_name"
                id="last_name"
                :value="savedData.last_name"
                type="text"
                rules="required|min:2"
                class="p-5"
              />
              <ErrorMessage name="last_name" />
            </div>

            <div class="form-group">
              <label for="email" class="mb-1 text-[22px] font-helvetica"
                >მეილი*</label
              >
              <Field
                name="email"
                id="email"
                :value="savedData.email"
                type="email"
                rules="required|email"
                class="p-5"
              />
              <ErrorMessage name="email" />
            </div>

            <button class="hidden" id="next"></button>
          </Form>

          <div
            class="mt-[23px] mb-[42px] w-[237px] h-[0.8px] bg-black flex-2"
          ></div>
          <div class="text-base text-[#626262]">
            <h2>*-ით მონიშნული ველების შევსება</h2>
            <h2>სავალდებულოა</h2>
          </div>
        </div>

        <div class="ml-[138px]">
          <img src="src/assets/img/scan2.png" alt="scan" />
        </div>
      </div>

      <label for="next" class="mt-[110px] cursor-pointer">
        <right-arrow />
      </label>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RightArrow from "@/assets/svg/right-arrow.vue";
import { keepData } from "@/stores/store.js";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    RightArrow,
  },
  methods: {
    onSubmit(values) {
      keepData().save(values);
      this.$router.push("/questionnaire");
    },
  },
  computed: {
    savedData() {
      return keepData().getData;
    },
  },
};
</script>
