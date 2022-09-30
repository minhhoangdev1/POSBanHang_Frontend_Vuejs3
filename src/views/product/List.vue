<template>
    <div class="row">
      <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <router-link :to="{name:'addProduct'}" class="btn btn-success">
                  <i class="nc-icon nc-simple-add"></i>
                  Tạo mới sản phẩm
                </router-link>
                <a href="" class="btn btn-primary">Tải file lên</a>
                <a href="" class="btn btn-info">In dữ liệu</a>  
                <a href="" class="btn btn-success">Sao chép</a>
                <a href="" class="btn btn-primary">Xuất Excel</a>
                <a href="" class="btn btn-primary">Xuất PDF</a>  
                <a href="" class="btn btn-danger">Xóa tất cả</a>  
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Tình trạng</th>
                      <th>Giá bán</th>
                      <th>Giá vốn</th>
                      <th>Danh mục</th>
                      <th>Nhà cung cấp</th>
                      <th class="text-right">Thao tác</th>
                    </thead>
                    <tbody>
                      <tr v-for="pro in products" :key="pro.id">
                        <td>{{pro.code}}</td>
                        <td>{{pro.name}}</td>
                        <td style="width: 6%"><img :src="urlApi+'uploads/product/'+pro.image" alt="" style="width: 75%;"></td>
                        <td>{{pro.quality}}</td>
                        <td v-if="pro.stock_status=='instock'" class="text-success">Còn hàng</td>
                        <td v-if="pro.stock_status=='outofstock'" class="text-danger">Hết hàng</td>
                        <td>{{pro.price}} vnđ</td>
                        <td>{{pro.cost_price}} vnđ</td>
                        <td>{{pro.category.name}}</td>
                        <td>{{pro.supplier.name}}</td>
                        <td class="text-right">
                            <router-link :to="{name:'editProduct',params:{code:pro.code}}" class="btn btn-info"><i class="nc-icon nc-ruler-pencil"></i></router-link>
                            <a href="" @click.prevent="deleteProduct(pro.code)" class="btn btn-danger"><i class="nc-icon nc-basket"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
        return {  
          urlApi:'http://127.0.0.1:8000/',
          products:[]
        }
        },
    created(){
        this.getDataProduct()
    },
    methods:{
      async getDataProduct(){
          await this.axios.get(this.urlApi+'api/v1/product')
              .then(res=>{
                  this.products=res.data.data
              })
              .catch(err=>{
                  console.error(err)
              })
      },
      async deleteProduct(code){
        this.$swal.fire({
          title: 'Xóa sản phẩm ?',
          showCancelButton: true,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed){
             this.axios.delete(this.urlApi+'api/v1/product/'+code)
              .then(res=>{
                  this.$swal.fire({
                      icon: 'success',
                      title: 'Thành công',
                      showConfirmButton: false,
                      timer: 1500
                  })
                  this.getDataProduct()
                })
                .catch(err=>{
                    console.error(err)
                })
          } 
        })
      }
    }
  }
</script>
