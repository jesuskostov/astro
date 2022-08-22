<template>
  <div class="home">
    <Signs />
    <button @click="start" class="btn">
      <img v-if="loading" src="../assets/Rolling-1s-200px (1).gif" alt="" />
      <span v-else>Show the prediction</span>
    </button>

    <p class="sign-name" :class="{ 'opacity-1': loading }">{{ sign }}</p>
    <!-- <button @click="$router.push('/natal')" class="btn mt-custom">
      See natal chart
    </button> -->
  </div>
</template>

<script>
import Signs from "../components/Signs.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Signs,
  },
  computed: {
    sign() {
      return this.$store.state.sign;
    },
  },
  methods: {
    async start() {
      this.loading = true;
      let sign = this.sign;
      await this.$store.dispatch("prediction", sign);
      this.loading = false;
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.sign-name {
  position: fixed;
  width: 100%;
  margin: 0;
  bottom: 40px;
  color: #fff;
  font-size: 42px;
  opacity: 0.2;
  font-weight: bold;
  font-style: italic;
  text-transform: capitalize;
  transition: 0.8s;
}

.opacity-1 {
  opacity: 1;
  color: #ef974d;
  transition: 0.8s;
}

.home {
  height: 100vh;
  background-color: #081023;
  overflow: hidden;
}

.btn {
  margin-top: 60px;
  width: calc(100% - 30px);
  bottom: 0;
  height: 56px;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: rgba(123, 91, 232, 1);
  text-align: center;
  z-index: 1;
  background-color: rgba(123, 91, 232, 0.25);
  text-transform: uppercase;
  img {
    width: 30px;
    height: 30px;
  }
  &.mt-custom {
    margin-top: 20px;
  }
}
</style>
