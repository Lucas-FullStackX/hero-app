<template>
  <div class="hello">
    <div v-for="character in characters" :key="character.id" class="row">
      <div class="image">
        <img
          :src="`${character.thumbnail?.path}.${character.thumbnail.extension}`"
        />
      </div>
      <h3>{{ character.name }}</h3>
      <!-- <span>{{ character.name }}</span
      ><br />
      <span>{{ character.biography.publisher }}</span> -->
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
    console.log("com", characters);
    return { characters };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  margin: auto;
  justify-content: space-evenly;
}
.row {
  background-color: #0a0a0a;
  margin: 20px 0;
  width: 90%;
  position: relative;
}
.image {
  width: 100%;
  height: 60%;
  margin: auto;
}
.row:after {
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: #fff;
  border-style: solid;
  border-top-color: transparent;
  border-width: 12px 12px 0 0;
  bottom: 0;
  content: "";
  position: absolute;
  right: 0;
  top: auto;
  z-index: 40;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
