<template>
  <el-card class="box-card banner-card" v-loading.body="loading">
    <div slot="header" class="clearfix banner-card-header">
      <el-button type="primary" @click="openBtn('bannerAddCard')"><i class="el-icon-plus"></i>新&nbsp;&nbsp;&nbsp;建
      </el-button>
      <!--<el-input-->
        <!--placeholder="请输入搜索关键词"-->
        <!--icon="search"-->
        <!--v-model="keywords"-->
        <!--:on-icon-click="keywordsSearchClick">-->
      <!--</el-input>-->
    </div>
    <div class="banner-card-body">
      <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl"
                      :currentPage='currentPage' :pageSize='pageSize' :cgxpagesizeHandle="cgxpagesizeHandle">
        <el-table-column
          type="index"
          label="编号"
          width='8%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="预览"
          width='10%'
          show-overflow-tooltip
        >
          <template scope="scope">
            <img
              :src="scope.row.bannerUrl.indexOf('base64') > 0 ? scope.row.bannerUrl :  imageUrl + scope.row.bannerUrl"
              :title="scope.row.bannerTitle" @error="noFind($event)">
          </template>
        </el-table-column>
        <el-table-column
          prop="bannerType"
          label="类型"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="bannerTitle"
          label="主题"
          width='15%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="bannerUrl"
          label="URL"
          width='22%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="bannerState"
          label="状态"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width='25%'
          show-overflow-tooltip
          class="operation"
        >
          <template scope="scope">
            <span @click="openBtn('bannerDetailCard',scope.row.id)"><i class="el-icon-view"></i>查看</span>
            <span @click="openBtn('bannerEditCard',scope.row.id)"><i class="el-icon-edit"></i>修改</span>
            <span @click="deleteSingleBtn(scope.row.id)"><i class="el-icon-delete"></i>删除</span>
          </template>
        </el-table-column>
      </define-content>
    </div>
    <div class="banner-add" v-if='bannerAddCard'>
      <el-card class="box-card banner-add-card">
        <div slot="header" class="clearfix banner-add-card-header">
          <span>新&nbsp;&nbsp;&nbsp;建</span>
          <i class="el-icon-circle-close" @click="closeBtn('bannerAddCard')"></i>
        </div>
        <div class="banner-add-card-body">
          <el-form ref="bannerAddForm" :rules="editRules" :model="bannerAddForm" label-width="100px">
            <el-form-item label="类型：" prop="btype" class="radio-el-form-item">
              <el-radio-group v-model="bannerAddForm.btype">
                <el-radio :label="1" class="float-left">首页</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="主题：" prop="title">
              <el-input v-model.trim="bannerAddForm.title"></el-input>
            </el-form-item>
            <el-form-item label="URL：" prop="url">
              <el-input v-model.trim="bannerAddForm.url" readonly></el-input>
            </el-form-item>
            <el-form-item label="落地页URL：" prop="linkUrl">
              <el-input v-model.trim="bannerAddForm.linkUrl"></el-input>
            </el-form-item>
            <el-form-item label="状态：" class="radio-el-form-item" prop="state">
              <el-radio-group v-model="bannerAddForm.state">
                <el-radio :label="1" class="float-left float-second">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="上传：" prop="bannerFiles" class="upload-el-form-item upload-el-form-item-edit">
              <label for="addFile" class="editImg">选取banner<input @change='imgChange($event,"bannerAddForm")'
                                                                  type="file"
                                                                  id="addFile"></label>
              <div class="image-preview">
                <img
                  :src="bannerAddForm.url === '' ? '#' : bannerAddForm.url.indexOf('base64') > 0 ? bannerAddForm.url :  imageUrl + bannerAddForm.url"
                  title="预览" @error="noFind($event)">
              </div>
            </el-form-item>
            <el-form-item class="el-form-btn-item">
              <el-button type="primary" @click.prevent="submitSure('bannerAddForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('bannerAddForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="banner-edit" v-if='bannerEditCard'>
      <el-card class="box-card banner-add-card">
        <div slot="header" class="clearfix banner-add-card-header">
          <span>编&nbsp;&nbsp;&nbsp;辑</span>
          <i class="el-icon-circle-close" @click="closeBtn('bannerEditCard')"></i>
        </div>
        <div class="banner-add-card-body">
          <el-form ref="bannerEditForm" id="bannerEditForm" :rules='editRules' :model="bannerEditForm"
                   label-width="100px" enctype="multipart/form-data">
            <el-form-item label="类型：" prop="btype" class="radio-el-form-item">
              <el-radio-group v-model="bannerEditForm.btype">
                <el-radio :label="1" class="float-left">首页</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="主题：" prop="title">
              <el-input v-model.trim="bannerEditForm.title"></el-input>
            </el-form-item>
            <el-form-item label="URL：" prop="url">
              <el-input v-model.trim="bannerEditForm.url" readonly></el-input>
            </el-form-item>
            <el-form-item label="落地页URL：" prop="linkUrl">
              <el-input v-model.trim="bannerEditForm.linkUrl"></el-input>
            </el-form-item>
            <el-form-item label="状态：" class="radio-el-form-item" prop="state">
              <el-radio-group v-model="bannerEditForm.state">
                <el-radio :label="1" class="float-left float-second">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="上传：" prop="bannerFiles" class="upload-el-form-item upload-el-form-item-edit">
              <label for="editFile" class="editImg">选取banner<input @change='imgChange($event,"bannerEditForm")'
                                                                   type="file"
                                                                   id="editFile"></label>
              <div class="image-preview">
                <img
                  :src="bannerEditForm.url.indexOf('base64') > 0 ? bannerEditForm.url :  imageUrl + bannerEditForm.url"
                  title="预览" @error="noFind($event)">
              </div>
            </el-form-item>
            <el-form-item class="el-form-btn-item">
              <el-button type="primary" @click.prevent="submitSure('bannerEditForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('bannerEditForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="banner-detail" v-if='bannerDetailCard'>
      <el-card class="box-card banner-add-card banner-detail-card">
        <div slot="header" class="clearfix banner-add-card-header">
          <span>详&nbsp;&nbsp;&nbsp;情</span>
          <i class="el-icon-circle-close" @click="closeBtn('bannerDetailCard')"></i>
        </div>
        <div class="banner-add-card-body">
          <el-form ref="bannerDetailForm" :model="bannerDetailForm" label-width="100px">
            <el-form-item label="类型：" class="radio-el-form-item">
              <el-radio-group v-model="bannerDetailForm.btype" disabled>
                <el-radio :label="1" class="float-left">首页</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="主题：">
              <el-input v-model.trim="bannerDetailForm.title" readonly></el-input>
            </el-form-item>
            <el-form-item label="URL：">
              <el-input v-model.trim="bannerDetailForm.url" readonly></el-input>
            </el-form-item>
            <el-form-item label="落地页URL：" prop="linkUrl">
              <el-input v-model.trim="bannerDetailForm.linkUrl" readonly></el-input>
            </el-form-item>
            <el-form-item label="状态：" class="radio-el-form-item">
              <el-radio-group v-model="bannerDetailForm.state" disabled>
                <el-radio :label="1" class="float-left float-second">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="预览：" class="upload-el-form-item">
              <div class="image-preview">
                <img
                  :src="bannerDetailForm.url.indexOf('base64') > 0 ? bannerDetailForm.url :  imageUrl + bannerDetailForm.url"
                  title="预览" @error="noFind($event)">
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </el-card>
</template>

