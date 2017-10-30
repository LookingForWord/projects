<template>
  <el-card class="box-card version-card" v-loading.body="loading">
    <div slot="header" class="clearfix version-card-header">
      <el-button type="primary" @click="openBtn('versionAddCard')"><i class="el-icon-plus"></i>新&nbsp;&nbsp;&nbsp;建
      </el-button>
      <!--<el-input-->
        <!--placeholder="请输入搜索关键词"-->
        <!--icon="search"-->
        <!--v-model="keywords"-->
        <!--:on-icon-click="keywordsSearchClick">-->
      <!--</el-input>-->
    </div>
    <div class="version-card-body">
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
          prop="versionId"
          label="版本号"
          width='17%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="versionUrl"
          label="URL"
          width='30%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="versionType"
          label="类型"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="versionEffect"
          label="版本状态"
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
            <span @click="openBtn('versionDetailCard',scope.row.id)"><i class="el-icon-view"></i>查看</span>
            <span @click="openBtn('versionEditCard',scope.row.id)"><i class="el-icon-edit"></i>修改</span>
            <span @click="deleteSingleBtn(scope.row.id)"><i class="el-icon-delete"></i>删除</span>
          </template>
        </el-table-column>
      </define-content>
    </div>
    <div class="version-add" v-if='versionAddCard'>
      <el-card class="box-card version-add-card">
        <div slot="header" class="clearfix version-add-card-header">
          <span>新&nbsp;&nbsp;&nbsp;建</span>
          <i class="el-icon-circle-close" @click="closeBtn('versionAddCard')"></i>
        </div>
        <div class="version-add-card-body">
          <el-form ref="versionAddForm" :rules="editRules" :model="versionAddForm" label-width="100px">
            <el-form-item label="版本号：" prop="versionId">
              <el-input v-model.trim="versionAddForm.versionId"></el-input>
            </el-form-item>
            <el-form-item label="版本URL：" prop="versionUrl">
              <el-input v-model.trim="versionAddForm.versionUrl"></el-input>
            </el-form-item>
            <el-form-item label="版本类型：" class="radio-el-form-item" prop="versionType">
              <el-radio-group v-model="versionAddForm.versionType">
                <el-radio label="1" class="float-left float-first">iOS</el-radio>
                <el-radio label="2" class="float-left">Android</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本状态：" class="radio-el-form-item" prop="versionEffect">
              <el-radio-group v-model="versionAddForm.versionEffect">
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="强制升级：" class="radio-el-form-item" prop="versionForceUpdate">
              <el-radio-group v-model="versionAddForm.versionForceUpdate">
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本描述：" prop="versionDesc">
              <el-input type="textarea" v-model.trim="versionAddForm.versionDesc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('versionAddForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('versionAddForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="version-edit" v-if='versionEditCard'>
      <el-card class="box-card version-add-card">
        <div slot="header" class="clearfix version-add-card-header">
          <span>编&nbsp;&nbsp;&nbsp;辑</span>
          <i class="el-icon-circle-close" @click="closeBtn('versionEditCard')"></i>
        </div>
        <div class="version-add-card-body">
          <el-form ref="versionEditForm" :rules='editRules' :model="versionEditForm" label-width="100px">
            <el-form-item label="版本号：" prop="versionId">
              <el-input v-model.trim="versionEditForm.versionId"></el-input>
            </el-form-item>
            <el-form-item label="版本URL：" prop="versionUrl">
              <el-input v-model.trim="versionEditForm.versionUrl"></el-input>
            </el-form-item>
            <el-form-item label="版本类型：" class="radio-el-form-item" prop="versionType">
              <el-radio-group v-model="versionEditForm.versionType">
                <el-radio label="1" class="float-left float-first">iOS</el-radio>
                <el-radio label="2" class="float-left">Android</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本状态：" class="radio-el-form-item" prop="versionEffect">
              <el-radio-group v-model="versionEditForm.versionEffect">
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="强制升级：" class="radio-el-form-item" prop="versionForceUpdate">
              <el-radio-group v-model="versionEditForm.versionForceUpdate">
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本描述：" prop="versionDesc">
              <el-input type="textarea" v-model.trim="versionEditForm.versionDesc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('versionEditForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('versionEditForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="version-detail" v-if='versionDetailCard'>
      <el-card class="box-card version-add-card version-detail-card">
        <div slot="header" class="clearfix version-add-card-header">
          <span>详&nbsp;&nbsp;&nbsp;情</span>
          <i class="el-icon-circle-close" @click="closeBtn('versionDetailCard')"></i>
        </div>
        <div class="version-add-card-body">
          <el-form ref="versionDetailForm" :model="versionDetailForm" label-width="100px">
            <el-form-item label="版本号：">
              <el-input v-model="versionDetailForm.versionId" readonly></el-input>
            </el-form-item>
            <el-form-item label="版本URL：">
              <el-input v-model="versionDetailForm.versionUrl" readonly></el-input>
            </el-form-item>
            <el-form-item label="版本类型：" class="radio-el-form-item">
              <el-radio-group v-model="versionDetailForm.versionType" disabled>
                <el-radio label="1" class="float-left float-first">iOS</el-radio>
                <el-radio label="2" class="float-left">Android</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本状态：" class="radio-el-form-item">
              <el-radio-group v-model="versionDetailForm.versionEffect" disabled>
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="强制升级：" class="radio-el-form-item">
              <el-radio-group v-model="versionDetailForm.versionForceUpdate" disabled>
                <el-radio label="1" class="float-left float-second">启用</el-radio>
                <el-radio label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="版本描述：">
              <el-input type="textarea" v-model="versionDetailForm.versionDesc" readonly></el-input>
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
  export default {
    data(){
      let validateVersionId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入版本号！'));
        } else {
          callback();
        }
      };
      let validateVersionUrl = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入版本URL！'));
        } else {
          callback();
        }
      };
      let validateVersionType = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择版本类型！'));
        } else {
          callback();
        }
      };
      let validateVersionEffect = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择版本状态！'));
        } else {
          callback();
        }
      };
      let validateVersionForceUpdate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择版本是否强制升级！'));
        } else {
          callback();
        }
      };
      let validateVersionDesc = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写版本描述！'));
        } else {
          callback();
        }
      };
      return {
        versionAddCard: false,
        versionDetailCard: false,
        versionEditCard: false,
        editRules: {
          versionId: [
            {validator: validateVersionId, trigger: 'blur'}
          ],
          versionUrl: [
            {validator: validateVersionUrl, trigger: 'blur'}
          ],
          versionType: [
            {validator: validateVersionType, trigger: 'change'}
          ],
          versionEffect: [
            {validator: validateVersionEffect, trigger: 'change'}
          ],
          versionForceUpdate:[
            {validator: validateVersionForceUpdate, trigger: 'change'}
          ],
          versionDesc: [
            {validator: validateVersionDesc, trigger: 'blur'}
          ]
        },
        tableData: [],
        versionAddForm: {
          versionId: '',
          versionUrl: '',
          versionType: '',
          versionEffect: '',
          versionDesc: '',
          versionForceUpdate:"",
          id: ''
        },
        versionDetailForm: {
          versionId: '',
          versionUrl: '',
          versionType: '',
          versionEffect: '',
          versionDesc: '',
          versionForceUpdate:"",
          id: ''
        },
        versionEditForm: {
          versionId: '',
          versionUrl: '',
          versionType: '',
          versionEffect: '',
          versionDesc: '',
          versionForceUpdate:"",
          id: ''
        },
        versionEditCopyForm: {
          versionId: '',
          versionUrl: '',
          versionType: '',
          versionEffect: '',
          versionDesc: '',
          versionForceUpdate:"",
          id: ''
        },
        keywords: '',
        pageUrl: '',
        total: 0,
        loading: false,
        currentPage: 1,
        pageSize: 20
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '版本管理', url: 'versionManage'}];
      if (this.$constant.VERSIONMANAGEURL) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.VERSIONMANAGEURL;
        this.$http({
          url: this.$constant.VERSIONMANAGEURL,
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
                    versionId: me.$handleData(dt.versionNo),
                    versionUrl: me.$handleData(dt.url),
                    versionType: me.$handleData(dt.type) === '1' ? 'iOS' : me.$handleData(dt.type) === '2' ? 'Android' : '',
                    versionEffect: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
                    versionForceUpdate: me.$handleData(dt.forceRenewal) === 1 ? '启用' : me.$handleData(dt.forceRenewal) === 0 ? '禁用' : '',
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
      submitSure(formName){
        let me = this;
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = null;
              if (formName === 'versionAddForm') {
                data = this.versionAddForm;
              } else if (formName === 'versionEditForm') {
                for (let key in this.versionEditForm) {
                  if (this.versionEditForm[key] !== this.versionEditCopyForm[key]) {
                    data = this.versionEditForm;
                    break;
                  }
                }
              } else {
                return;
              }
              if (this.$constant.VERSIONMANAGESAVE && data && data.id !== '') {
                this.$http({
                  url: this.$constant.VERSIONMANAGESAVE,
                  vm: me,
                  method: "POST",
                  data: {
                    "id": data.id,
                    "type": data.versionType,
                    "versionNo": data.versionId,
                    "url": data.versionUrl,
                    "description": data.versionDesc,
                    "state": data.versionEffect,
                    "forceRenewal":data.versionForceUpdate
                  }
                }, function (data) {
                  if (data === true) {
                    me.$messageBox({
                      vm: me,
                      message: formName === 'versionAddForm' ? "新建成功！" : formName === 'versionEditForm' ? '编辑成功！' : '成功！',
                      title: "提示：",
                      type: "warning",
                      loadingState: false
                    })
                    if (formName === 'versionAddForm') {
                      me.closeBtn('versionAddCard');
                    } else if (formName === 'versionEditForm') {
                      me.closeBtn('versionEditCard');
                    } else {
                      return;
                    }
                    //重新获取数据
                    me.getDataList();
                  } else {
                    me.$messageBox({
                      vm: me,
                      message: formName === 'versionAddForm' ? "新建失败！" : formName === 'versionEditForm' ? '编辑失败！' : '失败！',
                      title: "提示：",
                      type: "warning"
                    })
                    me.submitReset(formName);
                  }
                });
              }else{
                if (formName === 'versionEditForm') {
                  me.closeBtn('versionEditCard');
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
        if (formName === 'versionAddForm') {
          if (this.$data[formName].id) {
            this.$data[formName] = {
              versionId: '',
              versionUrl: '',
              versionType: '',
              versionEffect: '',
              versionDesc: '',
              versionForceUpdate:"",
              id: this.$data[formName].id
            }
          }
        } else if (formName === 'versionEditForm') {
          if (this.$data.versionEditCopyForm && this.$data.versionEditCopyForm.id) {
            this.$data[formName] = {
              versionId: this.$data.versionEditCopyForm.versionId,
              versionUrl: this.$data.versionEditCopyForm.versionUrl,
              versionType: this.$data.versionEditCopyForm.versionType,
              versionEffect: this.$data.versionEditCopyForm.versionEffect,
              versionDesc: this.$data.versionEditCopyForm.versionDesc,
              versionForceUpdate:this.$data.versionEditCopyForm.versionForceUpdate,
              id: this.$data.versionEditCopyForm.id
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
        deleteById({vm:this,url:this.$constant.VERSIONMANAGEDELETE,deleteId,callback:this.getDataList});
      }
      ,
      closeBtn(showName)
      {
        if (showName !== undefined && this.$data[showName]) {
          let datas = {
            versionId: '',
            versionUrl: '',
            versionType: '',
            versionEffect: '',
            versionDesc: '',
            versionForceUpdate:"",
            id: '',
          };
          if (showName === 'versionAddCard') {
            this.versionAddForm = datas;
          } else if (showName === 'versionEditCard') {
            this.versionEditForm = datas;
            this.versionEditCopyForm = {
              versionId: '',
              versionUrl: '',
              versionType: '',
              versionEffect: '',
              versionDesc: '',
              versionForceUpdate:"",
              id: '',
            };;//清空副本数据
          } else if (showName === 'versionDetailCard') {
            this.versionDetailForm = datas;
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
          if (this.$constant.VERSIONMANAGEADD) {
            this.$http({
              url: this.$constant.VERSIONMANAGEADD,
              vm: me,
              method: "GET",
              params: {id: id !== undefined ? id : ''}
            }, function (data) {
              if (data && data.code === 200 && data.message === '成功') {
                if (data.data && data.data.appVersion) {
                  let dt = data.data.appVersion;
                  let datas = {
                    versionId: me.$handleData(dt.versionNo),
                    versionUrl: me.$handleData(dt.url),
                    versionType: me.$handleData(dt.type)+'',
                    versionEffect: me.$handleData(dt.state)+'',
                    versionForceUpdate: me.$handleData(dt.forceRenewal)+'',
                    versionDesc: me.$handleData(dt.description),
                    id: me.$handleData(dt.id)
                  }
                  if (datas.id !== undefined) {//拿到id才显示
                    if (showName === 'versionAddCard') {
                      me.versionAddForm = datas;
                    } else if (showName === 'versionEditCard') {
                      me.versionEditForm = datas;
                      me.versionEditCopyForm = {
                        versionId: me.$handleData(dt.versionNo),
                        versionUrl: me.$handleData(dt.url),
                        versionType: me.$handleData(dt.type)+'',
                        versionEffect: me.$handleData(dt.state)+"",
                        versionForceUpdate: me.$handleData(dt.forceRenewal)+"",
                        versionDesc: me.$handleData(dt.description),
                        id: me.$handleData(dt.id)
                      };//添加副本元素 便于重置
                    } else if (showName === 'versionDetailCard') {
                      me.versionDetailForm = datas;
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
                  versionId: me.$handleData(dt.versionNo),
                  versionUrl: me.$handleData(dt.url),
                  versionType: me.$handleData(dt.type) === '1' ? 'iOS' : me.$handleData(dt.type) === '2' ? 'Android' : '',
                  versionEffect: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
                  versionForceUpdate: me.$handleData(dt.forceRenewal) === 1 ? '启用' : me.$handleData(dt.forceRenewal) === 0 ? '禁用' : '',
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
                  versionId: me.$handleData(dt.versionNo),
                  versionUrl: me.$handleData(dt.url),
                  versionType: me.$handleData(dt.type) === '1' ? 'iOS' : me.$handleData(dt.type) === '2' ? 'Android' : '',
                  versionEffect: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
                  versionForceUpdate: me.$handleData(dt.forceRenewal) === 1 ? '启用' : me.$handleData(dt.forceRenewal) === 0 ? '禁用' : '',
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
        if (this.$constant.VERSIONMANAGEURL) {
          let me = this;
          this.loading = true;
          this.total = 0;
          this.pageUrl = this.$constant.VERSIONMANAGEURL;
          this.$http({
            url: this.$constant.VERSIONMANAGEURL,
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
                      versionId: me.$handleData(dt.versionNo),
                      versionUrl: me.$handleData(dt.url),
                      versionType: me.$handleData(dt.type) === '1' ? 'iOS' : me.$handleData(dt.type) === '2' ? 'Android' : '',
                      versionEffect: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
                      versionForceUpdate: me.$handleData(dt.forceRenewal) === 1 ? '启用' : me.$handleData(dt.forceRenewal) === 0 ? '禁用' : '',
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
  .version-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    padding-top: 66px !important;
    height: 100%;
    //min-height:466px;
    //max-height:100%;
    textarea{
      resize:none;
    }
    & > .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
    & > .el-card__header {
      padding: 0 !important;
      height: 36px;
      position: absolute;
      border: none;
      top: 20px;
      left: 20px;
    }
    .version-card-header {
      height: 36px;
      overflow: hidden;
      text-align: left;
    }
    .version-card-body {
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

  .version-card {
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
    .version-add, .version-edit, .version-detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .version-add-card {
    width: 500px;
    height: 436px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -218px;
    margin-left: -250px;
    overflow: auto;
    .el-card__header {
      padding: 10px;
      font-size: 18px;
    }
    .el-button + .el-button {
      margin-left: 50px;
    }
    .version-add-card-header {
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
