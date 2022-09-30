<template>
    <div class="sidebar" data-color="white" data-active-color="danger">
      <div class="logo">
        <a href="https://www.creative-tim.com" class="simple-text logo-mini">
          <div class="logo-image-small">
            <!-- <img src="../assets/img/logo-small.png"> -->
          </div>
        </a>
        <a href="https://www.creative-tim.com" class="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li>
            <router-link :to="{name:'pos'}" target="_blank">
              <i class="nc-icon nc-bank"></i>
              <p>Pos bán hàng</p>
            </router-link>
          </li>
          <li v-on:click="setActive('home')" :class="{ active: isActive('home') }"> 
            <router-link :to="{name:'home'}" >
              <i class="nc-icon nc-bank"></i>
              <p>Bảng điều khiển</p>
            </router-link>        
          </li>
          <li v-on:click="setActive('members')" :class="{ active: isActive('members') }">
            <router-link :to="{name:'members'}" >
              <i class="nc-icon nc-diamond"></i>
              <p>Quản lý nhân viên</p>
            </router-link> 
          </li>
          <li>
            <a href="./map.html">
              <i class="nc-icon nc-pin-3"></i>
              <p>Quản lý khách hàng</p>
            </a>
          </li>
          <li v-on:click="setActive('products')" :class="{ active: isActive('products') }">
            <router-link :to="{name:'products'}">
              <i class="nc-icon nc-bell-55"></i>
              <p>Quản lý sản phẩm</p>
            </router-link>
          </li>
          <li>
            <a href="./user.html">
              <i class="nc-icon nc-single-02"></i>
              <p>Quản lý đơn hàng</p>
            </a>
          </li>
          <li>
            <a href="./tables.html">
              <i class="nc-icon nc-tile-56"></i>
              <p>Quản lý nội bộ</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i class="nc-icon nc-caps-small"></i>
              <p>Bảng kê lương</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i class="nc-icon nc-caps-small"></i>
              <p>Báo cao danh thu</p>
            </a>
          </li>
          <li class="active-pro">
            <a href="./upgrade.html">
              <i class="nc-icon nc-spaceship"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import {useRoute} from 'vue-router';
  export default{
    data() {
      const route = useRoute();
      let routeName = route.name
      if(routeName=='addProduct' || routeName=='editProduct'){
        routeName='products'
      }
      if(routeName=='addMember' || routeName=='editMember'){
        routeName='members'
      }
      return { 
        activeItem:routeName,
      }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem 
      }
    }
  }
</script>