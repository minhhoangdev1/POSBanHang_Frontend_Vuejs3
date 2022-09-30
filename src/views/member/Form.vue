<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card card-user">
            <div class="card-header">
                <div style="border-bottom: 2px solid #dec713;">
                    <h5 class="card-title">Tạo mới nhân viên</h5>
                </div>
                <div style="border-bottom: 1px solid ;">
                    <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#addPosition">Thêm chức vụ mới</a>
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="saveMember()">
                    <div class="row">
                        <div class="col-md-4 pr-1">
                            <div class="form-group">
                                <label>Họ và tên</label>
                                <input  
                                    type="text" 
                                    class="form-control"
                                    v-model="member.name" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.name}">
                                <div class="invalid-feedback" v-if="errorMember.name">{{errorMember.name}}</div>
                            </div>
                        </div>
                        <div class="col-md-4 px-1">
                            <div class="form-group">
                                <label>Địa chỉ email</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.email" >
                            </div>
                        </div>
                        <div class="col-md-4 pl-1">
                            <div class="form-group">
                                <label>Địa chỉ thường trú</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.address" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.address}">
                                <div class="invalid-feedback" v-if="errorMember.address">{{errorMember.address}}</div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <div class="col-md-4 pr-1">
                            <div class="form-group">
                                <label>SĐT</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.phone" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.phone}">
                                <div class="invalid-feedback" v-if="errorMember.phone">{{errorMember.phone}}</div>
                            </div>
                        </div>
                        <div class="col-md-4 px-1">
                            <div class="form-group">
                                <label>Ngày sinh</label>
                                <input 
                                    type="date" 
                                    class="form-control" 
                                    v-model="member.date_of_birth" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.date_of_birth}">
                                <div class="invalid-feedback" v-if="errorMember.date_of_birth">{{errorMember.date_of_birth}}</div>
                            </div>
                        </div>
                        <div class="col-md-4 pl-1">
                            <div class="form-group">
                                <label>Nơi sinh</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.place_of_birth" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.place_of_birth}">
                                <div class="invalid-feedback" v-if="errorMember.place_of_birth">{{errorMember.place_of_birth}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 pr-1">
                            <div class="form-group">
                                <label>CMND/CCCD</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.cmnd_cccd" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.cmnd_cccd}">
                                <div class="invalid-feedback" v-if="errorMember.cmnd_cccd">{{errorMember.cmnd_cccd}}</div>
                            </div>
                        </div>
                        <div class="col-md-4 px-1">
                            <div class="form-group">
                                <label>Ngày cấp cmnd/cccd</label>
                                <input 
                                    type="date" 
                                    class="form-control" 
                                    v-model="member.date_of_cmnd_cccd" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.date_of_cmnd_cccd}">
                                <div class="invalid-feedback" v-if="errorMember.date_of_cmnd_cccd">{{errorMember.date_of_cmnd_cccd}}</div>
                            </div>
                        </div>
                        <div class="col-md-4 pl-1">
                            <div class="form-group">
                                <label>Nơi cấp cmnd/cccd</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    v-model="member.place_of_cmnd_cccd" 
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.place_of_cmnd_cccd}">
                                <div class="invalid-feedback" v-if="errorMember.place_of_cmnd_cccd">{{errorMember.place_of_cmnd_cccd}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Giới tính</label>
                                <select name="" id="" class="form-control" 
                                    @blur="validateMember()" 
                                    v-model="member.sex" 
                                    v-bind:class="{'is-invalid':errorMember.sex}">
                                        <option value="" disabled selected>--Chọn giới tính--</option>
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                        <option value="other">Khác</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorMember.sex">{{errorMember.sex}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>Bằng cấp</label>
                                <select name="" id="" class="form-control" 
                                    @blur="validateMember()" 
                                    v-model="member.certificate" 
                                    v-bind:class="{'is-invalid':errorMember.certificate}">
                                        <option value="" disabled selected>--Chọn bằng cấp--</option>
                                        <option value="DH">Tốt nghiệp đại học</option>
                                        <option value="CD">Tốt nghiệp cao đẳng</option>
                                        <option value="PT">Tốt nghiệp phổ thông</option>
                                        <option value="CTN">Chưa tốt nghiệp</option>
                                        <option value="KBC">Không bằng cấp</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorMember.certificate">{{errorMember.certificate}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Tình trạng hôn nhân</label>
                                <select name="" id="" class="form-control" 
                                    @blur="validateMember()" 
                                    v-model="member.marital_status" 
                                    v-bind:class="{'is-invalid':errorMember.marital_status}">
                                        <option value="" disabled selected>--Chọn tình trạng hôn nhân--</option>
                                        <option value="single">Độc thân</option>
                                        <option value="Married">Đã kết hôn</option>
                                        <option value="G">Góa</option>
                                        <option value="other">Khác</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorMember.marital_status">{{errorMember.marital_status}}</div>
                            </div>
                        </div>
                        <div class="col-md-3 px-1">
                            <div class="form-group">
                                <label>Chức vụ</label>
                                <select name="" id="" class="form-control" 
                                    v-model="member.position_id "
                                    @blur="validateMember()" 
                                    v-bind:class="{'is-invalid':errorMember.position_id }">
                                        <option value="" disabled selected>--Chọn chức vụ-</option>
                                        <option v-for="pos in positions" :value="pos.id">{{pos.name}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errorMember.position_id ">{{errorMember.position_id }}</div>
                            </div>
                        </div> 
                    </div>
                    <div class="row" style="margin-bottom: 22px;">
                        <div class="col-md-3 pr-1">
                            <div class="form-group">
                                <label>Ảnh 3x4 nhân viên</label>
                                <input type="file" ref="fileupload" @change="onFileChange" id="uploadfile" style="opacity:1; top:20px"/>
                            </div>
                            <div id="preview" v-if="urlImage">
                                <img :src="urlImage">
                                <i class="nc-icon nc-simple-remove" @click="removeImg()"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="update ml-auto mr-auto">
                            <button type="submit" class="btn btn-primary btn-round">Lưu lại</button>
                            <router-link :to="{name:'members'}" class="btn btn-danger btn-round">Hủy bỏ</router-link>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>

    <!-- Modal chức vụ -->
    <div class="modal fade" id="addPosition" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Thêm mới chức vụ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name-position" class="col-form-label">Nhập tên chức vụ</label>
                        <input type="text" class="form-control" id="name-position" @blur="validatePosition()" v-bind:class="{'is-invalid':errorPosition.name}">
                        <div class="invalid-feedback" v-if="errorPosition.name">{{errorPosition.name}}</div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-primary" @click="createPosition()">Lưu lại</button>
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
                positions:[],
                errorMember:{
                    name:'',
                    address:'',
                    phone:'',
                    date_of_birth:'',
                    place_of_birth:'',
                    cmnd_cccd:'',
                    date_of_cmnd_cccd:'',
                    place_of_cmnd_cccd:'',
                    sex:'',
                    certificate:'',
                    marital_status:'',
                    position_id :''
                },
                errorPosition:{
                    name:''
                },
                member:{
                    name:'',
                    email:'',
                    address:'',
                    phone:'',
                    date_of_birth:'',
                    place_of_birth:'',
                    cmnd_cccd:'',
                    date_of_cmnd_cccd:'',
                    place_of_cmnd_cccd:'',
                    sex:'',
                    certificate:'',
                    marital_status:'',
                    image:'',
                    position_id :''
                },
                urlApi:'http://127.0.0.1:8000/'
            }
        },
        created(){
            this.getDataPosition()
            let memberCode=this.$route.params.code //lay params route edit
            if(memberCode){
                this.getDataMemberEdit(memberCode)
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
            validatePosition(){
                let isValid=true
                this.errorPosition.name=''
                if(!document.getElementById('name-position').value){
                    this.errorPosition.name ='Tên chức vụ không được trống !'
                    isValid=false
                }
                return isValid
            },
            validateMember(){
                let isValid=true
                this.errorMember.name=''
                this.errorMember.address=''
                this.errorMember.phone=''
                this.errorMember.date_of_birth=''
                this.errorMember.place_of_birth=''
                this.errorMember.cmnd_cccd=''
                this.errorMember.date_of_cmnd_cccd=''
                this.errorMember.place_of_cmnd_cccd=''
                this.errorMember.sex=''
                this.errorMember.certificate=''
                this.errorMember.marital_status=''
                this.errorMember.position_id=''
                if(!this.member.name){
                    this.errorMember.name ='Tên nhân viên không được trống !'
                    isValid=false
                }
                if(!this.member.address){
                    this.errorMember.address ='Địa chỉ tình trạng !'
                    isValid=false
                }
                if(!this.member.phone){
                    this.errorMember.phone ='Số điện thoại không được trống !'
                    isValid=false
                }else if(!this.isNumber(this.member.phone)){
                    this.errorMember.phone ='Điện thoại phải là số !'
                    isValid=false
                }
                if(!this.member.date_of_birth){
                    this.errorMember.date_of_birth ='Chưa chọn ngày sinh !'
                    isValid=false
                }
                if(!this.member.place_of_birth){
                    this.errorMember.place_of_birth ='Nơi sinh không được trống !'
                    isValid=false
                }
                if(!this.member.cmnd_cccd){
                    this.errorMember.cmnd_cccd ='CMND/CCCD không được trống!'
                    isValid=false
                }else if(!this.isNumber(this.member.cmnd_cccd)){
                    this.errorMember.cmnd_cccd ='CMND/CCCD phải là số!'
                    isValid=false
                }
                if(!this.member.date_of_cmnd_cccd){
                    this.errorMember.date_of_cmnd_cccd ='Chưa chọn ngày cấp !'
                    isValid=false
                }
                if(!this.member.place_of_cmnd_cccd){
                    this.errorMember.place_of_cmnd_cccd ='Nơi cấp không được trống !'
                    isValid=false
                }
                if(!this.member.sex){
                    this.errorMember.sex ='Chưa chọn giới tính !'
                    isValid=false
                }
                if(!this.member.certificate){
                    this.errorMember.certificate ='Chưa chọn bằng cấp !'
                    isValid=false
                }
                if(!this.member.marital_status){
                    this.errorMember.marital_status ='Chưa chọn tình trạng hôn nhân !'
                    isValid=false
                }
                if(!this.member.position_id){
                    this.errorMember.position_id ='Chưa chọn chức vụ !'
                    isValid=false
                }
                return isValid
            },
            isNumber(value){
                return /^\d*$/.test(value)
            },
            async getDataPosition(){
                await this.axios.get(this.urlApi+'api/v1/position')
                    .then(res=>{
                        this.positions=res.data
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            async createPosition(){
                var name=document.getElementById('name-position').value
                if(this.validatePosition()){
                    await this.axios.post(this.urlApi+'api/v1/position',{name:name})
                    .then(res=>{
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Thành công',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        document.getElementById('name-position').value=''
                        this.getDataPosition()
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            },
            async saveMember(){
                if(this.validateMember()){
                    let image=document.getElementById('uploadfile').files[0]
                    if(image){
                        this.member.image=image
                    }else{
                        this.member.image=''
                    }
                    let frm=new FormData()
                    frm.append('name',this.member.name)
                    frm.append('email',this.member.email)
                    frm.append('address',this.member.address)
                    frm.append('phone',this.member.phone)
                    frm.append('date_of_birth',this.member.date_of_birth)
                    frm.append('place_of_birth',this.member.place_of_birth)
                    frm.append('cmnd_cccd',this.member.cmnd_cccd)
                    frm.append('date_of_cmnd_cccd',this.member.date_of_cmnd_cccd)
                    frm.append('place_of_cmnd_cccd',this.member.place_of_cmnd_cccd)
                    frm.append('sex',this.member.sex)
                    frm.append('certificate',this.member.certificate)
                    frm.append('marital_status',this.member.marital_status)
                    frm.append('image',this.member.image)
                    frm.append('position_id',this.member.position_id)
                    //update 
                    let memberCode=this.$route.params.code //lay params route edit
                    if(memberCode){
                        frm.append('_method','PUT')
                        await this.axios.post(this.urlApi+'api/v1/member/'+memberCode,frm,{
                            header:{
                                'Content-Type':'multipart/form-data'
                            }
                        })
                        .then(res=>{
                            this.sendDataMemSuccess()
                            
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                    }
                    //create
                    else{
                        await this.axios.post(this.urlApi+'api/v1/member',frm,{
                            header:{
                                'Content-Type':'multipart/form-data'
                            }
                        })
                        .then(res=>{
                            this.sendDataMemSuccess()
                        })
                        .catch(err=>{
                            console.log(err)
                        }) 
                    }
                }
            },
            async getDataMemberEdit(code){
                await this.axios.get(this.urlApi+'api/v1/member/'+code+'/edit')
                    .then(res=>{
                        this.member=res.data
                        this.urlImage = this.urlApi+'uploads/member/'+this.member.image;
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            sendDataMemSuccess(){
                this.$swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.$refs.fileupload.value=''
                this.member.name=''
                this.member.email=''
                this.member.address=''
                this.member.phone=''
                this.member.date_of_birth=''
                this.member.place_of_birth=''
                this.member.cmnd_cccd=''
                this.member.date_of_cmnd_cccd=''
                this.member.place_of_cmnd_cccd=''
                this.member.sex=''
                this.member.certificate=''
                this.member.marital_status=''
                this.member.image=''
                this.member.position_id=''
                this.$router.push({name:'members'})
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