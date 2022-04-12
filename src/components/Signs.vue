<template>
  <div class="sign-wrapper">
    <div class="choosed-sign">
      <div v-for="(sign, i) in signs" :key="i" @click="chooseSign(sign)" class="sign" :class="['sign-' + (i + 1), {'active': sign === choosedSign}]">
        <Icon :icon="sign" />
      </div>
      <Icon :icon="choosedSign" />
      <span v-if="animation" class="animation"></span>
    </div>
    <!-- <span class="line" :style="`transform: translateX(50%) rotate(${degree}deg)`"></span> -->
    <img class="circle-1" src="../assets/circle-1.svg" alt="">
    <img class="circle-2" src="../assets/circle-2.svg" alt="">
    <img class="circle-3" src="../assets/circle-3.svg" alt="">
  </div>
</template>

<script>
import Icon from '../components/Icon.vue'

export default {
  name: 'Signs',
  data() {
    return {
      signs: null,
      choosedSign: 'aquarius',
      animation: true
      // degree: -90
    }
  },
  components: {
    Icon
  },
  methods: {
    chooseSign(sign) {
      this.choosedSign = sign
    }
  },
  watch: {
    choosedSign() {
      this.animation = false
      setTimeout(() => {
        this.animation = true
      }, 10)
      let sign = this.choosedSign
      this.$store.dispatch('setSign', sign)
      // let i = this.signs.findIndex(sign => sign == this.choosedSign)
      // this.degree = -90 + (i * 30)
      // console.log(i);
      // console.log(this.degree);
    }
  },
  mounted() {
    this.signs = this.$store.state.signs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.sign-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 400px;
}

.circle-1 {
  position: absolute;
  pointer-events: none;
  top: -35px;
  left: -40px;
  animation: rotating 30s linear infinite;
}

.circle-2 {
  position: absolute;
  pointer-events: none;
  top: -45px;
  left: -50px;
  animation: rotating-reverse 60s linear infinite;
}

.circle-3 {
  position: absolute;
  pointer-events: none;
  top: -30px;
  left: -35px;
  animation: rotating-big 60s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotating-reverse {
  from {
    transform: rotate(0deg) scale(1.1);
  }
  to {
    transform: rotate(-360deg) scale(1.1);
  }
}

@keyframes rotating-big {
  from {
    transform: rotate(0deg) scale(1.1);
  }
  to {
    transform: rotate(-360deg) scale(1.1);
  }
}

.choosed-sign {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 9999px;
  background-color: #EF974D;
  z-index: 2;
  svg {
    position: relative;
    top: 3px;
    width: 46px;
    height: 46px;
    fill: #fff;
  }
}

.animation {
  position: absolute;
  width: 72px;
  height: 72px;
  background-color: #EF974D;
  border-radius: 9999px;
  z-index: -1;
  animation: load 1s ease;
  opacity: 1;
}

@keyframes load {
	0% {
    background: rgba(123, 91, 232, 0.35);
    transform: scale(1);
    // border: 0px solid rgba(123, 91, 232, 0.35);
	}
	100% {
    background: rgb(123, 91, 232);
    transform: scale(2);
    opacity: 0;
    // border: 70px solid rgba(123, 91, 232, 0.35);
	}
}

.line {
  width: 90px;
  height: 2px;
  background-color: #EF974D;
  position: absolute;
  transform-origin: 0% 0%;
  transition: 1s;
  z-index: 1;
  border-radius: 99px;
}

.sign {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  background-color: rgba(123, 91, 232, 0.25);
  border: 1px solid transparent;
  &.active {
    border: 0.06rem dashed #EF974D;
  }
  svg {
    position: relative;
    top: 3px;
    width: 36px;
    height: 36px;
    fill: #7B5BE8;
  }
}

.sign-1 {
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 70px);
}

.sign-2 {
  left: calc(50% + 63px);
  transform: translateX(-50%);
  bottom: calc(100% + 49px);
}

.sign-3 {
  left: calc(50% + 110px);
  transform: translateX(-50%);
  bottom: calc(100%);
}

.sign-4 {
  left: calc(50% + 130px);
  transform: translateX(-50%);
  bottom: 9px;
}

.sign-5 {
  right: calc(50% + 63px);
  transform: translateX(50%);
  bottom: calc(100% + 49px);
}

.sign-6 {
  right: calc(50% + 110px);
  transform: translateX(50%);
  bottom: calc(100%);
}

.sign-7 {
  right: calc(50% + 130px);
  transform: translateX(50%);
  bottom: 9px;
}

.sign-8 {
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 70px);
}

.sign-9 {
  left: calc(50% + 63px);
  transform: translateX(-50%);
  top: calc(100% + 49px);
}

.sign-10 {
  left: calc(50% + 110px);
  transform: translateX(-50%);
  top: calc(100%);
}

.sign-11 {
  right: calc(50% + 63px);
  transform: translateX(50%);
  top: calc(100% + 49px);
}

.sign-12 {
  right: calc(50% + 110px);
  transform: translateX(50%);
  top: calc(100%);
}
</style>
