<template>
  <div class="menus">
    <el-button type="primary" size="mini" @click="toggleEdgeType('line')">直线</el-button>
    <el-button type="primary" size="mini" @click="toggleEdgeType('polyline')">折线</el-button>
    <el-button type="primary" size="mini" @click="toggleEdgeType('bezier')">曲线</el-button>
    <el-button type="primary" size="mini" @click="undo">撤回</el-button>
    <el-button type="primary" size="mini" @click="redo">取消撤回</el-button>
    <el-button type="primary" size="mini" @click="getSnapshot">导出为图片</el-button>
    <el-button type="primary" size="mini" @click="printData">打印当前画布数据并保存</el-button>
    <el-switch v-model="isSelect" active-text="框选"></el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: false
    };
  },
  watch: {
    isSelect(newVal) {
      if (newVal) {
        this.$parent.lf.openSelectionSelect(); // 开启框选
      } else {
        this.$parent.lf.closeSelectionSelect(); // 取消框选
      }
    }
  },
  created() {
    // 按M开启或关闭框选
    document.addEventListener('keydown', e => {
      if (e.key === 'm' || e.key === 'M') {
        this.isSelect = !this.isSelect;
      }
    });
  },
  methods: {
    toggleEdgeType(type) {
      this.$emit('toggleEdgeType', type); // 撤销
    },
    undo() {
      this.$emit('undo'); // 撤销
    },
    redo() {
      this.$emit('redo'); // 撤销
    },
    getSnapshot() {
      this.$emit('getSnapshot'); // 导出图片
    },
    printData() {
      this.$emit('printData'); // 导出图片
    }
  }
};
</script>
<style scoped lang="scss">
.menus {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
}
</style>
