<template>
  <el-card class="box-card protocol-card" v-loading.body="loading">
    <div slot="header" class="clearfix protocol-card-header">
      <el-button type="primary" @click="openBtn('protocolAddCard')"><i class="el-icon-plus"></i>新&nbsp;&nbsp;&nbsp;建
      </el-button>
      <!--<el-input-->
        <!--placeholder="请输入搜索关键词"-->
        <!--icon="search"-->
        <!--v-model="keywords"-->
        <!--:on-icon-click="keywordsSearchClick">-->
      <!--</el-input>-->
    </div>
    <div class="protocol-card-body">
      <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl"
                      :currentPage='currentPage' :pageSize='pageSize' :cgxpagesizeHandle="cgxpagesizeHandle">
        <el-table-column
          type="index"
          label="编号"
          width='10%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="protocolType"
          label="类型"
          width='45%'
          show-overflow-tooltip
        >
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="protocolContent"-->
          <!--label="内容"-->
          <!--width='49%'-->
          <!--:show-overflow-tooltip="false"-->
        <!--&gt;-->
        <!--</el-table-column>-->
        <el-table-column
          label="操作"
          width='45%'
          show-overflow-tooltip
          class="operation"
        >
          <template scope="scope">
            <span @click="openBtn('protocolDetailCard',scope.row.id)"><i class="el-icon-view"></i>查看</span>
            <span @click="openBtn('protocolEditCard',scope.row.id)"><i class="el-icon-edit"></i>修改</span>
            <!--<span @click="deleteSingleBtn(scope.row.id)"><i class="el-icon-delete"></i>删除</span>-->
          </template>
        </el-table-column>
      </define-content>
    </div>
    <div class="protocol-add" v-if='protocolAddCard'>
      <el-card class="box-card protocol-add-card">
        <div slot="header" class="clearfix protocol-add-card-header">
          <span>新&nbsp;&nbsp;&nbsp;建</span>
          <i class="el-icon-circle-close" @click="closeBtn('protocolAddCard')"></i>
        </div>
        <div class="protocol-add-card-body">
          <el-form ref="protocolAddForm" :rules="editRules" :model="protocolAddForm" label-width="100px">
            <el-form-item label="协议类型：" prop="protocolType">
              <el-radio-group v-model="protocolAddForm.protocolType">
                <el-radio label="1" class="float-left float-first">借入协议</el-radio>
                <!--<el-radio label="2" class="float-left">还款协议</el-radio>-->
                <el-radio label="3" class="float-left">用户协议</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item class='protocol-content' label="协议内容：" prop="protocolContent">
              <!--<el-input type="textarea" v-model.trim="protocolAddForm.protocolContent" id="editor"></el-input>-->
              <div id="addEditor" type="text/plain" style="width:660px;height:100px;"></div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('protocolAddForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('protocolAddForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="protocol-edit" v-if='protocolEditCard'>
      <el-card class="box-card protocol-add-card">
        <div slot="header" class="clearfix protocol-add-card-header">
          <span>编&nbsp;&nbsp;&nbsp;辑</span>
          <i class="el-icon-circle-close" @click="closeBtn('protocolEditCard')"></i>
        </div>
        <div class="protocol-add-card-body">
          <el-form ref="protocolEditForm" :rules='editRules' :model="protocolEditForm" label-width="100px">
            <el-form-item label="协议类型：" prop="protocolType">
              <el-radio-group v-model="protocolEditForm.protocolType">
                <el-radio label="1" class="float-left float-first">借入协议</el-radio>
                <!--<el-radio label="2" class="float-left">还款协议</el-radio>-->
                <el-radio label="3" class="float-left">用户协议</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="协议内容：" class='protocol-content' prop="protocolContent">
              <!--<el-input type="textarea" v-model.trim="protocolEditForm.protocolContent"></el-input>-->
              <div id="editEditor" type="text/plain" style="width:660px;height:100px;"></div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="submitSure('protocolEditForm')">确&nbsp;&nbsp;&nbsp;定</el-button>
              <el-button @click.prevent="submitReset('protocolEditForm')">重&nbsp;&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="protocol-detail" v-if='protocolDetailCard'>
      <el-card class="box-card protocol-add-card protocol-detail-card">
        <div slot="header" class="clearfix protocol-add-card-header">
          <span>详&nbsp;&nbsp;&nbsp;情</span>
          <i class="el-icon-circle-close" @click="closeBtn('protocolDetailCard')"></i>
        </div>
        <div class="protocol-add-card-body">
          <el-form ref="protocolDetailForm" :model="protocolDetailForm" label-width="100px">
            <el-form-item label="协议类型：" prop="protocolType">
              <el-radio-group v-model="protocolDetailForm.protocolType" disabled>
                <el-radio label="1" class="float-left float-first">借入协议</el-radio>
                <!--<el-radio label="2" class="float-left">还款协议</el-radio>-->
                <el-radio label="3" class="float-left">用户协议</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="协议内容：" prop="protocolContent" class='protocol-content'>
              <!--<el-input type="textarea" v-model.trim="protocolDetailForm.protocolContent" readonly></el-input>-->
              <div id="detailEditor" type="text/plain" style="width:660px;height:100px;"></div>
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
  import '../../static/utf8-jsp/ueditor.config'
  import '../../static/utf8-jsp/ueditor.all';
  import '../../static/utf8-jsp/lang/zh-cn/zh-cn';
  export default {
    data(){
      let validateProtocolType = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择协议类型！'));
        } else {
          callback();
        }
      };
      let validateProtocolContent = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写协议内容！'));
        } else {
          callback();
        }
      };
      return {
        ue:"",
        protocolAddCard: false,
        protocolDetailCard: false,
        protocolEditCard: false,
        editRules: {
          protocolType: [
            {validator: validateProtocolType, trigger: 'change'}
          ],
          protocolContent: [
            {validator: validateProtocolContent, trigger: 'blur'}
          ]
        },
        tableData: [],
        protocolAddForm: {
          id: '',
          protocolType: '',
          protocolContent: '',
          protocolCreator_id: '',
          protocolUpdater_id: ''
        },
        protocolDetailForm: {
          id: '',
          protocolType: '',
          protocolContent: '',
          protocolCreator_id: '',
          protocolUpdater_id: ''
        },
        protocolEditForm: {
          id: '',
          protocolType: '',
          protocolContent: '',
          protocolCreator_id: '',
          protocolUpdater_id: ''
        },
        protocolEditCopyForm: {
          id: '',
          protocolType: '',
          protocolContent: '',
          protocolCreator_id: '',
          protocolUpdater_id: ''
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
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '协议管理', url: 'protocolManage'}];
      if (this.$constant.PROTOCOLMANAGE) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.PROTOCOLMANAGE;
        this.$http({
          url: this.$constant.PROTOCOLMANAGE,
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
                    protocolType: me.$handleData(dt.type) === 1 ? '借入协议' : me.$handleData(dt.type) === 2 ? '还款协议' : me.$handleData(dt.type) === 3 ? '用户协议' : '',
                    protocolContent: me.$handleData(dt.content),
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
        if(this.ue.getContent()){
          this.$data[formName].protocolContent =`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="keywords" content="蓝润，金宝行，蓝币"><meta name="description" content="蓝润，金宝行，蓝币"><meta name="author" content="yangshao"><meta name="robots" content="index,follow"><meta name="renderer" content="webkit"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"><style type="text/css">html {color: #000;background: #fff;overflow-y: scroll;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}html * {outline: none;-webkit-text-size-adjust: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);font-family: PingFangSC-Regular,"Microsoft YaHei", sans-serif !important;}body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote,th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {margin: 0;padding: 0;  }input, select, textarea {font-size: 100%;}table {border-collapse: collapse;border-spacing: 0;}fieldset, img {border: 0;}abbr, acronym {border: 0;font-variant: normal;}del {text-decoration: line-through;}address, caption, cite, code, dfn, em, th, var {font-style: normal;font-weight: 500;}ol, ul {list-style: none;}caption, th {text-align: left;}h1, h2, h3, h4, h5, h6 {font-size: 100%;font-weight: 500;}q:before,q:after {content: '';}sub, sup {font-size: 75%;line-height: 0;position: relative; vertical-align: baseline;  }sup {top: -0.5em;}sub {bottom: -0.25em;}a:hover {text-decoration: underline;}ins, a {text-decoration: none;}html, body {width: 100%;min-width: 320px;height: auto;}body {padding: 20px 10px;box-sizing: border-box;text-align: justify;}</style></head><body>`+this.ue.getContent()+`</body></html>`;
        }else{
          this.$data[formName].protocolContent = '';
        }
        this.$refs[formName].validate((valid) => {
            if (valid) {
              let data = null;
              if (formName === 'protocolAddForm') {
                data = this.protocolAddForm;
              } else if (formName === 'protocolEditForm') {
                for (let key in this.protocolEditForm) {
                  if (this.protocolEditForm[key] !== this.protocolEditCopyForm[key]) {
                    data = this.protocolEditForm;
                    break;
                  }
                }
              } else {
                return;
              }
              if (this.$constant.PROTOCOLMANAGESAVE && data && data.id !== '') {
                if (data.protocolCreator_id !== '' || data.protocolUpdater_id !== '') {
                  this.$http({
                    url: this.$constant.PROTOCOLMANAGESAVE,
                    vm: me,
                    method: "POST",
                    data: {
                      "id": data.id,
                      "type": data.protocolType,
                      "content": data.protocolContent,
                      'creatorId': data.protocolCreator_id,
                      'updaterId': data.protocolUpdater_id
                    }
                  }, function (data) {
                    if (data) {
                      if (data.code === 200) {
                        me.$messageBox({
                          vm: me,
                          message: formName === 'protocolAddForm' ? "新建成功！" : formName === 'protocolEditForm' ? '编辑成功！' : '成功！',
                          title: "提示：",
                          type: "warning",
                          loadingState: false
                        });
                        if (formName === 'protocolAddForm') {
                          me.closeBtn('protocolAddCard');
                        } else if (formName === 'protocolEditForm') {
                          me.closeBtn('protocolEditCard');
                        } else {
                          return;
                        }
                        //重新获取数据
                        me.getDataList();
                      } else if (data.code === -1006) {
                        me.$messageBox({
                          vm: me,
                          message: '该协议已存在！',
                          title: "提示：",
                          type: "warning"
                        });
                        me.submitReset(formName);
                      } else {
                        me.$messageBox({
                          vm: me,
                          message: formName === 'protocolAddForm' ? "新建失败！" : formName === 'protocolEditForm' ? '编辑失败！' : '失败！',
                          title: "提示：",
                          type: "warning"
                        });
                        me.submitReset(formName);
                      }
                    } else {
                      me.$messageBox({
                        vm: me,
                        message: '服务器响应失败！',
                        title: "错误：",
                        type: "error",
                      });
                    }
                  });
                }
              } else {
                if (formName === 'protocolEditForm') {
                  me.closeBtn('protocolEditCard');
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
        if (formName === 'protocolAddForm') {
          if (this.$data[formName].id) {
            this.$data[formName] = {
              id: this.$data[formName].id,
              protocolType: '',
              protocolContent: '',
              protocolCreator_id: this.$data[formName].protocolCreator_id,
              protocolUpdater_id: this.$data[formName].protocolUpdater_id
            }
            this.ue.setContent("");
          }
        } else if (formName === 'protocolEditForm') {
          if (this.$data.protocolEditCopyForm && this.$data.protocolEditCopyForm.id) {
            this.$data[formName] = {
              id: this.$data.protocolEditCopyForm.id,
              protocolType: this.$data.protocolEditCopyForm.protocolType,
              protocolContent: this.$data.protocolEditCopyForm.protocolContent,
              protocolCreator_id: this.$data.protocolEditCopyForm.protocolCreator_id,
              protocolUpdater_id: this.$data.protocolEditCopyForm.protocolUpdater_id,
            }
            this.ue.setContent(this.$data.protocolEditCopyForm.protocolContent.substring(this.$data.protocolEditCopyForm.protocolContent.indexOf('<body>')+6,this.$data.protocolEditCopyForm.protocolContent.lastIndexOf("</body>")));
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
        deleteById({vm: this, url: this.$constant.PROTOCOLMANAGEDELETE, deleteId, callback: this.getDataList});
      }
      ,
      closeBtn(showName)
      {
        if (showName !== undefined && this.$data[showName]) {
          let datas = {
            id: '',
            protocolType: '',
            protocolContent: '',
            protocolCreator_id: '',
            protocolUpdater_id: ''
          };
          this.ue = "";
          if (showName === 'protocolAddCard') {
            this.protocolAddForm = datas;
            UE.delEditor('addEditor');
          } else if (showName === 'protocolEditCard') {
            this.protocolEditForm = datas;
            this.protocolEditCopyForm = {
              id: '',
              protocolType: '',
              protocolContent: '',
              protocolCreator_id: '',
              protocolUpdater_id: '',
            };//清空副本数据
            UE.delEditor('editEditor');
          } else if (showName === 'protocolDetailCard') {
            this.protocolDetailForm = datas;
            UE.delEditor('detailEditor');
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
          if (this.$constant.PROTOCOLMANAGEINIT) {
            this.$http({
              url: this.$constant.PROTOCOLMANAGEINIT,
              vm: me,
              method: "GET",
              params: {id: id !== undefined ? id : ''}
            }, function (data) {
              if (data && data.code === 200 && data.message === '成功') {
                if (data.data && data.data.protocol) {
                  let dt = data.data.protocol;
                  let session = me.$session({key: 'loginMsg'});
                  let datas = {
                    id: me.$handleData(dt.id),
                    protocolType: me.$handleData(dt.type) + '',
                    protocolContent: me.$handleData(dt.content),
                    protocolCreator_id: "",
                    protocolUpdater_id: ""
                  };
                  if (datas.id !== undefined) {//拿到id才显示
                    let initContent = '';
                    if (showName === 'protocolAddCard') {
                      if (session && session.userId !== undefined) {
                        datas.protocolCreator_id = session.userId;
                      }
                      me.protocolAddForm = datas;
                      initContent = '';
                    } else if (showName === 'protocolEditCard') {
                      if (session && session.userId !== undefined) {
                        datas.protocolUpdater_id = session.userId;
                      }
                      me.protocolEditForm = datas;
                      me.protocolEditCopyForm = {
                        id: me.$handleData(dt.id),
                        protocolType: me.$handleData(dt.type) + '',
                        protocolContent: me.$handleData(dt.content),
                        protocolCreator_id: '',
                        protocolUpdater_id: datas.protocolUpdater_id
                      };//添加副本元素 便于重置
                      initContent = datas.protocolContent.substring(datas.protocolContent.indexOf('<body>')+6,datas.protocolContent.lastIndexOf("</body>"));
                    } else if (showName === 'protocolDetailCard') {
                      me.protocolDetailForm = datas;
                      initContent = datas.protocolContent.substring(datas.protocolContent.indexOf('<body>')+6,datas.protocolContent.lastIndexOf("</body>"));
                    } else {
                      return;
                    }
                    me.$data[showName] = true;
                    me.$nextTick(function () {
                      let currentCard = "";
                      if(showName === 'protocolAddCard'){
                        currentCard = 'addEditor';
                      }else if(showName === 'protocolEditCard'){
                        currentCard = 'editEditor';
                      }else if(showName === 'protocolDetailCard'){
                        currentCard = 'detailEditor';
                      }else{
                          return;
                      }
                      if(currentCard && me.ue === '') {
                        me.ue = UE.getEditor(currentCard, {
                          BaseUrl: '',
                          UEDITOR_HOME_URL: 'static/utf8-jsp/',
                          autoHeightEnabled: false,
                          autoFloatEnabled: true,
                          wordCount: false,
                          enableAutoSave: false,
                          maxInputCount: false,
                        });
                        me.ue.addListener("ready", function () {
                          me.ue.setContent(initContent);
                          if(showName === 'protocolDetailCard'){
                            me.ue.setDisabled('fullscreen');
                          }
                        });
                      }
                    })
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
                  protocolType: me.$handleData(dt.type) === 1 ? '借入协议' : me.$handleData(dt.type) === 2 ? '还款协议' : me.$handleData(dt.type) === 3 ? '用户协议' : '',
                  protocolContent: me.$handleData(dt.content),
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
                  protocolType: me.$handleData(dt.type) === 1 ? '借入协议' : me.$handleData(dt.type) === 2 ? '还款协议' : me.$handleData(dt.type) === 3 ? '用户协议' : '',
                  protocolContent: me.$handleData(dt.content),
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
        if (this.$constant.PROTOCOLMANAGE) {
          let me = this;
          this.loading = true;
          this.total = 0;
          this.pageUrl = this.$constant.PROTOCOLMANAGE;
          this.$http({
            url: this.$constant.PROTOCOLMANAGE,
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
                      protocolType: me.$handleData(dt.type) === 1 ? '借入协议' : me.$handleData(dt.type) === 2 ? '还款协议' : me.$handleData(dt.type) === 3 ? '用户协议' : '',
                      protocolContent: me.$handleData(dt.content),
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
      defineContent,
    }
  }
</script>

<style lang='scss'>
  .protocol-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    padding-top: 66px !important;
    height: 100%;
    //min-height:466px;
    //max-height:100%;
    textarea {
      resize: none;
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
    .protocol-card-header {
      height: 36px;
      overflow: hidden;
      text-align: left;
    }
    .protocol-card-body {
      height: 100%;
    }
    .protocol-content {
      height: 300px;
      textarea {
        height: 226px;
      }
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

  .protocol-card {
    table {
      width: 100% !important;
    }
    .el-table__body-wrapper div.cell {
      padding: 0 5px;
      width: 100% !important;
      box-sizing: border-box;
      height: 24px;
      text-overflow: ellipsis;
      white-space: nowrap;
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
    .protocol-add, .protocol-edit, .protocol-detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .protocol-add-card {
    width: 800px;
    height: 436px;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -218px;
    margin-left: -400px;
    .el-card__header {
      padding: 10px;
      font-size: 18px;
    }
    .el-button + .el-button {
      margin-left: 50px;
    }
    .protocol-add-card-header {
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
        padding: 0;
        width: 380px;
        box-sizing: border-box;
        .el-radio + .el-radio {
          margin-left: 160px;
        }
      }
      .float-first {
        //margin-right: 78px;
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

