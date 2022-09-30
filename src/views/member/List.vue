<template>
    <div class="row">
      <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <router-link :to="{name:'addMember'}" class="btn btn-success">
                  <i class="nc-icon nc-simple-add"></i>
                  Tạo mới nhân viên
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
                      <th>Mã nhân viên</th>
                      <th>Họ và tên</th>
                      <th>Ảnh thẻ</th>
                      <th>Địa chỉ</th>
                      <th>Ngày sinh</th>
                      <th>Giới tính</th>
                      <th>SĐT</th>
                      <th>Chức vụ</th>
                      <th class="text-right">Thao tác</th>
                    </thead>
                    <tbody>
                      <tr v-for="mem in members" :key="mem.id">
                        <td>{{mem.code}}</td>
                        <td>{{mem.name}}</td>
                        <td style="width: 6%"><img :src="urlApi+'uploads/member/'+mem.image" alt="" style="width: 75%;"></td>
                        <td>{{mem.address}}</td>
                        <td>{{mem.date_of_birth}}</td>
                        <td v-if="mem.sex=='male'">Nam</td>
                        <td v-if="mem.sex=='female'">Nữ</td>
                        <td v-if="mem.sex=='other'">Khác</td>
                        <td>{{mem.phone}}</td>
                        <td>{{mem.position.name}}</td>
                        <td class="text-right">
                            <router-link :to="{name:'editMember',params:{code:mem.code}}" class="btn btn-info"><i class="nc-icon nc-ruler-pencil"></i></router-link>
                            <a href="" @click.prevent="deleteMember(mem.code)" class="btn btn-danger"><i class="nc-icon nc-basket"></i></a>
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
          members:[]
        }
        },
    created(){
        this.getDataMember()
    },
    methods:{
      async getDataMember(){
          await this.axios.get(this.urlApi+'api/v1/member')
              .then(res=>{
                  this.members=res.data.data
                  console.log(res.data.data)
              })
              .catch(err=>{
                  console.error(err)
              })
      },
      async deleteMember(code){
        this.$swal.fire({
          title: 'Xóa nhân viên ?',
          showCancelButton: true,
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed){
             this.axios.delete(this.urlApi+'api/v1/member/'+code)
              .then(res=>{
                  this.$swal.fire({
                      icon: 'success',
                      title: 'Thành công',
                      showConfirmButton: false,
                      timer: 1500
                  })
                  this.getDataMember()
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
