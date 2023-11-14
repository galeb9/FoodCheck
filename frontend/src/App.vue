<template>
  <div>
    <div class="nav-container">
      <NavDesktop />
    </div>

    <!-- <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade-in" mode="out-in">
        <component class="active-component" :is="Component" />
      </transition>
    </router-view> -->

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavDesktop from "./components/navigation/NavDesktop.vue";

export default {
  name: "App",
  components: {
    NavDesktop,
  },
  data() {
    return {
      isVisible: false,
      newAddedItem: null,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// css variables
:root {
  --item-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
}

body {
  background-color: $bg;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Noto Sans", sans-serif;

  min-height: 100vh;
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .nav-container {
    box-shadow: var(--item-shadow);
    border-bottom: 2px solid $secondary;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
  }
}
</style>
