<template>
  <div class="about">
    <div class="words">
      <div class="inner">
        <p @click="yesterday" :class="{ active: day === 'yestarday' }">
          Yestarday
        </p>
        <p @click="today" class="middle" :class="{ active: day === 'today' }">
          Today
        </p>
        <p @click="tomorrow" :class="{ active: day === 'tomorrow' }">
          Tomorrow
        </p>
      </div>
    </div>
    <div class="timeline">
      <div class="line">
        <div
          @click="yesterday"
          class="day yestarday"
          :class="{ active: day === 'yestarday' }"
        ></div>
        <div
          @click="today"
          class="day today"
          :class="{ active: day === 'today' }"
        ></div>
        <div
          @click="tomorrow"
          class="day tomorrow"
          :class="{ active: day === 'tomorrow' }"
        ></div>
      </div>
    </div>
    <div v-if="info" class="container">
      <div class="d-flex">
        <div class="info">
          <p class="label">Date range:</p>
          <p class="text">{{ info.date_range }}</p>
        </div>
        <div class="info">
          <p class="label">Color:</p>
          <p class="text">{{ info.color }}</p>
        </div>
        <div class="info">
          <p class="label">Lucky number:</p>
          <p class="text">{{ info.lucky_number }}</p>
        </div>
        <div class="info">
          <p class="label">Mood:</p>
          <p class="text">{{ info.mood }}</p>
        </div>
        <div class="info">
          <p class="label">Lucky time:</p>
          <p class="text">{{ info.lucky_time }}</p>
        </div>
        <div class="info">
          <p class="label">Compatibility:</p>
          <p class="text">{{ info.compatibility }}</p>
        </div>
      </div>
      <div class="info">
        <p class="label">Description:</p>
        <p class="text">{{ info.description }}</p>
      </div>
    </div>
    <button @click="$router.push('/')" class="btn">Choose another sign</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
      day: "today",
    };
  },
  methods: {
    yesterday() {
      this.day = "yestarday";
      this.info = this.predict[0].yestarday;
    },
    today() {
      this.day = "today";
      this.info = this.predict[0].today;
    },
    tomorrow() {
      this.day = "tomorrow";
      this.info = this.predict[0].tomorrow;
    },
  },
  computed: {
    predict() {
      return this.$store.state.info;
    },
  },
  mounted() {
    this.info = this.predict[0].today;
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 30px;
  height: 100%;
  background-color: #081023;
}

.container {
  padding: 15px;
  margin-top: 50px;
}

.timeline {
  display: flex;
  justify-content: center;
}

.line {
  display: flex;
  justify-content: space-around;
  width: 246px;
  height: 2px;
  background-color: #7b5be8;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.day {
  position: relative;
  top: 1px;
  width: 24px;
  height: 24px;
  background-color: #000;
  border: 2px solid #7b5be8;
  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #ef974d;
    top: 3px;
    left: 3px;
    opacity: 0.5;
  }
  transform: translateY(-50%) rotate(45deg);
  &.yestarday {
    width: 18px;
    height: 18px;
    &::after {
      width: 12px;
      height: 12px;
    }
  }
  &.tomorrow {
    width: 18px;
    height: 18px;
    &::after {
      width: 12px;
      height: 12px;
    }
  }
  &.active {
    &::after {
      opacity: 1;
    }
  }
}

.words {
  display: flex;
  justify-content: center;
  .inner {
    width: 246px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 26px;
    p {
      font-size: 12px;
      margin-bottom: 0;
      color: #fff;
      opacity: 0.7;
      &.active {
        transform: scale(1.2) translateY(-25%);
        opacity: 1;
      }
      &.middle {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
}

.info {
  text-align: left;
  margin-right: 42px;
  margin-bottom: 20px;
  .label {
    opacity: 0.6;
    font-size: 12px;
    margin: 0;
    color: #fff;
  }
  .text {
    color: #fff;
    margin: 0;
  }
}

.btn {
  margin-top: 80px;
  bottom: 0;
  width: calc(100% - 30px);
  height: 56px;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: rgba(123, 91, 232, 1);
  text-align: center;
  z-index: 1;
  background-color: rgba(123, 91, 232, 0.25);
  text-transform: uppercase;
}
</style>
