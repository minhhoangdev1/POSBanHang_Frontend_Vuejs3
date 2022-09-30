<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-user">
            <div class="card-header">
                <div style="border-bottom: 2px solid #dec713;">
                    <h5 class="card-title">Tạo mới sản phẩm</h5>
                </div>
                <div style="border-bottom: 1px solid ;">
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#addSupplier">Thêm nhà cung cấp</a>
                    <a href="" class="btn btn-primary" data-toggle="modal" data-target="#addCategory">Thêm danh mục</a>
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProduct()">
                    <div class="row">
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Tên sản phẩm</label>
                                <input  
                                    type="text" 
                                    class="form-control"
                                    v-model="product.name" 
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.name}">
                                <div class="invalid-feedback" v-if="errorProduct.name">{{errorProduct.name}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>Số lượng</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="product.quality" 
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.quality}">
                                <div class="invalid-feedback" v-if="errorProduct.quality">{{errorProduct.quality}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Tình trạng</label>
                                <select name="" id="" class="form-control" 
                                    @blur="validateProduct()" 
                                    v-model="product.stock_status" 
                                    v-bind:class="{'is-invalid':errorProduct.stock_status}">
                                        <option value="" disabled selected>--Chọn tình trạng--</option>
                                        <option value="instock">Còn hàng</option>
                                        <option value="outofstock">Hết hàng</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorProduct.stock_status">{{errorProduct.stock_status}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Danh mục</label>
                                <select name="" id="" class="form-control" 
                                    v-model="product.category_id"
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.category}">
                                        <option value="" disabled selected>--Chọn danh mục-</option>
                                        <option v-for="cate in categories" :value="cate.id">{{cate.name}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorProduct.category">{{errorProduct.category}}</div>
                            </div>
                        </div> 
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>Nhà cung cấp</label>
                                <select name="" id="" class="form-control" 
                                    v-model="product.supplier_id"
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.supplier}">
                                        <option value="" disabled selected>--Chọn nhà cung cấp--</option>
                                        <option v-for="sup in suppliers" :value="sup.id">{{sup.name}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorProduct.supplier">{{errorProduct.supplier}}</div>
                            </div>
                        </div> 
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Giá bán</label>
                                <input type="text" class="form-control"
                                    v-model="product.price" 
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.price}">
                                <div class="invalid-feedback" v-if="errorProduct.price">{{errorProduct.price}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>Giá vốn</label>
                                <input type="text" class="form-control" placeholder=""
                                    v-model="product.cost_price" 
                                    @blur="validateProduct()" 
                                    v-bind:class="{'is-invalid':errorProduct.cost_price}">
                                <div class="invalid-feedback" v-if="errorProduct.cost_price">{{errorProduct.cost_price}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-bottom: 22px;">
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Ảnh</label>
                                <input type="file" ref="fileupload" @change="onFileChange" id="uploadfile" style="opacity:1; top:20px"/>
                            </div>
                            <div id="preview" v-if="urlImage">
                                <img :src="urlImage">
                                <i class="nc-icon nc-simple-remove" @click="removeImg()"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <label>Mô tả</label>
                            <textarea v-model="product.description" class="form-control textarea"></textarea>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="update ml-auto mr-auto">
                            <button type="submit" class="btn btn-primary btn-round">Lưu lại</button>
                            <router-link :to="{name:'products'}" class="btn btn-danger btn-round">Hủy bỏ</router-link>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>

    <!-- Modal nhà cung cấp -->
    <div class="modal fade" id="addSupplier" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới nhà cung cấp</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name-supplier" class="col-form-label">Nhập tên nhà cung cấp</label>
                        <input type="text" class="form-control" id="name-supplier" @blur="validateSupplier()" v-bind:class="{'is-invalid':errorSupplier.name}">
                        <div class="invalid-feedback" v-if="errorSupplier.name">{{errorSupplier.name}}</div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" @click="createSupplier()">Lưu lại</button>
            </div>
            </div>
        </div>
    </div>
     <!-- Modal danh mục -->
     <div class="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới danh mục</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name-category" class="col-form-label">Nhập tên danh mục</label>
                        <input type="text" class="form-control" id="name-category" @blur="validateCategory()" v-bind:class="{'is-invalid':errorCategory.name}">
                        <div class="invalid-feedback" v-if="errorCategory.name">{{errorCategory.name}}</div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" @click="createCategory()">Lưu lại</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                urlImage:'',
                categories:[],
                suppliers:[],
                errorProduct:{
                    name:'',
                    quality:'',
                    stock_status:'',
                    category:'',
                    supplier:'',
                    price:'',
                    cost_price:'',
                },
                errorCategory:{
                    name:''
                },
                errorSupplier:{
                    name:''
                },
                product:{
                    name:'',
                    quality:'',
                    stock_status:'',
                    category_id:'',
                    supplier_id:'',
                    price:'',
                    cost_price:'',
                    image:'',
                    description:''
                },
                urlApi:'http://127.0.0.1:8000/'
            }
        },
        created(){
            this.getDataCategory()
            this.getDataSupplier()
            let productCode=this.$route.params.code //lay params route edit
            if(productCode){
                this.getDataProductEdit(productCode)
            }
        },
        methods:{
            onFileChange(e) {
                const file = e.target.files[0];
                this.urlImage = URL.createObjectURL(file);
            },
            removeImg(){
                this.urlImage=''
                this.$refs.fileupload.value=''
            },
            validateCategory(){
                let isValid=true
                this.errorCategory.name=''
                if(!document.getElementById('name-category').value){
                    this.errorCategory.name ='Tên danh mục không được trống !'
                    isValid=false
                }
                return isValid
            },
            validateSupplier(){
                let isValid=true
                this.errorSupplier.name=''
                if(!document.getElementById('name-supplier').value){
                    this.errorSupplier.name ='Tên nhà cung cấp không được trống !'
                    isValid=false
                }
                return isValid
            },
            validateProduct(){
                let isValid=true
                this.errorProduct.name=''
                this.errorProduct.quality=''
                this.errorProduct.stock_status=''
                this.errorProduct.category=''
                this.errorProduct.supplier=''
                this.errorProduct.price=''
                this.errorProduct.cost_price=''
                if(!this.product.name){
                    this.errorProduct.name ='Tên sản phẩm không được trống !'
                    isValid=false
                }
                if(!this.product.quality){
                    this.errorProduct.quality ='Số lượng không được trống !'
                    isValid=false
                }else if(!this.isNumber(this.product.quality)){
                    this.errorProduct.quality ='Số lượng phải là số!'
                    isValid=false
                }
                if(!this.product.stock_status){
                    this.errorProduct.stock_status ='Chưa chọn tình trạng !'
                    isValid=false
                }
                if(!this.product.category_id){
                    this.errorProduct.category ='Chưa chọn danh mục !'
                    isValid=false
                }
                if(!this.product.supplier_id){
                    this.errorProduct.supplier ='Chưa chọn nhà cung cấp !'
                    isValid=false
                }
                if(!this.product.price){
                    this.errorProduct.price ='Giá bán không được trống !'
                    isValid=false
                }else if(!this.isNumber(this.product.price)){
                    this.errorProduct.price ='Giá bán lượng phải là số!'
                    isValid=false
                }
                if(!this.product.cost_price){
                    this.errorProduct.cost_price ='Giá vốn không được trống !'
                    isValid=false
                }else if(!this.isNumber(this.product.cost_price)){
                    this.errorProduct.cost_price ='Giá vốn lượng phải là số!'
                    isValid=false
                }
                return isValid
            },
            isNumber(value){
                return /^\d*$/.test(value)
            },
            async getDataCategory(){
                await this.axios.get(this.urlApi+'api/v1/category')
                    .then(res=>{
                        this.categories=res.data.data
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            async getDataSupplier(){
                await this.axios.get(this.urlApi+'api/v1/supplier')
                    .then(res=>{
                        this.suppliers=res.data.data
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            async createSupplier(){
                // const d=new Date();
                // var year=d.getFullYear().toString().substr(-2,2);
                // var month=(d.getMonth()+1).toString();
                // var date=d.getDate().toString();
                // console.log('SUP'+year+month+date)  
                
                if(this.validateSupplier()){
                    var name=document.getElementById('name-supplier').value
                    await this.axios.post(this.urlApi+'api/v1/supplier',{name:name})
                    .then(res=>{
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Thành công',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        document.getElementById('name-supplier').value=''
                        this.getDataSupplier()
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            async createCategory(){
                var name=document.getElementById('name-category').value
                if(this.validateCategory()){
                    await this.axios.post(this.urlApi+'api/v1/category',{name:name})
                    .then(res=>{
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Thành công',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        document.getElementById('name-category').value=''
                        this.getDataCategory()
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            async saveProduct(){
                if(this.validateProduct()){
                    let image=document.getElementById('uploadfile').files[0]
                    if(image){
                        this.product.image=image
                    }else{
                        this.product.image=''
                    }
                    let frm=new FormData()
                    frm.append('name',this.product.name)
                    frm.append('quality',this.product.quality)
                    frm.append('stock_status',this.product.stock_status)
                    frm.append('category_id',this.product.category_id)
                    frm.append('supplier_id',this.product.supplier_id)
                    frm.append('price',this.product.price)
                    frm.append('cost_price',this.product.cost_price)
                    frm.append('image',this.product.image)
                    frm.append('description',this.product.description)
                    //update 
                    let productCode=this.$route.params.code //lay params route edit
                    if(productCode){
                        frm.append('_method','PUT')
                        await this.axios.post(this.urlApi+'api/v1/product/'+productCode,frm,{
                            header:{
                                'Content-Type':'multipart/form-data'
                            }
                        })
                        .then(res=>{
                            this.sendDataProSuccess() 
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    }
                    //create
                    else{
                        await this.axios.post(this.urlApi+'api/v1/product',frm,{
                        header:{
                            'Content-Type':'multipart/form-data'
                        }
                        })
                        .then(res=>{
                            this.sendDataProSuccess() 
                        })
                        .catch(err=>{
                            console.log(err)
                        }) 
                    }
                }
            },
            async getDataProductEdit(code){
                await this.axios.get(this.urlApi+'api/v1/product/'+code+'/edit')
                    .then(res=>{
                        this.product=res.data.data
                        this.urlImage = this.urlApi+'uploads/product/'+this.product.image;
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            sendDataProSuccess(){
                this.$swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$refs.fileupload.value=''
                this.urlImage=''
                this.product.name=''
                this.product.stock_status=''
                this.product.category_id=''
                this.product.supplier_id=''
                this.product.quality=''
                this.product.price=''
                this.product.cost_price=''
                this.product.image=''
                this.product.description=''
                this.$router.push({name:'products'})
            }
        }
    }
</script>
<style>
    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    #preview img {
    max-width: 100%;
    max-height: 500px;
    }
    #preview i{
        position: absolute;
        font-size: 37px;
        font-weight: 900;
        top: 50px;
        right: 0;
        color: red;
        cursor: pointer;
    }
</style>