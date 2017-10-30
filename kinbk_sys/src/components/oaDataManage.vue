<template>
  <el-card class="box-card oa-card" v-loading.body="loading">
    <div slot="header" class="clearfix oa-card-header">
      <el-upload
        ref="uploadExcel"
        :action="oaManageAction"
        :show-file-list="false"
        :headers="headers"
        :before-upload='beforeUpload'
        :on-success='uploadSuccess'
        :on-error='uploadError'
        :on-progress="uploadProgress"
      >
        <el-button slot="trigger" size="small"><i class="el-icon-upload2"></i>上传Excel</el-button>
      </el-upload>
      <!--<el-button class="float-left oa-add-btn" type="primary" @click="openBtn('oaAddCard')"><i class="el-icon-plus"></i>新&nbsp;&nbsp;&nbsp;建-->
      <!--</el-button>-->
      <!--<el-input-->
        <!--placeholder="请输入搜索关键词"-->
        <!--icon="search"-->
        <!--v-model="keywords"-->
        <!--:on-icon-click="keywordsSearchClick">-->
      <!--</el-input>-->
    </div>
    <div class="oa-card-body">
      <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl"
                      :currentPage='currentPage' :pageSize='pageSize' :cgxpagesizeHandle="cgxpagesizeHandle">
        <el-table-column
          type="index"
          label="编号"
          width='7%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width='7%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机"
          width='11%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="identityCard"
          label="身份证号码"
          width='15%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="poststyle"
          label="职务类别"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="position"
          label="岗位"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="entryDate"
          label="入职时间"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width='20%'
          show-overflow-tooltip
          class="operation"
        >
          <template scope="scope">
            <span @click="openBtn('oaDetailCard',scope.row.id)"><i class="el-icon-view"></i>查看</span>
            <!--<span @click="openBtn('oaEditCard',scope.row.id)"><i class="el-icon-edit"></i>修改</span>-->
            <!--<span @click="deleteSingleBtn(scope.row.id)"><i class="el-icon-delete"></i>删除</span>-->
          </template>
        </el-table-column>
      </define-content>
    </div>
    <div class="oa-add" v-if='oaAddCard'>
      <el-card class="box-card oa-add-card">
        <div slot="header" class="clearfix oa-add-card-header">
          <span>新&nbsp;&nbsp;&nbsp;建</span>
          <i class="el-icon-circle-close" @click="closeBtn('oaAddCard')"></i>
        </div>
        <div class="oa-add-card-body">
          <el-form ref="oaAddForm" :rules="editRules" :model="oaAddForm" label-width="100px">
            <el-form-item label="姓名：" prop="name">
              <el-input v-model.trim="oaAddForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="phone">
              <el-input v-model.trim="oaAddForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="身份证号：" prop="identityCard">
              <el-input v-model.trim="oaAddForm.identityCard"></el-input>
            </el-form-item>
            <el-form-item label="职务类别：" prop="poststyle">
              <el-input v-model.trim="oaAddForm.poststyle"></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="department">
              <el-input v-model.trim="oaAddForm.department"></el-input>
            </el-form-item>
            <el-form-item label="岗位：" prop="position">
              <el-input v-model.trim="oaAddForm.position"></el-input>
            </el-form-item>
            <el-form-item label="入职时间：" prop="entryDate">
              <!--<el-input v-model.trim="oaAddForm.entryDate"></el-input>-->
              <el-date-picker
                v-model="oaAddForm.entryDate"
                type="date"
                :editable="false"
                format="yyyy年MM月dd日"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('oaAddForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('oaAddForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="oa-edit" v-if='oaEditCard'>
      <el-card class="box-card oa-add-card">
        <div slot="header" class="clearfix oa-add-card-header">
          <span>编&nbsp;&nbsp;&nbsp;辑</span>
          <i class="el-icon-circle-close" @click="closeBtn('oaEditCard')"></i>
        </div>
        <div class="oa-add-card-body">
          <el-form ref="oaEditForm" :rules='editRules' :model="oaEditForm" label-width="100px">
            <el-form-item label="姓名：" prop="name">
              <el-input v-model.trim="oaEditForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机：" prop="phone">
              <el-input v-model.trim="oaEditForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="身份证号：" prop="identityCard">
              <el-input v-model.trim="oaEditForm.identityCard"></el-input>
            </el-form-item>
            <el-form-item label="职务类别：" prop="poststyle">
              <el-input v-model.trim="oaEditForm.poststyle"></el-input>
            </el-form-item>
            <el-form-item label="部门：" prop="department">
              <el-input v-model.trim="oaEditForm.department"></el-input>
            </el-form-item>
            <el-form-item label="岗位：" prop="position">
              <el-input v-model.trim="oaEditForm.position"></el-input>
            </el-form-item>
            <el-form-item label="入职时间：" prop="entryDate">
              <!--<el-input v-model.trim="oaEditForm.entryDate"></el-input>-->
              <el-date-picker
                v-model="oaEditForm.entryDate"
                type="date"
                :editable="false"
                format="yyyy年MM月dd日"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('oaEditForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('oaEditForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="oa-detail" v-if='oaDetailCard'>
      <el-card class="box-card oa-add-card oa-detail-card">
        <div slot="header" class="clearfix oa-add-card-header">
          <span>详&nbsp;&nbsp;&nbsp;情</span>
          <i class="el-icon-circle-close" @click="closeBtn('oaDetailCard')"></i>
        </div>
        <div class="oa-add-card-body">
          <el-form ref="oaDetailForm" :model="oaDetailForm" label-width="100px">
            <el-form-item label="姓名：">
              <el-input v-model.trim="oaDetailForm.name" readonly></el-input>
            </el-form-item>
            <el-form-item label="手机：">
              <el-input v-model.trim="oaDetailForm.phone" readonly></el-input>
            </el-form-item>
            <el-form-item label="身份证号：">
              <el-input v-model.trim="oaDetailForm.identityCard" readonly></el-input>
            </el-form-item>
            <el-form-item label="职务类别：">
              <el-input v-model.trim="oaDetailForm.poststyle" readonly></el-input>
            </el-form-item>
            <el-form-item label="部门：">
              <el-input v-model.trim="oaDetailForm.department" readonly></el-input>
            </el-form-item>
            <el-form-item label="岗位：">
              <el-input v-model.trim="oaDetailForm.position" readonly></el-input>
            </el-form-item>
            <el-form-item label="入职时间：">
              <el-input v-model.trim="getFormat" readonly></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </el-card>
</template>

<script>
  import defineContent from './content';
  import loginTimeout from '../api/loginTimeout';
  import deleteById from '../api/delete';
  import formatDate from '../api/formatDate';
  export default {
    data(){
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名！'));
        } else {
          callback();
        }
      };
      let validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入电话号！'));
        } else {
          let reg = /^1[3|4|5|7|8][0-9]{9}$/;
          let flag = reg.test(value);
          if (flag === true) {
            callback();
          } else {
            callback(new Error('手机号输入错误！'));
          }
        }
      };
      let validateIdentityCard = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入身份证号！'));
        } else {
          let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          let flag = reg.test(value);
          if (flag === true) {
            callback();
          } else {
            callback(new Error('身份证输入错误！'));
          }
        }
      };
      let validatePostStyle = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入职务类型！'));
        } else {
          callback();
        }
      };
      let validateDepartment = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入对应部门！'));
        } else {
          callback();
        }
      };
      let validatePosition = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入对应岗位！'));
        } else {
          callback();
        }
      };
      let validateEntryDate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择入职时间！'));
        } else {
          callback();
        }
      };
      return {
        oaAddCard: false,
        oaDetailCard: false,
        oaEditCard: false,
        oaManageAction: '',
        editRules: {
          name: [
            {validator: validateName, trigger: 'blur'}
          ],
          phone: [
            {validator: validatePhone, trigger: 'blur'}
          ],
          identityCard: [
            {validator: validateIdentityCard, trigger: 'blur'}
          ],
          poststyle: [
            {validator: validatePostStyle, trigger: 'blur'}
          ],
          department: [
            {validator: validateDepartment, trigger: 'blur'}
          ],
          position: [
            {validator: validatePosition, trigger: 'blur'}
          ],
          entryDate: [
            {validator: validateEntryDate, trigger: 'blur'}
          ],
        },
        tableData: [],
        oaAddForm: {
          id: '',
          name: "",
          phone: "",
          identityCard: "",
          department: "",
          position: "",
          entryDate: "",
          poststyle: ""
        },
        headers: {},
        oaDetailForm: {
          id: '',
          name: "",
          phone: "",
          identityCard: "",
          position: "",
          department: "",
          entryDate: "",
          poststyle: ""
        },
        oaEditForm: {
          id: '',
          name: "",
          phone: "",
          identityCard: "",
          department: "",
          position: "",
          entryDate: "",
          poststyle: ""
        },
        oaEditCopyForm: {
          id: '',
          name: "",
          phone: "",
          department: "",
          identityCard: "",
          position: "",
          entryDate: "",
          poststyle: ""
        },
        keywords: '',
        pageUrl: '',
        total: 0,
        loading: false,
        currentPage: 1,
        pageSize: 20,
        progressState:{
          title:"提示：",
          message:"文件上传中，请稍等！",
          type:"warning"
        }
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: 'OA管理', url: 'oaDataManage'}];
      if (this.$constant.OAUPLOAD) {
        this.oaManageAction = this.$constant.OAUPLOAD;
      }
      let session = this.$session({key: "loginMsg"});
      if (session && session.token !== undefined) {
        this.headers = {
          Authorization: session.token
        }
      } else {
        this.headers = {};
      }
      if (this.$constant.OAMANAGE) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.OAMANAGE;
        this.$http({
          url: this.$constant.OAMANAGE,
          vm: me,
          method: "GET",
          params: {page: this.currentPage, rows: this.pageSize}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data && data.data.length > 0) {
                if (data.data[0].total !== undefined) {
                  me.total = data.data[0].total;
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    id: me.$handleData(dt.id),
                    name: me.$handleData(dt.name),
                    phone: me.$handleData(dt.mobile),
                    identityCard: me.$handleData(dt.idCard),
                    department: me.$handleData(dt.department),
                    position: me.$handleData(dt.post),
                    entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime), true),
                    poststyle: me.$handleData(dt.poststyle),
                  });
                }
                me.tableData = arr;
              } else {
                me.tableData = [];
              }
            } else {
              me.tableData = [];
            }
            me.loading = false;
          } else {
            me.tableData = [];
            me.total = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
    },
    methods: {
      uploadProgress(event){
          //alert('文件上传中');
      },
      uploadSuccess(data){
        let me = this;
        if (data) {
          if (data.code === 200) {
            me.$messageBox({
              vm: me,
              message: '文件上传成功！',
              title: "成功：",
              type: "success",
              loadingState: false
            })
            //加载数据
            me.getDataList();
          } else if (data.code === -100) {
            //登陆失效
            loginTimeout(data, me)
          } else {
            //文件上传失败
            me.$messageBox({
              vm: me,
              message: '文件上传失败！',
              title: "错误：",
              type: "error"
            })
          }
        } else {
          me.$messageBox({
            vm: me,
            message: '文件上传失败！',
            title: "错误：",
            type: "error"
          })
        }
      },
      uploadError(err){
        if (err) {
          this.$messageBox({
            vm: this,
            message: '文件上传失败！',
            title: "错误：",
            type: "error"
          })
        }
      },
      beforeUpload(file){
        if (file && file.name != '') {
          let strRegex = "(.xls|.xlsx)$",
            reg = new RegExp(strRegex);
          if (!reg.test(file.name.toLowerCase())) {
            this.$messageBox({
              vm: this,
              title: "错误：",
              message: "文件不合法，请上传以xls、xlsx为后缀的文件！",
              type: "error"
            });
            return false;
          }
        } else {
          this.$messageBox({vm: this, title: "错误：", message: "文件上传失败，请再次上传！", type: "error"});
          return false;
        }
      },
      submitSure(formName){
        let me = this;
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = null;
              if (formName === 'oaAddForm') {
                data = this.oaAddForm;
              } else if (formName === 'oaEditForm') {
                for (let key in this.oaEditForm) {
                  if(key === 'entryDate'){
                     let flag =  new Date(this.oaEditForm[key]).getTime() !== new Date(this.oaEditCopyForm[key]).getTime();
                     if(flag){
                       data = this.oaEditForm;
                       break;
                     }
                  }else{
                    if (this.oaEditForm[key] !== this.oaEditCopyForm[key]) {
                      data = this.oaEditForm;
                      break;
                    }
                  }
                }
              } else {
                return;
              }
              if (this.$constant.OAMANAGESAVE && data && data.id !== '') {
                this.$http({
                  url: this.$constant.OAMANAGESAVE,
                  vm: me,
                  method: "POST",
                  data: {
                    id: data.id,
                    name: data.name,
                    mobile: data.phone,
                    idCard: data.identityCard,
                    department: data.department,
                    post: data.position,
                    entryTime: this.$handleData(data.entryDate) === '' ? '' : formatDate(data.entryDate, true),
                    poststyle: data.poststyle
                  }
                }, function (data) {
                  if (data === true) {
                    me.$messageBox({
                      vm: me,
                      message: formName === 'oaAddForm' ? "新建成功！" : formName === 'oaEditForm' ? '编辑成功！' : '成功！',
                      title: "提示：",
                      type: "warning",
                      loadingState: false
                    })
                    if (formName === 'oaAddForm') {
                      me.closeBtn('oaAddCard');
                    } else if (formName === 'oaEditForm') {
                      me.closeBtn('oaEditCard');
                    } else {
                      return;
                    }
                    //重新获取数据
                    me.getDataList();
                  } else {
                    me.$messageBox({
                      vm: me,
                      message: formName === 'oaAddForm' ? "新建失败！" : formName === 'oaEditForm' ? '编辑失败！' : '失败！',
                      title: "提示：",
                      type: "warning"
                    })
                    me.submitReset(formName);
                  }
                });
              }else{
                if (formName === 'oaEditForm') {
                  me.closeBtn('oaEditCard');
                }
              }
            }
            else {
              return false;
            }
          }
        )
        ;
      },
      submitReset(formName)
      {
        if (formName === 'oaAddForm') {
          if (this.$data[formName].id) {
            this.$data[formName] = {
              id: this.$data[formName].id,
              name: "",
              phone: "",
              identityCard: "",
              position: "",
              department: '',
              entryDate: "",
              poststyle: ""
            }
          }
        } else if (formName === 'oaEditForm') {
          if (this.$data.oaEditCopyForm && this.$data.oaEditCopyForm.id) {
            this.$data[formName] = {
              id: this.$data.oaEditCopyForm.id,
              name: this.$data.oaEditCopyForm.name,
              phone: this.$data.oaEditCopyForm.phone,
              department: this.$data.oaEditCopyForm.department,
              identityCard: this.$data.oaEditCopyForm.identityCard,
              position: this.$data.oaEditCopyForm.position,
              entryDate: this.$data.oaEditCopyForm.entryDate,
              poststyle: this.$data.oaEditCopyForm.poststyle
            }
          }
        }
        this.$refs[formName].resetFields();
      }
      ,
      keywordsSearchClick()
      {
        this.$messageBox({vm: this, message: "暂不支持关键词搜索！", title: "提示：", type: 'warning'});
      }
      ,
      deleteSingleBtn(deleteId)
      {
        deleteById({vm: this, url: this.$constant.OAMANAGEDELETE, deleteId, callback: this.getDataList});
      }
      ,
      closeBtn(showName)
      {
        if (showName !== undefined && this.$data[showName]) {
          let datas = {
            id: '',
            name: "",
            phone: "",
            identityCard: "",
            department: '',
            position: "",
            entryDate: "",
            poststyle: ""
          };
          if (showName === 'oaAddCard') {
            this.oaAddForm = datas;
          } else if (showName === 'oaEditCard') {
            this.oaEditForm = datas;
            this.oaEditCopyForm = {
              id: '',
              name: "",
              phone: "",
              department: '',
              identityCard: "",
              position: "",
              entryDate: "",
              poststyle: ""
            };
            ;//清空副本数据
          } else if (showName === 'oaDetailCard') {
            this.oaDetailForm = datas;
          } else {
            return;
          }
          this.$data[showName] = false;
        }
      }
      ,
      openBtn(showName, id)
      {
        let me = this;
        if (!this.$data[showName]) {
          if (this.$constant.OAMANAGEINNIT) {
            this.$http({
              url: this.$constant.OAMANAGEINNIT,
              vm: me,
              method: "GET",
              params: {id: id !== undefined ? id : ''}
            }, function (data) {
              if (data && data.code === 200 && data.message === '成功') {
                if (data.data && data.data.employee) {
                  let dt = data.data.employee;
                  let datas = {
                    id: me.$handleData(dt.id),
                    name: me.$handleData(dt.name),
                    phone: me.$handleData(dt.mobile),
                    department: me.$handleData(dt.department),
                    identityCard: me.$handleData(dt.idCard),
                    position: me.$handleData(dt.post),
                    //entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime),true),
                    entryDate: me.$handleData(dt.entryTime) === '' ? '' : new Date(dt.entryTime),
                    poststyle: me.$handleData(dt.poststyle),
                  }
                  if (datas.id !== undefined) {//拿到id才显示
                    if (showName === 'oaAddCard') {
                      me.oaAddForm = datas;
                    } else if (showName === 'oaEditCard') {
                      me.oaEditForm = datas;
                      me.oaEditCopyForm = {
                        id: me.$handleData(dt.id),
                        name: me.$handleData(dt.name),
                        phone: me.$handleData(dt.mobile),
                        department: me.$handleData(dt.department),
                        identityCard: me.$handleData(dt.idCard),
                        position: me.$handleData(dt.post),
                        //entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime), true),
                        entryDate:new Date(dt.entryTime),
                        poststyle: me.$handleData(dt.poststyle),
                      };//添加副本元素 便于重置
                    } else if (showName === 'oaDetailCard') {
                      me.oaDetailForm = datas;
                    } else {
                      return;
                    }
                    me.$data[showName] = true;
                  }
                }
              } else {
                me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
              }
            });
          }
        }
      }
      ,
      cgxpageHandle(data)
      {
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data && data.data.length > 0) {
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  id: me.$handleData(dt.id),
                  name: me.$handleData(dt.name),
                  phone: me.$handleData(dt.mobile),
                  department: me.$handleData(dt.department),
                  identityCard: me.$handleData(dt.idCard),
                  position: me.$handleData(dt.post),
                  entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime), true),
                  poststyle: me.$handleData(dt.poststyle),
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = data.currentPage;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
      ,
      cgxpagesizeHandle(data)
      {
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data && data.data.length > 0) {
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  id: me.$handleData(dt.id),
                  name: me.$handleData(dt.name),
                  phone: me.$handleData(dt.mobile),
                  department: me.$handleData(dt.department),
                  identityCard: me.$handleData(dt.idCard),
                  position: me.$handleData(dt.post),
                  entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime), true),
                  poststyle: me.$handleData(dt.poststyle),
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = 1;
          me.pageSize = data.pageSize;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
      ,
      getDataList()
      {//获取数据列表
        if (this.$constant.OAMANAGE) {
          let me = this;
          this.loading = true;
          this.total = 0;
          this.pageUrl = this.$constant.OAMANAGE;
          this.$http({
            url: this.$constant.OAMANAGE,
            vm: me,
            method: "GET",
            params: {page: 1, rows: this.pageSize}
          }, function (data) {
            if (data) {
              if (data.code === 200 && data.message === '成功') {
                if (data.data && data.data.length > 0) {
                  if (data.data[0].total !== undefined) {
                    me.total = data.data[0].total;
                  }
                  let arr = [];
                  for (let i = 0; i < data.data.length; i++) {
                    let dt = data.data[i];
                    arr.push({
                      id: me.$handleData(dt.id),
                      name: me.$handleData(dt.name),
                      phone: me.$handleData(dt.mobile),
                      department: me.$handleData(dt.department),
                      identityCard: me.$handleData(dt.idCard),
                      position: me.$handleData(dt.post),
                      entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(me.$handleData(dt.entryTime), true),
                      poststyle: me.$handleData(dt.poststyle),
                    });
                  }
                  me.tableData = arr;
                  me.currentPage = 1;
                } else {
                  me.tableData = [];
                }
              } else {
                me.tableData = [];
              }
              me.loading = false;
            } else {
              me.tableData = [];
              me.total = 0;
              me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
            }
          });
        }
      }
    }
    ,
    components: {
      defineContent
    },
    computed: {
      getFormat(){
        return this.$handleData(this.oaDetailForm.entryDate) === '' ? '' : formatDate(this.$handleData(this.oaDetailForm.entryDate), true)
      }
    }
  }
