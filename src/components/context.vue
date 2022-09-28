<template>
  <div class="text">
    <el-row>
      <el-col class="col-header" :span="12">
        <p>125811</p>
      </el-col>
      <el-col class="col-header" :span="12">
        <p>100000</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="col-bottom" :span="12">
        <p>前端需求人数</p>
      </el-col>
      <el-col class="col-bottom" :span="12">
        <p>市场供应人数</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "context",
};
</script>

<style scoped>
.text {
  height: 150px;
  width: 100%;
  margin-bottom: 50px;
}
.col-header {
  height: 100px;
}
.col-header > p {
  color: red;
  font-size: 34px;
  text-align: center;
}
.col-bottom {
  height: 50px;
  text-align: center;
}
</style>