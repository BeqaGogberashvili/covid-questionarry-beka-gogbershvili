<template>
  <div class="mt-[43px]">
    <label :for="name" class="font-black">{{ label }}</label>
    <Field
      as="textarea"
      :name="name"
      :id="name"
      cols="30"
      rows="6"
      class="w-full h-[184px] resize-none mt-5 p-5 border border-[#232323]"
    />
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  props: ["name", "label"],
  components: {
    Field,
  },
};
</script>
