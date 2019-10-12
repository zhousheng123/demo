<template>
<div>

  1234435345
  <!--上海垃圾电影-->
  <!--<slot>-->
    <!--<p>我将作为默认出现</p>-->
  <!--</slot>-->
  <!--<el-button type="button" @click="handleClick">点击</el-button>-->
</div>
</template>

<script>
export default {
  name: 'c_login',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick () {
      this.counter++
      this.$emit('input', this.counter)
    }
  }
}
</script>

<style scoped>

</style>
