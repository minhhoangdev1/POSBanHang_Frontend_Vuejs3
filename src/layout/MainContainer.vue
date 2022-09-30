<template>
    <div class="wrapper">
       <Sidebar/>
       <div class="main-panel">
            <Navbar></Navbar>
            <div class="content">
                <router-view/>
            </div>
            <Footer></Footer>
       </div>
    </div>
</template>

<script>
    import {useRoute} from 'vue-router';
    import '../assets/css/bootstrap.min.css'
    import '../assets/css/paper-dashboard.css?v=2.0.1'
    import '../assets/demo/demo.css'
    import Sidebar from "../layout/components/Sidebar.vue";
    import Navbar from "../layout/components/Navbar.vue";
    import Footer from "../layout/components/Footer.vue";
    export default {
        name: "MainContainer",
        components: {
            Sidebar,
            Navbar, 
            Footer
        },
    };
</script>