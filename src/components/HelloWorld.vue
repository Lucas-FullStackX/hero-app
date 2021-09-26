<template>
  <div class="hello">
    <div v-for="character in characters" :key="character.id" class="row">
      <img :src="character.image.url" />
      <h3>{{ character.name }}</h3>
      <span>{{ character.biography["full-name"] }}</span
      ><br />
      <span>{{ character.biography.publisher }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.heroes;
    });
    onMounted(() => {
      store.dispatch("getHeroes", 1);
    });

    return { characters };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  margin: auto;
  justify-content: space-evenly;
}
img {
  width: 100%;
}
</style>
