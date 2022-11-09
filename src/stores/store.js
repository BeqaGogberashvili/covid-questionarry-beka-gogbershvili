import { defineStore } from "pinia";

export const keepData = defineStore({
  id: "store",
  state: () => ({
    data: {},
  }),
  getters: {
    getData() {
      return this.data;
    },
  },
  actions: {
    save(values) {
      Object.assign(this.data, values);
    },
  },
});
