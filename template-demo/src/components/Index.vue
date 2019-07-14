<template>
  <div class="container">
    <div class="index v-tag">
      <!-- <Menu mode="horizontal">
        <router-link to="/index/chart" class="navbar-brand">
            <MenuItem name="1" class="ivu-col-span-12 text-center">
                <Icon type="stats-bars"></Icon>统计
            </MenuItem>
        </router-link> 
        <router-link to="/index/detail" class="navbar-brand">
            <MenuItem name="2" class="ivu-col-span-12 text-center">
                <Icon type="settings"></Icon>详细
            </MenuItem>
        </router-link> 
      </Menu> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  // props: {
  //   className: {
  //     type: String,
  //     default: 'chart'
  //   }
  // },
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>
