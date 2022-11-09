<template>
  <div class="w-[80%] mx-auto mt-[89px]">
    <the-navigation>4</the-navigation>
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex-1">
          <Form @submit="onSubmit">
            <div class="w-[622px] text-[22px]">
              <p>
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი — ჩვენთან გადმოსვლის. <br /><br />პანდემიის
                პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
                კომუნიკაციაც გაიშვიათდა.
              </p>
              <h2 class="mt-[44px] font-black">
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </h2>
              <div
                class="text-xl mt-[17px] ml-[19px]"
                @change="hideNonFormalMeetingsErrors"
              >
                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="non_formal_meetings"
                    v-model="NonFormalMeetings"
                    value="twice_a_week"
                    id="twice_a_week"
                  />
                  <label for="twice_a_week">კვირაში ორჯერ</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="non_formal_meetings"
                    v-model="NonFormalMeetings"
                    value="once_a_week"
                    id="once_a_week"
                  />
                  <label for="once_a_week">კვირაში ერთხელ</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="non_formal_meetings"
                    v-model="NonFormalMeetings"
                    value="once_in_a_two_weeks"
                    id="once_in_a_two_weeks"
                  />
                  <label for="once_in_a_two_weeks">ორ კვირაში ერთხელ</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="non_formal_meetings"
                    v-model="NonFormalMeetings"
                    value="once_in_a_month"
                    id="once_in_a_month"
                  />
                  <label for="once_in_a_month">თვეში ერთხელ</label>
                </div>

                <h5 class="text-red-500 text-lg">
                  {{ NonFormalMeetingsError }}
                </h5>
              </div>

              <h2 class="mt-[43px] font-black">
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </h2>
              <div
                class="text-xl mt-[17px] ml-[19px]"
                @change="hideNumberOfDaysFromOfficeErrors"
              >
                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="0"
                    :value="0"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="0">0</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="1"
                    value="1"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="1">1</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="2"
                    :value="2"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="2">2</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="3"
                    :value="3"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="3">3</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="4"
                    :value="4"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="4">4</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    class="radio"
                    name="number_of_days_from_office"
                    id="5"
                    :value="5"
                    v-model="NumberOfDaysFromOffice"
                  />
                  <label for="5">5</label>
                </div>

                <h5 class="text-red-500 text-lg">
                  {{ NumberOfDaysFromOfficeError }}
                </h5>
              </div>

              <textarea-input
                name="what_about_meetings_in_live"
                label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
              ></textarea-input>

              <textarea-input
                name="tell_us_your_opinion_about_us"
                label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?"
              ></textarea-input>

              <div class="flex mt-[47px]">
                <button
                  class="ml-auto bg-[#208298] max-h-[58px] px-[29px] py-[17px] rounded-[42px] font-tbc font-thin text-white"
                >
                  დასრულება
                </button>
              </div>
            </div>
          </Form>
        </div>
        <img src="src/assets/img/bike2.png" alt="bike" class="max-h-[703px]" />
      </div>

      <div class="flex my-[60px] w-full justify-center">
        <router-link to="/vaccine">
          <right-arrow class="rotate-180" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import RightArrow from "@/assets/svg/right-arrow.vue";
import { keepData } from "@/stores/store.js";

export default {
  data() {
    return {
      NonFormalMeetings: "",
      NumberOfDaysFromOffice: "",
      NonFormalMeetingsError: "",
      NumberOfDaysFromOfficeError: "",
    };
  },
  components: {
    Form,
    Field,
    RightArrow,
  },
  methods: {
    onSubmit(values) {
      if (!values.non_formal_meetings) {
        this.NonFormalMeetingsError = "გთხოვთ აირჩიოთ";
      }
      if (!values.number_of_days_from_office) {
        this.NumberOfDaysFromOfficeError = "გთხოვთ აირჩიოთ";
      }
      if (values.non_formal_meetings && values.number_of_days_from_office) {
        keepData().save(values);
        this.$router.push("/thanks");
      }
    },
    hideNonFormalMeetingsErrors() {
      this.NonFormalMeetingsError = "";
    },
    hideNumberOfDaysFromOfficeErrors() {
      this.NumberOfDaysFromOfficeError = "";
    },
  },
  computed: {
    savedData() {
      return keepData().getData;
    },
  },
  mounted() {
    const data = this.savedData;
    if (data.non_formal_meetings !== undefined) {
      this.NonFormalMeetings = data.non_formal_meetings;
    }
    if (data.number_of_days_from_office !== undefined) {
      this.NumberOfDaysFromOffice = data.number_of_days_from_office;
    }
  },
};
</script>