<script>
  import defineContent from './content';
  import deleteById from '../api/delete';
  import $ from 'jquery';
  import loginTimeout from '../api/loginTimeout';
  export default {
    data(){
      let validateBannerType = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择banner类型！'));
        } else {
          callback();
        }
      };
      let validateBannerTitle = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入banner主题！'));
        } else {
          callback();
        }
      };
      let validateLinkUrl = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入banner落地页链接！'));
        } else {
          callback();
        }
      };
      let validateBannerState = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择banner状态！'));
        } else {
          callback();
        }
      };
      return {
        bannerAddCard: false,
        bannerDetailCard: false,
        bannerEditCard: false,
        bannerAddAction: '',
        bannerEditAction: '',
        editRules: {
          btype: [
            {validator: validateBannerType, trigger: 'change'}
          ],
          title: [
            {validator: validateBannerTitle, trigger: 'blur'}
          ],
          linkUrl: [
            {validator: validateLinkUrl, trigger: 'blur'}
          ],
          state: [
            {validator: validateBannerState, trigger: 'change'}
          ]
        },
        tableData: [],
        bannerAddForm: {
          id: "",
          btype: 1,
          title: '',
          url: '',
          state: 1,
          linkUrl:"",
          file: '',
          creator_id: "",
          updater_id: ""
        },
        bannerDetailForm: {
          id: "",
          btype: '',
          title: '',
          linkUrl:"",
          url: '',
          state: '',
          creator_id: "",
          updater_id: ""
        },
        bannerEditForm: {
          id: "",
          btype: '',
          title: '',
          linkUrl:"",
          url: '',
          state: '',
          file: '',
          creator_id: "",
          updater_id: ""
        },
        bannerEditCopyForm: {
          id: "",
          btype: '',
          title: '',
          linkUrl:"",
          url: '',
          state: '',
          file: '',
          creator_id: "",
          updater_id: ""
        },
        keywords: '',
        pageUrl: '',
        total: 0,
        loading: false,
        currentPage: 1,
        pageSize: 20,
        headers: {},
        imageUrl: this.$constant.IMAGEURL,
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: 'banner管理', url: 'bannerManage'}];
      if (this.$constant.BANNERMANAGEUPLOAD) {
        this.bannerAddAction = this.$constant.BANNERMANAGEUPLOAD;
        this.bannerEditAction = this.$constant.BANNERMANAGEUPLOAD;
      }
      let session = this.$session({key: "loginMsg"});
      if (session && session.token !== undefined) {
        this.headers = {
          Authorization: session.token
        }
      } else {
        this.headers = {};
      }
      if (this.$constant.BANNERMANAGE) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.BANNERMANAGE;
        this.$http({
          url: this.$constant.BANNERMANAGE,
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
                    bannerType: me.$handleData(dt.type) === 1 ? '首页' : "",
                    bannerTitle: me.$handleData(dt.title),
                    bannerUrl: me.$handleData(dt.url),
                    linkUrl: me.$handleData(dt.linkUrl),
                    bannerState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
      imgChange(event, formName){
        let me = this;
        let files = event.target.files || event.dataTransfer.files;
        if (files && files.length > 0) {
          let file = files[0];
          this[formName].file = file;
          if (window.FileReader) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
              if (formName !== '') {
                me[formName].url = event.target.result;
              }
              me.beforeUpload(file);//检查图片是否合法
            }
          } else {//不支持图片预览
            this.$messageBox({vm: this, title: "提示：", message: "您当前浏览器不支持图片预览!", type: "warning"});
          }
        }
      },
      beforeUpload(file){
        if (file && file.name != '') {
          let strRegex = "(.jpg|.png|.gif)$",
            reg = new RegExp(strRegex);
          if (!reg.test(file.name.toLowerCase())) {
            this.$messageBox({
              vm: this,
              title: "错误：",
              message: "文件不合法，请上传以jpg、png、gif为后缀的文件！",
              type: "error"
            });
            return false;
          } else {
            if (file.size / (1024) > 600) {
              this.$messageBox({vm: this, title: "提示：", message: "文件上传失败，请上传小于600KB的文件！", type: "warning"});
              return false;
            } else {
              return true;
            }
          }
        } else {
          this.$messageBox({vm: this, title: "提示：", message: "您当前选择的文件无效，请从新选择！", type: "warning"});
          return false;
        }
      },
      uploadSuccess(data, formName){
        let me = this;
        if (data) {
          if (data.code === 200) {
            me.$messageBox({
              vm: me,
              message: formName === 'bannerAddForm' ? "新建成功！" : formName === 'bannerEditForm' ? '编辑成功！' : '成功！',
              title: "提示：",
              type: "warning",
              loadingState: false
            });
            if (formName === 'bannerAddForm') {
              me.closeBtn('bannerAddCard');
            } else if (formName === 'bannerEditForm') {
              me.closeBtn('bannerEditCard');
            } else {
              return;
            }
            //重新获取数据
            me.getDataList();
          } else if (data.code === -100) {
            loginTimeout(data, me);
          } else if(data.code === -1010){
            me.$messageBox({
              vm: me,
              message:"启用banner已达到上限！",
              title: "提示：",
              type: "warning"
            });
            me.submitReset(formName);
          } else {
            me.$messageBox({
              vm: me,
              message: formName === 'bannerAddForm' ? "新建失败！" : formName === 'bannerEditForm' ? '编辑失败！' : '失败！',
              title: "提示：",
              type: "warning"
            });
            me.submitReset(formName);
          }
        } else {
          me.$messageBox({
            vm: me,
            message: formName === 'bannerAddForm' ? "新建失败！" : formName === 'bannerEditForm' ? '编辑失败！' : '失败！',
            title: "提示：",
            type: "warning"
          });
        }
      },
      submitSure(formName)
      {
        let me = this;
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = null;
              if (formName === 'bannerAddForm') {
                data = this.bannerAddForm;
              } else if (formName === 'bannerEditForm') {
                for (let key in this.bannerEditForm) {
                  if (this.bannerEditForm[key] != this.bannerEditCopyForm[key]) {
                    data = this.bannerEditForm;
                    break;
                  }
                }
              } else {
                return;
              }
              if (this.$constant.BANNERMANAGEUPLOAD && data && data.id !== '') {
                if (this[formName].file != '') {
                  let flag = this.beforeUpload(this[formName].file);
                  if (flag === false) {
                    return;
                  }
                } else {
                  if (formName === 'bannerAddForm') {
                    this.$messageBox({vm: this, title: "提示：", message: "请选择需上传的图片!", type: "warning"});
                    return;
                  }
                }
                let formData = null;
                if (window.FormData) {
                  formData = new FormData();
                  for (let key in this[formName]) {
                      if(key !== 'url'){
                        formData.append(key, this[formName][key]);
                      }
                  }
                  let session = this.$session({key: "loginMsg"});
                  let me = this;
                  $.ajax({
                    url: this.$constant.BANNERMANAGEUPLOAD,
                    type: "POST",
                    data: formData,
                    processData: false,  // 告诉jQuery不要去处理发送的数据
                    contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
                    beforeSend: function (xhr) {
                      xhr.setRequestHeader('Authorization', session.token);
                    },//这里设置header
                    success(data){
                      me.uploadSuccess(data, formName)
                    },
                    error(data){
                      me.$messageBox({vm: me, title: "错误：", message: "banner编辑失败!", type: "error"});
                    }
                  });
                } else {//不支持上传图片
                  this.$messageBox({vm: this, title: "提示：", message: "您当前浏览器不支持图片上传!", type: "warning"});
                }
              } else {
                if (formName === 'bannerEditForm') {
                  me.closeBtn('bannerEditCard');
                }
              }
            }
            else {
              return false;
            }
          }
        )
        ;
      }
      ,
      submitReset(formName)
      {
        if (formName === 'bannerAddForm') {
          if (this.$data[formName].id) {
            this.$refs[formName].$el.reset();
            this.$data[formName] = {
              id: this.$data[formName].id,
              btype: 1,
              title: '',
              url: '',
              state: 1,
              linkUrl:"",
              creator_id: "",
              updater_id: "",
              file: '',
            }
          }
        } else if (formName === 'bannerEditForm') {
          if (this.$data.bannerEditCopyForm && this.$data.bannerEditCopyForm.id) {
            this.$refs[formName].$el.reset();
            this.$data[formName] = {
              id: this.$data.bannerEditCopyForm.id,
              btype: this.$data.bannerEditCopyForm.btype,
              title: this.$data.bannerEditCopyForm.title,
              url: this.$data.bannerEditCopyForm.url,
              linkUrl:this.$data.bannerEditCopyForm.linkUrl,
              state: this.$data.bannerEditCopyForm.state,
              creator_id: this.$data.bannerEditCopyForm.creator_id,
              updater_id: this.$data.bannerEditCopyForm.updater_id,
              file: this.$data.bannerEditCopyForm.file,
            }
          }
        }
        this.$refs[formName].resetFields();
      }
      ,
      closeBtn(showName)
      {
        if (showName !== undefined && this.$data[showName]) {
          let datas = {
            id: '',
            btype: '',
            title: '',
            url: '',
            state: '',
            linkUrl:"",
            creator_id: "",
            updater_id: "",
            file: '',
          };
          if (showName === 'bannerAddCard') {
            this.bannerAddForm = datas;
          } else if (showName === 'bannerEditCard') {
            this.bannerEditForm = datas;
            this.bannerEditCopyForm = {
              id: '',
              btype: '',
              title: '',
              url: '',
              linkUrl:"",
              state: '',
              creator_id: "",
              updater_id: "",
              file: '',
            };
            ;//清空副本数据
          } else if (showName === 'bannerDetailCard') {
            this.bannerDetailForm = datas;
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
          if (this.$constant.BANNERMANAGEINIT) {
            this.$http({
              url: this.$constant.BANNERMANAGEINIT,
              vm: me,
              method: "GET",
              params: {id: id !== undefined ? id : ''}
            }, function (data) {
              if (data && data.code === 200 && data.message === '成功') {
                if (data.data && data.data.banner) {
                  let session = me.$session({key: 'loginMsg'});
                  let dt = data.data.banner;
                  let datas = {
                    id: me.$handleData(dt.id),
                    btype: me.$handleData(dt.type) === '' ? 1 : me.$handleData(dt.type),
                    title: me.$handleData(dt.title),
                    url: me.$handleData(dt.url),
                    linkUrl: me.$handleData(dt.linkUrl),
                    state: me.$handleData(dt.state) === '' ? 1 : me.$handleData(dt.state),
                    creator_id: "",
                    updater_id: "",
                    file: '',
                  };
                  if (datas.id !== undefined) {//拿到id才显示
                    if (showName === 'bannerAddCard') {
                      if (session && session.userId !== undefined) {
                        datas.creator_id = session.userId;
                      }
                      me.bannerAddForm = datas;
                    } else if (showName === 'bannerEditCard') {
                      if (session && session.userId !== undefined) {
                        datas.updater_id = session.userId;
                      }
                      me.bannerEditForm = datas;
                      me.bannerEditCopyForm = {
                        id: me.$handleData(dt.id),
                        btype: me.$handleData(dt.type),
                        title: me.$handleData(dt.title),
                        linkUrl: me.$handleData(dt.linkUrl),
                        url: me.$handleData(dt.url),
                        state: me.$handleData(dt.state),
                        creator_id: "",
                        file: "",
                        updater_id: datas.updater_id
                      };//添加副本元素 便于重置
                    } else if (showName === 'bannerDetailCard') {
                      me.bannerDetailForm = datas;
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
      keywordsSearchClick()
      {
        this.$messageBox({vm: this, message: "暂不支持关键词搜索！", title: "提示：", type: 'warning'});
      },
      noFind($event)
      {
        let target = $event.currentTarget;
        if (target) {
          target.src = require('../assets/imgunfound.png');
        }
      }
      ,
      deleteSingleBtn(deleteId)
      {
        deleteById({vm: this, url: this.$constant.BANNERMANAGEDELETE, deleteId, callback: this.getDataList});
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
                  bannerType: me.$handleData(dt.type) === 1 ? '首页' : "",
                  bannerTitle: me.$handleData(dt.title),
                  linkUrl: me.$handleData(dt.linkUrl),
                  bannerUrl: me.$handleData(dt.url),
                  bannerState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
                  bannerType: me.$handleData(dt.type) === 1 ? '首页' : "",
                  bannerTitle: me.$handleData(dt.title),
                  linkUrl: me.$handleData(dt.linkUrl),
                  bannerUrl: me.$handleData(dt.url),
                  bannerState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
        if (this.$constant.BANNERMANAGE) {
          let me = this;
          this.loading = true;
          this.total = 0;
          this.pageUrl = this.$constant.BANNERMANAGE;
          this.$http({
            url: this.$constant.BANNERMANAGE,
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
                      bannerType: me.$handleData(dt.type) === 1 ? '首页' : "",
                      bannerTitle: me.$handleData(dt.title),
                      linkUrl: me.$handleData(dt.linkUrl),
                      bannerUrl: me.$handleData(dt.url),
                      bannerState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
    }
  }
</script>

<style lang='scss'>
  .banner-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    padding-top: 66px !important;
    height: 100%;
    //min-height:466px;
    //max-height:100%;
    .upload-el-form-item-edit {
      input {
        display: none;
      }
      label.editImg {
        display: inline-block;
        line-height: 28px;
        text-align: center;
        width: 80px;
        height: 28px;

        background-color: #20a0ff;
        border-color: #20a0ff;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        &:hover {
          border-color: #20a0ff;
          background: #4db3ff;
          border-color: #4db3ff;
        }
      }
    }
    & > .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
    .el-form-btn-item {
      //margin-bottom: 10px;
    }
    .el-radio-group {
      width: 100%;
    }
    & > .el-card__header {
      padding: 0 !important;
      height: 36px;
      position: absolute;
      border: none;
      top: 20px;
      left: 20px;
    }
    .banner-card-header {
      height: 36px;
      overflow: hidden;
      text-align: left;
    }
    .banner-card-body {
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

  .banner-card {
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
      img {
        height: 80px;
        max-width: 100%;
        margin-top: 5px;
      }
    }
    .el-table__body-wrapper {
      .cell {
        height: 90px;
        line-height: 90px;
      }
    }
    .banner-add, .banner-edit, .banner-detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
    .banner-detail {
      .upload-el-form-item .el-form-item__content .image-preview {
        left: 0 !important;
      }
    }
  }

  .banner-add-card {
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
    .upload-el-form-item {
      text-align: left;
      height: 88px;
      //margin-bottom: 10px;
      .el-form-item__content {
        height: 100%;
        position: relative;
        .image-preview {
          position: absolute;
          top: 4px;
          right: 0;
          height: 80px;
          line-height: 80px;
          text-align: center;
          width: 50%;
          box-sizing: border-box;
          border: 1px solid #ddd;
          overflow: hidden;
          img {
            max-width: 100%;
            height: 100%;
          }
        }
      }
    }
    .el-button + .el-button {
      margin-left: 50px;
    }
    .banner-add-card-header {
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
