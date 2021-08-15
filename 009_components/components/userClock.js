Vue.component("user-clock", {
  props: ["format"],
  data() {
    return {
      message: "Hello, Vue!",
      now: new Date(),
    }
  },
  methods: {
    updateDate() {
      const date = this.format === 'short' ? new Date().toLocaleTimeString() : new Date();      
      this.now = date;
    }

  },
  mounted() {
    setInterval(() => {
      this.updateDate();
    }, 1000)
  },
  template: `<div class="clock">{{ now }}</div>`
})