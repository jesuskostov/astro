<template>
  <div class="home">
    <Signs />
    <button @click="start" class="btn">
      <img v-if="loading" src="../assets/Rolling-1s-200px (1).gif" alt="">
      <span v-else>Show the prediction</span>
    </button>
  </div>
</template>

<script>
import Signs from '../components/Signs.vue'

export default {
  name: 'Home',
  data() {
    return {
      loading: false
    }
  },
  components: {
    Signs
  },
  computed: {
    sign() {
      return this.$store.state.sign
    }
  },
  methods: {
    async start() {
      this.loading = true
      let sign = this.sign
      await this.$store.dispatch('prediction', sign)
      this.loading = false
      this.$router.push('/about')
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 62px;
  height: 100%;
  background-color: #081023;
  overflow: hidden;
}

.btn {
  margin-top: 80px;
  bottom: 0;
  width: 80%;
  height: 56px;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  z-index: 1;
  background-color: #EF974D;
  img { 
    width: 30px;
    height: 30px;
  }
}
</style>