</script>

<style lang='scss'>
  .oa-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    padding-top: 66px !important;
    height: 100%;
    //min-height:466px;
    //max-height:100%;
    & > .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
    .oa-add-btn {
      margin-left: 20px;
    }
    & > .el-card__header {
      padding: 0 !important;
      height: 36px;
      position: absolute;
      border: none;
      top: 20px;
      left: 20px;
    }
    .oa-card-header {
      height: 36px;
      overflow: hidden;
      text-align: left;
      & > div {
        float: left;
      }
      .el-upload .el-button {
        height: 36px;
      }
    }
    .oa-card-body {
      height: 100%;
    }
    .el-button {
      i {
        margin-right: 6px;
      }
    }
    .el-input {
      width: 260px;
      margin-left: 20px;
    }
  }

  .oa-card {
    table {
      width: 100% !important;
    }
    div.cell {
      padding: 0 5px;
      width: 100% !important;
      box-sizing: border-box;
      span {
        cursor: pointer;
        margin-left: 10px;
        display: inline-block;
        height: 24px;
        width: 60px;
        line-height: 24px;
        text-align: center;
        &:first-child {
          margin-left: 0;
        }
        i {
          margin-right: 5px;
        }
      }
    }
    .oa-add, .oa-edit, .oa-detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .oa-add-card {
    width: 500px;
    height: 436px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -218px;
    margin-left: -250px;
    .el-card__header {
      padding: 10px;
      font-size: 18px;
    }
    .el-button + .el-button {
      margin-left: 50px;
    }
    .oa-add-card-header {
      height: 30px;
      line-height: 30px;
      position: relative;
      i {
        font-size: 28px;
        position: absolute;
        top: 1px;
        right: 1px;
        cursor: pointer;
      }
    }
    .el-card__body {
      padding: 10px !important;
      height: 438-51px;
      overflow: auto;
      box-sizing: border-box;
      .el-form-item {
        //margin-bottom: 10px;
      }
      .el-input {
        width: 100%;
        margin-left: 0;
      }
      .el-radio-group {
        padding: 0 20px;
        width: 260px;
        box-sizing: border-box;
      }
      .float-first {
        margin-right: 78px;
      }
      .float-second {
        margin-right: 88px;
      }
      .radio-el-form-item {
        text-align: left;
      }
    }
  }
</style>

