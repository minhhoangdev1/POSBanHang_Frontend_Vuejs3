<template>
    <footer class="footer footer-black  footer-white ">
        <div class="container-fluid">
          <div class="row">
          </div>
        </div>
      </footer>
</template>
<script>
    export default{
        data(){
            return {
                year:null
            }
        },
        created(){
            this.getYear();
        },
        methods:{
            getYear(){
                this.year =new Date().getFullYear()
            }
        }
    }
</script>