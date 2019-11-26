<template>
  <div>
    <el-table :data="tableData" :highlight-current-row="false"
              :header-cell-style="{background:'#2398D7',color:'#fff'}" border :row-class-name="tableRowClassName"
              :cell-style="{color:'#8E97A0'}" style="width: 47.5%;background: #0B284C">
      <el-table-column prop="product" label="商品" width="180"></el-table-column>
      <el-table-column prop="times" label="问題次數" width="180"></el-table-column>
      <el-table-column prop="category" label="问题大类" width="180"></el-table-column>
      <el-table-column prop="detail" label="具体问题" width="180"></el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout="total,jumper,prev,next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
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
            product: '411/上海青',
            times: '80',
            category: '商品质量',
            detail: '农残'
          }, {
            product: '411/上海青',
            times: '80',
            category: '商品质量',
            detail: '农残'
          }, {
            product: '411/上海青',
            times: '80',
            category: '商品质量',
            detail: '农残'
          }, {
            product: '411/上海青',
            times: '80',
            category: '商品质量',
            detail: '农残'
          }],
          currentPage1: 2,
          total: 100
        }
      }
    }
</script>

<style>
  .el-table .warning-row {
    background: #0B284C;
  }

  .el-table .success-row {
    background: #2D4665;
  }
</style>
