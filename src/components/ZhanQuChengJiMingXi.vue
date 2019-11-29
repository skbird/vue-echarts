<template>
  <div class="zqcjmx" style="width: 100%;height: 550px">
    <Border class="flex" style="width: 100%;height: 100%">
      <div class="flex" style="color: #fff;width: 100%;height: 100%;">
        <div style="font-size: 16px;font-weight: bold;text-align: left;height: 10%;margin-left: 20px;margin-top: 10px">战区成绩明细</div>
        <div style="height: 90%;padding: 10px">
          <el-table :data="tableData" :highlight-current-row="false"
                    :header-cell-style="{background:'#2398D7',color:'#fff'}" show-summary border :row-class-name="tableRowClassName"
                    :cell-style="{color:'#8E97A0'}">
            <el-table-column prop="date" label="时间"></el-table-column>
            <el-table-column prop="zone" label="战区"></el-table-column>
            <el-table-column prop="province" label="省区"></el-table-column>
            <el-table-column prop="area" label="区域"></el-table-column>
            <el-table-column prop="store" label="门店"></el-table-column>
            <el-table-column prop="score" label="成绩"></el-table-column>
          </el-table>
        </div>
      </div>
    </Border>
  </div>
</template>

<script>
  import Border from '@/components/Border'

  export default {
    components: {
      Border
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2==0) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
        return '';
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '一区',
          province: '福建',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }]
      }
    }
  }
</script>

<style scoped>
  .flex{
    display: flex;
    flex-direction: column;
  }
</style>

<style>
.zqcjmx .el-table .warning-row {
  background: #0B284C;
}
.zqcjmx .el-table .success-row {
  background: #2D4665;
}
</style>
