<template>
  <div class="w-[80%] mx-auto mt-[89px]">
    <the-navigation>3</the-navigation>
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex-1">
          <h2 class="text-[22px] font-black">უკვე აცრილი ხარ?*</h2>
          <div class="mt-[11px]">
            <Form @submit="onSubmit">
              <div @change="hideVaccinatedError">
                <div class="flex">
                  <Field
                    type="radio"
                    name="had_vaccine"
                    id="had_vaccine_yes"
                    :value="true"
                    v-model="HadVaccine"
                    class="radio"
                  />
                  <label for="had_vaccine_yes">კი</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    name="had_vaccine"
                    id="had_vaccine_no"
                    :value="false"
                    v-model="HadVaccine"
                    class="radio"
                  />
                  <label for="had_vaccine_no">არა</label>
                </div>

                <h5 class="text-red-500">{{ VaccinatedError }}</h5>
              </div>

              <div v-if="HadVaccine" class="mt-[52px]" @change="hideErrors">
                <h2 class="text-[22px] mb-1 font-black">
                  აირჩიე რა ეტაპზე ხარ*
                </h2>

                <div class="flex">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    id="first_dosage_and_registered_on_the_second"
                    v-model="VaccinationStage"
                    value="first_dosage_and_registered_on_the_second"
                    class="radio"
                  />
                  <label for="first_dosage_and_registered_on_the_second"
                    >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
                  >
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    id="fully_vaccinated"
                    v-model="VaccinationStage"
                    value="fully_vaccinated"
                    class="radio"
                  />
                  <label for="fully_vaccinated">სრულად აცრილი ვარ</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    name="vaccination_stage"
                    id="first_dosage_and_not_registered_yet"
                    v-model="VaccinationStage"
                    value="first_dosage_and_not_registered_yet"
                    class="radio"
                  />
                  <label for="first_dosage_and_not_registered_yet"
                    >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
                  >
                </div>

                <h5 class="mt-2 text-red-500">{{ VaccinationStageError }}</h5>

                <div
                  v-if="
                    VaccinationStage === 'first_dosage_and_not_registered_yet'
                  "
                  class="ml-[61px] mt-[39px] text-[20px]"
                >
                  <h2>რომ არ გადადო,</h2>
                  <h2>ბარემ ახლავე დარეგისტრირდი</h2>
                  <a
                    target="_blank"
                    href="https://booking.moh.gov.ge/"
                    class="text-[#1289AE]"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
              </div>

              <div
                v-if="HadVaccine === false"
                class="mt-[52px]"
                @change="hideErrors"
              >
                <h2 class="text-[22px] mb-1 font-black">რას ელოდები?*</h2>

                <div class="flex">
                  <Field
                    type="radio"
                    name="i_am_waiting"
                    id="registered_and_waiting"
                    v-model="IAmWaiting"
                    value="registered_and_waiting"
                    class="radio"
                  />
                  <label for="registered_and_waiting"
                    >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
                  >
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    name="i_am_waiting"
                    id="not_planning"
                    v-model="IAmWaiting"
                    value="not_planning"
                    class="radio"
                  />
                  <label for="not_planning">არ ვგეგმავ</label>
                </div>

                <div class="flex">
                  <Field
                    type="radio"
                    name="i_am_waiting"
                    id="had_covid_and_planning_to_be_vaccinated"
                    v-model="IAmWaiting"
                    value="had_covid_and_planning_to_be_vaccinated"
                    class="radio"
                  />
                  <label for="had_covid_and_planning_to_be_vaccinated"
                    >გადატანილი მაქვს და ვგეგმავ აცრას</label
                  >
                </div>

                <h5 class="mt-2 text-red-500">{{ IAmWaitingError }}</h5>

                <div
                  v-if="IAmWaiting === 'not_planning'"
                  class="ml-[61px] mt-[39px] text-[20px]"
                >
                  <a
                    target="_blank"
                    href="https://booking.moh.gov.ge/"
                    class="text-[#1289AE]"
                    >👉 https://booking.moh.gov.ge/</a
                  >
                </div>

                <div
                  v-if="
                    IAmWaiting === 'had_covid_and_planning_to_be_vaccinated'
                  "
                  class="ml-[61px] mt-[39px] text-[20px]"
                >
                  <h2>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ</h2>
                  <h2>შეგიძლიათ ვაქცინის გაკეთება.</h2>
                  <div class="flex flex-col mt-5">
                    👉 რეგისტრაციის ბმული
                    <a
                      target="_blank"
                      href="https://booking.moh.gov.ge/"
                      class="text-[#1289AE]"
                      >https://booking.moh.gov.ge/</a
                    >
                  </div>
                </div>
              </div>
              <button class="hidden" id="next"></button>
            </Form>
          </div>
        </div>
        <img src="src/assets/img/doctor2.png" alt="vaccinated" />
      </div>

      <div class="flex mt-[30px] w-full justify-center">
        <router-link to="/questionnaire">
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
import { Form, Field } from "vee-validate";
import RightArrow from "@/assets/svg/right-arrow.vue";
import { keepData } from "@/stores/store.js";

export default {
  components: {
    Form,
    Field,
    RightArrow,
  },
  data() {
    return {
      HadVaccine: "",
      VaccinationStage: "",
      IAmWaiting: "",
      VaccinatedError: "",
      VaccinationStageError: "",
      IAmWaitingError: "",
    };
  },
  methods: {
    onSubmit(values) {
      if (!values.had_vaccine && values.had_vaccine !== false) {
        this.VaccinatedError = "გთხოვთ აირჩიოთ";
      } else if (values.had_vaccine) {
        if (!values.vaccination_stage) {
          this.VaccinationStageError = "გთხოვთ აირჩიოთ";
        } else {
          keepData().save(values);
          this.$router.push("/advices");
        }
      } else if (values.had_vaccine === false) {
        if (!values.i_am_waiting) {
          this.IAmWaitingError = "გთხოვთ აირჩიოთ";
        } else {
          keepData().save(values);
          this.$router.push("/advices");
        }
      }
    },
    hideVaccinatedError() {
      this.VaccinatedError = "";
    },
    hideErrors() {
      this.VaccinationStageError = "";
      this.IAmWaitingError = "";
    },
  },
  computed: {
    savedData() {
      return keepData().getData;
    },
  },
  mounted() {
    const data = this.savedData;
    if (data.had_vaccine !== undefined) {
      this.HadVaccine = data.had_vaccine;
    }
    if (data.vaccination_stage !== undefined) {
      this.VaccinationStage = data.vaccination_stage;
    }
    if (data.i_am_waiting !== undefined) {
      this.IAmWaiting = data.i_am_waiting;
    }
  },
};
</script>
