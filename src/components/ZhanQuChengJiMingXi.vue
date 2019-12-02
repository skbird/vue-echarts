<template>
  <div class="zqcjmx" style="width: 100%;height: 550px">
    <Border class="flex" style="width: 100%;height: 100%">
      <div class="flex" style="color: #fff;width: 100%;height: 100%;">
        <div class="table-title">战区成绩明细</div>
        <div style="height: 88.3%;padding: 10px">
          <el-table :data="tableData" :highlight-current-row="false"
                    row-style="height:38px"
                    show-summary border :row-class-name="tableRowClassName" class="el-table-class">
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
          return 'even-row';
        } else {
          return 'odd-row';
        }
        return '';
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
          zone: '二区',
          province: '北京',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '三区',
          province: '上海',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '四区',
          province: '重庆',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '五区',
          province: '四川',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '六区',
          province: '广东',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '七区',
          province: '河南',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '八区',
          province: '安徽',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '九区',
          province: '贵州',
          area: '鼓楼',
          store: '鼓楼苑店',
          score: '90.14'
        }, {
          date: '2019-09-13',
          zone: '十区',
          province: '陕西',
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
  .el-table-class{
    width: 95%;
    height: 96%;
    margin: 14px
  }
  .table-title{
    color: #E9E9EA;
    margin-left:20px;
    margin-top:10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: left
  }
</style>

<style>
.zqcjmx .el-table .even-row {
  background: #0B284C;
}
.zqcjmx .el-table .odd-row {
  background: #2D4665;
}
.zqcjmx .el-table th {
  background: #2398D7;
  color: #fff;
  text-align:center
}
.zqcjmx .el-table td {
  text-align:center;
  color: #8E97A0;
  width: auto;
  font-size:15px;
}
.zqcjmx .el-table td,.fxjc .el-table th{
  padding: 2.7px;
}
.zqcjmx .has-gutter tr td{
  background-color: #0B284C;
}
.zqcjmx .el-table th.gutter {
  display: table-cell !important
}
</style>
