<template>
  <div class="w-[80%] mx-auto mt-[89px]">
    <the-navigation>2</the-navigation>
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex-1">
          <h2 class="text-[22px] font-black">გაქვს გადატანილი Covid-19?*</h2>

          <div class="mt-[11px]">
            <Form @submit="onSubmit">
              <div @change="hideHadCovidError">
                <div class="flex">
                  <Field
                    name="had_covid"
                    id="had_covid_yes"
                    type="radio"
                    value="yes"
                    v-model="HadCovid"
                    class="radio"
                  />
                  <label for="had_covid_yes">კი</label>
                </div>

                <div class="flex">
                  <Field
                    name="had_covid"
                    id="had_covid_no"
                    type="radio"
                    value="no"
                    v-model="HadCovid"
                    class="radio"
                  />
                  <label for="had_covid_no">არა</label>
                </div>

                <div class="flex">
                  <Field
                    name="had_covid"
                    id="had_covid_now"
                    type="radio"
                    value="have_right_now"
                    v-model="HadCovid"
                    class="radio"
                  />
                  <label for="had_covid_now">ახლა მაქვს</label>
                </div>
              </div>
              <h5 class="text-red-500">{{ HadCovidError }}</h5>

              <div
                v-if="HadCovid === 'yes'"
                class="mt-[52px]"
                @change="hideHadTestError"
              >
                <h2 class="text-[22px] mb-1 font-black">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </h2>

                <div class="flex">
                  <Field
                    name="had_antibody_test"
                    id="had_antibody_test_yes"
                    type="radio"
                    :value="true"
                    v-model="HadTest"
                    class="radio"
                  />
                  <label for="had_antibody_test_yes">კი</label>
                </div>

                <div class="flex">
                  <Field
                    name="had_antibody_test"
                    id="had_antibody_test_no"
                    type="radio"
                    :value="false"
                    v-model="HadTest"
                    class="radio"
                  />
                  <label for="had_antibody_test_no">არა</label>
                </div>

                <h5 class="text-red-500">{{ HadTestError }}</h5>

                <div v-if="HadTest" class="mt-[52px]">
                  <h2 class="text-[22px] mb-1 font-black">
                    თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                    ანტისხეულების რაოდენობა*
                  </h2>

                  <Field
                    name="number"
                    type="number"
                    :value="savedData.number"
                    placeholder="რიცხვი"
                    class="mt-[29px] mb-[25px] p-5"
                  />
                  <Field
                    name="test_date"
                    type="number"
                    :value="savedData.test_date"
                    placeholder="ანტისხეულების რაოდენობა"
                    class="p-5"
                  />
                </div>
                <div v-else-if="HadTest === false">
                  <h2 class="text-[22px] mb-1 mt-[47px] p-5 font-black">
                    მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                    Covid-19*
                  </h2>
                  <Field
                    name="covid_sickness_date"
                    type="date"
                    :value="savedData.covid_sickness_date"
                    class="px-5"
                    rules="required"
                  />
                  <br />
                  <ErrorMessage name="covid_sickness_date" class="mt-1" />
                </div>
              </div>
              <button class="hidden" id="next"></button>
            </Form>
          </div>
        </div>
        <img src="src/assets/img/vaccinate2.png" alt="vaccinated" />
      </div>

      <div class="flex mt-5 w-full justify-center">
        <router-link to="/identify">
          <right-arrow class="rotate-180" />
        </router-link>
        <div class="w-[117px]"></div>

        <label for="next" class="cursor-pointer">
          <right-arrow />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import RightArrow from "@/assets/svg/right-arrow.vue";
import { keepData } from "@/stores/store.js";

export default {
  data() {
    return {
      HadCovid: "",
      HadTest: "",
      HadCovidError: "",
      HadTestError: "",
    };
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    RightArrow,
  },
  methods: {
    onSubmit(values) {
      if (!values.had_covid) {
        this.HadCovidError = "გთხოვთ აირჩიოთ";
      } else if (
        values.had_covid === "yes" &&
        values.had_antibody_test === ""
      ) {
        this.HadTestError = "გთხოვთ აირჩიოთ";
      } else {
        const date = values.covid_sickness_date;
        let modifiedDate = "";
        if (date) {
          modifiedDate =
            date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
        }
        const modifiedValues = {
          had_covid: values.had_covid,
          covid_sickness_date: modifiedDate,
          antibodies: {},
        };
        if (values.had_covid === "yes") {
          modifiedValues["had_antibody_test"] = values.had_antibody_test;
          modifiedValues["antibodies"] = {
            test_date: values.test_date,
            number: values.number,
          };
        }
        keepData().save(modifiedValues);
        this.$router.push("/vaccine");
      }
    },
    hideHadCovidError() {
      this.HadCovidError = "";
    },
    hideHadTestError() {
      this.HadTestError = "";
    },
  },
  computed: {
    savedData() {
      return keepData().getData;
    },
  },
  mounted() {
    const data = this.savedData;
    if (data.had_covid !== undefined) {
      this.HadCovid = data.had_covid;
    }
    if (data.had_antibody_test !== undefined) {
      this.HadTest = data.had_antibody_test;
    }
  },
};
</script>
