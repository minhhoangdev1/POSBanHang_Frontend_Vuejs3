<template>
    <nav class="navbar">
        <a class="navbar-brand" href="#">
            <img src="https://getbootstrap.com//docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
        </a>
    </nav>
    <main class="main-pos">
        <div class="row">
            <div class="col-md-12">
                <div class="main-title">
                    <p>Pos bán hàng</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="title">
                    <h3 class="title-title">Phần mềm bán hàng</h3>
                    <input type="text" id="search" placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..." @keyup.enter ="searchProduct()" @keyup="keyupSearch()">
                    <i class="fa fa-search" id="icon-search" @click="removeValueSearch()"></i>
                    <div id="list-search" style="display: none;">
                        <ul style="list-style: none;">
                            <li v-for="pro in productsSearch" style="display:flex;padding:10px;border-bottom: 1px solid;margin-right: 43px">
                                <img :src="urlApi+'uploads/product/'+pro.image" alt="" width="65" height="70">
                                <div style="margin-left: 24px;">
                                    <p>Mã: {{pro.code}}</p>
                                    <p>Tên: {{pro.name}}</p>
                                </div>
                                <div style="position: absolute;right: 54px;">
                                    <input type="number" class="form-control form-control-sm" value="1" style="width: 66px;"/>
                                     <a class="icon-cart"><i class="fa-solid fa-cart-plus"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style="margin-top: 20px;">
                        <table class="table table-hover table-bordered">
                            <thead style="text-align: center;">
                                <tr>
                                    <th class="so--luong">Mã hàng</th>
                                    <th class="so--luong">Tên sản phẩm</th>
                                    <th class="so--luong">Ảnh</th>
                                    <th class="so--luong" width="10">Số lượng</th>
                                    <th class="so--luong">Giá bán</th>
                                    <th class="so--luong text-center" style="text-align: center; vertical-align: middle;"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>71309005</td>
                                    <td>Bàn ăn gỗ Theresa</td>
                                    <td><img src="" alt="" width="50px;"></td>
                                    <td><input class="so--luong1" type="number" value="2"></td>
                                    <td >5.600.000 </td>

                                    <td style="text-align: center; vertical-align: middle;">
                                    <button class="btn btn-danger btn-sm trash" type="button" title="Xóa"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="alert">
                        <i class="fas fa-exclamation-triangle"></i> Gõ mã hoặc tên sản phẩm vào thanh tìm kiếm để thêm hàng vào đơn hàng
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="title">
                <h3 class="title-title">Thông tin thanh toán</h3>
                <div class="row">
                    <div class="form-group  col-md-10">
                        <label class="control-label">Họ tên khách hàng</label>
                        <input class="form-control" type="text" placeholder="Tìm kiếm khách hàng">
                    </div>
                    <div class="form-group  col-md-2" style="margin-top:31px">
                        <button class="btn btn-primary btn-them" data-toggle="modal" data-target="#addCustomer"><i class="fas fa-user-plus"></i></button>
                    </div>
                    <div class="form-group  col-md-12">
                        <label class="control-label">Nhân viên bán hàng</label>
                        <Select2 
                            v-model="myValue" 
                            :options="members" 
                        />
                        <select class="form-control" id="selectMember">
                            <option disabled selected>--- Chọn nhân viên bán hàng ---</option>
                            <option v-for="mem in members" :value="mem.id">{{mem.code}}-{{mem.name}}</option>
                        </select>
                    </div>
                    <div class="form-group  col-md-12">
                    <label class="control-label">Ghi chú đơn hàng</label>
                    <textarea class="form-control" rows="4" placeholder="Ghi chú thêm đơn hàng"></textarea>
                    </div>
        
                </div>
                <div class="row">
                    <div class="form-group  col-md-12">
                        <label class="control-label">Hình thức thanh toán</label>
                        <select class="form-control" id="exampleSelect2" required>
                            <option>Thanh toán chuyển khoản</option>
                            <option>Trả tiền mặt tại quầy</option>
                        </select>
                    </div>
                    <div class="form-group  col-md-6">
                        <label class="control-label">Tạm tính tiền hàng: </label>
                        <p class="control-all-money-tamtinh">= 129.397.213 VNĐ</p>
                    </div>
                    <div class="form-group  col-md-6">
                        <label class="control-label">Giảm giá (F7): </label>
                        <input class="form-control" type="number" value="0">
                    </div>
                    <div class="form-group  col-md-6">
                        <label class="control-label">Tổng cộng thanh toán: </label>
                        <p class="control-all-money-total">= 129.397.213 VNĐ</p>
                    </div>
                    <div class="form-group  col-md-6">
                        <label class="control-label">Khách hàng đưa tiền (F8): </label>
                        <input class="form-control" type="number" value="290000">
                    </div>
                    <div class="form-group  col-md-12">
                        <label class="control-label">Khách hàng còn nợ: </label>
                        <p class="control-all-money"> - 129.397.213 VNĐ</p>
                    </div>
                    <div class="tile-footer col-md-12">
                        <button class="btn btn-success" style="width: 100%; margin-bottom:10px" type="button"> Lưu đơn hàng (F9)</button>
                        <button class="btn btn-primary" type="button" style="width: 49%">Lưu và in hóa đơn (F10)</button>
                        <a class="btn btn-secondary" href="index.html" style="width: 49%;margin-left: 7px">Quay về</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </main>
     <!-- Modal thêm khách hàng -->
     <div class="modal fade" id="addCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới khách hàng</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name-customer" class="col-form-label">Họ và tên(*)</label>
                        <input type="text" class="form-control" id="name-customer" 
                            v-model="customer.name"  
                            @blur="validateCustomer()" 
                            v-bind:class="{'is-invalid':errorCustomer.name}"
                        >
                        <div class="invalid-feedback" v-if="errorCustomer.name">{{errorCustomer.name}}</div>
                    </div>
                    <div class="form-group">
                        <label for="email-customer" class="col-form-label">Email</label>
                        <input type="text" class="form-control" id="email-customer" 
                            v-model="customer.email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="address-customer" class="col-form-label">Địa chỉ(*)</label>
                        <input type="text" class="form-control" id="address-customer"  
                            v-model="customer.address"
                            @blur="validateCustomer()"
                            v-bind:class="{'is-invalid':errorCustomer.address}"
                        >
                         <div class="invalid-feedback" v-if="errorCustomer.address">{{errorCustomer.address}}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone-customer" class="col-form-label">SĐT(*)</label>
                        <input type="text" class="form-control" id="phone-customer"  
                            v-model="customer.phone"
                            @blur="validateCustomer()"
                            v-bind:class="{'is-invalid':errorCustomer.phone}"
                        >
                         <div class="invalid-feedback" v-if="errorCustomer.phone">{{errorCustomer.phone}}</div>
                    </div>
                    <div class="form-group">
                        <label for="dateofbirth-customer" class="col-form-label">Ngày sinh(*)</label>
                        <input type="date" class="form-control" id="dateofbirth-customer"  
                            v-model="customer.date_of_birth"
                            @blur="validateCustomer()"
                            v-bind:class="{'is-invalid':errorCustomer.date_of_birth}"
                        >
                         <div class="invalid-feedback" v-if="errorCustomer.date_of_birth">{{errorCustomer.date_of_birth}}</div>
                    </div><div class="form-group">
                        <label for="sex-customer" class="col-form-label">Giới tính(*)</label>
                        <select name="" id="sex-customer" class="form-control"  
                            v-model="customer.sex"
                            @blur="validateCustomer()"
                            v-bind:class="{'is-invalid':errorCustomer.sex}"
                        >
                            <option value="" disabled selected>--Chọn giới tính--</option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                         <div class="invalid-feedback" v-if="errorCustomer.sex">{{errorCustomer.sex}}</div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" @click="saveCustomer()">Lưu lại</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Select2 from 'vue3-select2-component';
    export default{
        components: {Select2},
        data() {
            return {
                myValue: "",
                productsSearch:[],
                customers: [],
                members:[],
                customer: {
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                    date_of_birth: "",
                    sex: ""
                },
                errorCustomer: {
                    name: "",
                    address: "",
                    phone: "",
                    date_of_birth: "",
                    sex: ""
                },
                urlApi: "http://127.0.0.1:8000/"
            };
        },
        created() {
            this.getDataMember();
        },
        methods: {
            validateCustomer() {
                let isValid = true;
                this.errorCustomer.name = "";
                this.errorCustomer.address = "";
                this.errorCustomer.phone = "";
                this.errorCustomer.date_of_birth = "";
                this.errorCustomer.sex = "";
                if (!this.customer.name) {
                    this.errorCustomer.name = "Tên không được trống !";
                    isValid = false;
                }
                if (!this.customer.address) {
                    this.errorCustomer.address = "Địa chỉ không được trống !";
                    isValid = false;
                }
                if (!this.customer.phone) {
                    this.errorCustomer.phone = "SĐT không được trống !";
                    isValid = false;
                }
                else if (!this.isNumber(this.customer.phone)) {
                    this.errorCustomer.phone = "SĐT phải là số !";
                    isValid = false;
                }
                if (!this.customer.date_of_birth) {
                    this.errorCustomer.date_of_birth = "Chưa chọn ngày sinh !";
                    isValid = false;
                }
                if (!this.customer.sex) {
                    this.errorCustomer.sex = "Chưa chọn giới tính !";
                    isValid = false;
                }
                return isValid;
            },
            isNumber(value) {
                return /^\d*$/.test(value);
            },
            async getDataMember() {
                await this.axios.get(this.urlApi + "api/v1/memberSelect2")
                    .then(res => {
                        this.members = res.data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
            },
            async getDataCustomer() {
                await this.axios.get(this.urlApi + "api/v1/customer")
                    .then(res => {
                    this.customers = res.data;
                })
                    .catch(err => {
                    console.error(err);
                });
            },
            async saveCustomer() {
                if (this.validateCustomer()) {
                    await this.axios.post(this.urlApi + "api/v1/customer", this.customer)
                        .then(res => {
                        this.$swal.fire({
                            icon: "success",
                            title: "Thành công",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.customer.name = "";
                        this.customer.email = "";
                        this.customer.address = "";
                        this.customer.phone = "";
                        this.customer.date_of_birth = "";
                        this.customer.sex = "";
                    })
                        .catch(err => {
                        console.log(err);
                    });
                }
            },
            async searchProduct(){
                this.productsSearch=[]
                let value=document.getElementById('search').value
                if(value!=''){
                    document.getElementById('list-search').style.display='inherit'
                    await this.axios.get(this.urlApi + "api/v1/searchProduct?"+'value='+value)
                    .then(res => {
                        this.productsSearch = res.data.data;
                    })
                    .catch(err => {
                        console.error(err);
                    });
                }
               
            },
            keyupSearch(){
                let value=document.getElementById('search').value
                let list_search=document.getElementById('list-search')
                let icon=document.getElementById('icon-search')
                if(value==''){
                    icon.classList.remove('fa-close')
                    icon.classList.add('fa-search')
                    list_search.style.display="none"
                    this.productsSearch=[]
                }else{
                    list_search.className='list-search'
                    icon.classList.remove('fa-search')
                    icon.classList.add('fa-close')
                    icon.style.cursor='pointer'
                }
            },
            removeValueSearch(){
                document.getElementById('search').value=''
                document.getElementById('icon-search').classList.remove('fa-close')
                document.getElementById('icon-search').classList.add('fa-search')
                document.getElementById('icon-search').style.cursor='revert'
                document.getElementById('list-search').style.display="none"
                this.productsSearch=[]
            }
        }
    }
</script>
<style>
    body{
        background-color: #f5f5f5;
    }
    .navbar{
        background-color: rgb(0, 28, 64);
        z-index: 999999;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        display: flex;
    }
    .main-pos{
        min-height: calc(100vh - 50px);
        padding: 20px;
        margin-top: 50px;
        background-color: #f5f5f5;
    }
    .main-title{
        display: block;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        background-color: #FFF;
        border-radius: 0.375rem;
        padding: 10px 30px;
        -webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
        box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
        border-left: 6px solid #FFD43B;
        margin-bottom: 20px;
    }
    .main-title p{
            margin-bottom:0;
            font-size:18px;
            font-weight: 500;
            padding:0;
            text-transform:capitalize;
            text-align:left;
            background-color: transparent;
    }
    .title{
        position: relative;
        background: #ffffff;
        border-radius: 0.375rem;
        padding: 20px;
        -webkit-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
        margin-bottom: 30px;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .title .title-title{
        margin-top: 0;
        margin-bottom: 30px;
        font-size: 20px;
        /* text-align: center; */
        border-bottom: 2px solid #FFD43B;
        padding-bottom: 10px;
        /* border-left: 3px solid black; */
        padding-left: 5px;
        color: black;
    }
    #search {
        width: 100%;
        padding: 10px;
        border: 1px solid #dadada;
        border-radius: 0.357rem;
    }
    .alert {
        padding: 10px;
        background-color: #b1ffb5;
        color: #006906;
        border-radius: 0.357rem;
        text-align: center;
        font-weight: 500;
        font-size: 15px;
    }
    .control-label {
        font-weight: 600;
        color: black;
    }
    .control-all-money-tamtinh {
        font-size: 20px;
        font-weight: 500;
        color: #676767; 
    }
    .control-all-money-total {
        font-size: 20px;
        font-weight: 600;
        color: var(--green);
    }
    .control-all-money {
        font-size: 25px;
        font-weight: 600;
        color: rgb(209, 0, 0);
    }
    .list-search{
        position: absolute;
        background-color: #ebebeb;
        width: 90%;
        padding: 9px;
        margin-left: 26px;
        z-index: 1;
        overflow: auto;
        max-height: 330px;
    }
    #icon-search{
        float: right;
        position: absolute;
        padding: 15px;
        right: 26px;
        font-size: 18px;
    }
    .icon-cart{
        float: right;
        margin-top: 30px;
        font-size: 20px;
        cursor: pointer;
        color: #6b0006;
    }
</style>