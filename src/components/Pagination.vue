<template>
  <div class="NextPage">
    <button v-if="page > 1" @click="nextPage((page -= 1))">take out 1</button>
    <button @click="nextPage((page += 1))">Add 1</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const page = computed(() => {
      return store.state.page;
    });
    const nextPage = (page) => {
      store.dispatch("getHeroes", page);
    };
    return { nextPage, page };
  },
};
</script>

<style></style>
