<template>
  <div>
    <el-button @click="visible = true">
      Button
    </el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <i class="el-icon-share" />
    <el-alert
      title="成功提示的文案"
      type="success"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
