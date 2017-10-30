<template>
  <el-card class="box-card base-data-card" v-loading.body="loading">
    <div slot="header" class="clearfix base-data-card-header">
      <el-button type="primary" @click="openBtn('baseDataAddCard')"><i class="el-icon-plus"></i>新&nbsp;&nbsp;&nbsp;建
      </el-button>
      <!--<el-input-->
      <!--placeholder="请输入搜索关键词"-->
      <!--icon="search"-->
      <!--v-model="keywords"-->
      <!--:on-icon-click="keywordsSearchClick">-->
      <!--</el-input>-->
    </div>
    <div class="base-data-card-body">
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
          prop="baseDataName"
          label="名称"
          width='35%'
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="baseDataCode"
          label="CODE"
          width='30%'
          show-overflow-tooltip
        >
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="baseDataState"-->
          <!--label="状态"-->
          <!--width='10%'-->
          <!--show-overflow-tooltip-->
        <!--&gt;-->
        <!--</el-table-column>-->
        <el-table-column
          label="操作"
          width='25%'
          show-overflow-tooltip
          class="operation"
        >
          <template scope="scope">
            <span @click="openBtn('baseDataDetailCard',scope.row.id)"><i class="el-icon-view"></i>查看</span>
            <span @click="openBtn('baseDataEditCard',scope.row.id)"><i class="el-icon-edit"></i>修改</span>
            <span @click="deleteSingleBtn(scope.row.id)"><i class="el-icon-delete"></i>删除</span>
          </template>
        </el-table-column>
      </define-content>
    </div>
    <div class="base-data-add" v-if='baseDataAddCard'>
      <el-card class="box-card base-data-add-card">
        <div slot="header" class="clearfix base-data-add-card-header">
          <span>新&nbsp;&nbsp;&nbsp;建</span>
          <i class="el-icon-circle-close" @click="closeBtn('baseDataAddCard')"></i>
        </div>
        <div class="base-data-add-card-body">
          <el-tree @node-click="treeClick" :data="dataTree" :default-expand-all="true"
                   :expand-on-click-node="false"></el-tree>
          <el-form v-if="baseDataShow" ref="baseDataAddForm" :rules="editRules" :model="baseDataAddForm"
                   label-width="100px">
            <el-form-item label="名称：" prop="baseDataName">
              <el-input v-model.trim="baseDataAddForm.baseDataName"></el-input>
            </el-form-item>
            <el-form-item label="CODE：" prop="baseDataCode">
              <el-input v-model.trim="baseDataAddForm.baseDataCode"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="baseDataState" v-if="false">
              <el-radio-group v-model="baseDataAddForm.baseDataState">
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button class='float-left' type="primary" @click.prevent="submitSure('baseDataAddForm')">设置子项
              </el-button>
              <el-button class='float-right' @click.prevent="submitReset('baseDataAddForm')">重&nbsp;&nbsp;&nbsp;置
              </el-button>
            </el-form-item>
          </el-form>
          <el-form v-if="baseDataChildShow" ref="baseDataChildAddForm" :rules="editChildRules"
                   :model="baseDataChildAddForm" label-width="100px">
            <el-form-item label="项编码：" prop="itemCode">
              <el-input v-model.trim="baseDataChildAddForm.itemCode"></el-input>
            </el-form-item>
            <el-form-item label="项名称：" prop="itemName">
              <el-input v-model.trim="baseDataChildAddForm.itemName"></el-input>
            </el-form-item>
            <el-form-item label="项排序：" prop="itemSort">
              <el-input v-model.trim="baseDataChildAddForm.itemSort"></el-input>
            </el-form-item>
            <el-form-item label="项状态：" prop="itemStates">
              <el-radio-group v-model="baseDataChildAddForm.itemStates">
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项默认：" prop="itemDefault" v-if="false">
              <el-radio-group v-model="baseDataChildAddForm.itemDefault">
                <el-radio :label="1" class="float-left float-second">是</el-radio>
                <el-radio :label="0" class="float-left">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button class='float-left' type="primary" @click.prevent="submitSure('baseDataChildAddForm')">设置同级项
              </el-button>
              <el-button class='float-right' @click.prevent="submitReset('baseDataChildAddForm')">重&nbsp;&nbsp;&nbsp;置
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="base-data-edit" v-if='baseDataEditCard'>
      <el-card class="box-card base-data-add-card">
        <div slot="header" class="clearfix base-data-add-card-header">
          <span>编&nbsp;&nbsp;&nbsp;辑</span>
          <i class="el-icon-circle-close" @click="closeBtn('baseDataEditCard')"></i>
        </div>
        <div class="base-data-add-card-body">
          <el-tree @node-click="treeClick" :data="dataTree" :default-expand-all="true"
                   :expand-on-click-node="false"></el-tree>
          <el-form v-if="baseDataShow" ref="baseDataEditForm" :rules="editRules" :model="baseDataEditForm"
                   label-width="100px">
            <el-form-item label="名称：" prop="baseDataName">
              <el-input v-model.trim="baseDataEditForm.baseDataName"></el-input>
            </el-form-item>
            <el-form-item label="CODE：" prop="baseDataCode">
              <el-input v-model.trim="baseDataEditForm.baseDataCode"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="baseDataState" v-if="false">
              <el-radio-group v-model="baseDataEditForm.baseDataState">
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button class='float-left' type="primary" @click.prevent="submitSure('baseDataEditForm')">
                提&nbsp;&nbsp;&nbsp;交
              </el-button>
              <el-button class='float-right' @click.prevent="submitReset('baseDataEditForm')">重&nbsp;&nbsp;&nbsp;置
              </el-button>
              <el-button class='float-left edit-set-child' type="primary"
                         @click.prevent="submitSure('baseDataEditSetChildForm')">添加子项
              </el-button>
            </el-form-item>
          </el-form>
          <el-form v-if="baseDataChildShow" ref="baseDataChildEditForm" :rules="editChildRules"
                   :model="baseDataChildEditForm" label-width="100px">
            <el-form-item label="项编码：" prop="itemCode">
              <el-input v-model.trim="baseDataChildEditForm.itemCode"></el-input>
            </el-form-item>
            <el-form-item label="项名称：" prop="itemName">
              <el-input v-model.trim="baseDataChildEditForm.itemName"></el-input>
            </el-form-item>
            <el-form-item label="项排序：" prop="itemSort">
              <el-input v-model.trim="baseDataChildEditForm.itemSort"></el-input>
            </el-form-item>
            <el-form-item label="项状态：" prop="itemState">
              <el-radio-group v-model="baseDataChildEditForm.itemStates">
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项默认：" prop="itemDefault" v-if="false">
              <el-radio-group v-model="baseDataChildEditForm.itemDefault">
                <el-radio :label="1" class="float-left float-second">是</el-radio>
                <el-radio :label="0" class="float-left">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button class='float-left' type="primary" @click.prevent="submitSure('baseDataChildEditForm')">
                提&nbsp;&nbsp;&nbsp;交
              </el-button>
              <el-button class='float-right' @click.prevent="submitReset('baseDataChildEditForm')">重&nbsp;&nbsp;&nbsp;置
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
    <div class="base-data-detail" v-if='baseDataDetailCard'>
      <el-card class="box-card base-data-add-card base-data-detail-card">
        <div slot="header" class="clearfix base-data-add-card-header">
          <span>详&nbsp;&nbsp;&nbsp;情</span>
          <i class="el-icon-circle-close" @click="closeBtn('baseDataDetailCard')"></i>
        </div>
        <div class="base-data-add-card-body">
          <el-tree @node-click="treeClick" :data="dataTree" :default-expand-all="true"
                   :expand-on-click-node="false"></el-tree>
          <el-form v-if="baseDataShow" ref="baseDataDetailForm" :model="baseDataDetailForm" label-width="100px">
            <el-form-item label="名称：" prop="baseDataName">
              <el-input v-model.trim="baseDataDetailForm.baseDataName" readonly></el-input>
            </el-form-item>
            <el-form-item label="CODE：" prop="baseDataCode">
              <el-input v-model.trim="baseDataDetailForm.baseDataCode" readonly></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="baseDataState" v-if="false">
              <el-radio-group v-model="baseDataDetailForm.baseDataState" disabled>
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <el-form v-if="baseDataChildShow" ref="baseDataChildDetailForm" :model="baseDataChildDetailForm"
                   label-width="100px">
            <el-form-item label="项编码：" prop="itemCode">
              <el-input v-model.trim="baseDataChildDetailForm.itemCode" readonly></el-input>
            </el-form-item>
            <el-form-item label="项名称：" prop="itemName">
              <el-input v-model.trim="baseDataChildDetailForm.itemName" readonly></el-input>
            </el-form-item>
            <el-form-item label="项排序：" prop="itemSort">
              <el-input v-model.trim="baseDataChildDetailForm.itemSort" readonly></el-input>
            </el-form-item>
            <el-form-item label="项状态：" prop="itemState">
              <el-radio-group v-model="baseDataChildDetailForm.itemStates" disabled>
                <el-radio :label="1" class="float-left float-first">启用</el-radio>
                <el-radio :label="0" class="float-left">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="项默认：" prop="itemDefault" v-if="false">
              <el-radio-group v-model="baseDataChildDetailForm.itemDefault" disabled>
                <el-radio :label="1" class="float-left float-second">是</el-radio>
                <el-radio :label="0" class="float-left">否</el-radio>
              </el-radio-group>
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
      let validateBaseDataName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入名称！'));
        } else {
          callback();
        }
      };
      let validateBaseDataCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入Code！'));
        } else {
          callback();
        }
      };
      let validateBaseDataState = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择状态！'));
        } else {
          callback();
        }
      };
      let validateItemCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入该项Code！'));
        } else {
          callback();
        }
      };
      let validateItemName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入该项名称！'));
        } else {
          callback();
        }
      };
      let validateItemSort = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入该项排序号！'));
        } else if (isNaN(Number(value))) {
          callback(new Error('请输入数字序号！'));
        } else {
          callback();
        }
      };
      let validateItemStates = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择是否启用！'));
        } else {
          callback();
        }
      };
      let validateItemDefault = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择是否默认选中！'));
        } else {
          callback();
        }
      };
      return {
        baseDataAddCard: false,
        baseDataDetailCard: false,
        baseDataEditCard: false,
        baseDataShow: true,
        baseDataChildShow: false,
        dataTree: [{
          label: "",
          key: "",
          parentData: "",
          currentOpe: "",
          children: []
        }],
        baseDataAddForm: {
          id: "",
          baseDataName: "",
          baseDataCode: "",
          baseDataState: "",
          baseDataCreator_id: "",
          baseDataUpdater_id: "",
          childItems: ""
        },
        baseDataChildAddForm: {
          itemCode: "",
          itemName: "",
          itemSort: "",
          itemStates: 1,
          itemDefault: 0,
          creator_id: "",
          typeCode: "",
          typeId: "",
          updater_id: "",
          itemId: ""
        },
        baseDataDetailForm: {
          id: "",
          baseDataName: "",
          baseDataCode: "",
          baseDataState: "",
          baseDataCreator_id: "",
          baseDataUpdater_id: "",
          childItems: ""
        },
        baseDataChildDetailForm: {
          itemCode: "",
          itemName: "",
          itemSort: "",
          itemStates: "",
          itemDefault: "",
          creator_id: "",
          typeCode: "",
          typeId: "",
          updater_id: "",
          itemId: ""
        },
        baseDataEditForm: {
          id: "",
          baseDataName: "",
          baseDataCode: "",
          baseDataState: "",
          baseDataCreator_id: "",
          baseDataUpdater_id: "",
          childItems: ""
        },
        baseDataChildEditForm: {
          itemCode: "",
          itemName: "",
          itemSort: "",
          itemStates: "",
          itemDefault: "",
          creator_id: "",
          typeCode: "",
          typeId: "",
          updater_id: "",
          itemId: ""
        },
        baseDataCopyForm: {
          id: "",
          baseDataName: "",
          baseDataCode: "",
          baseDataState: "",
          baseDataCreator_id: "",
          baseDataUpdater_id: "",
          childItems: ""
        },
        baseDataChildCopyForm: {
          itemCode: "",
          itemName: "",
          itemSort: "",
          itemStates: "",
          itemDefault: "",
          creator_id: "",
          typeCode: "",
          typeId: "",
          updater_id: "",
          itemId: ""
        },
        editRules: {
          baseDataName: [
            {validator: validateBaseDataName, trigger: 'blur'}
          ],
          baseDataCode: [
            {validator: validateBaseDataCode, trigger: 'blur'}
          ],
          baseDataState: [
            {validator: validateBaseDataState, trigger: 'change'}
          ]
        },
        editChildRules: {
          itemCode: [
            {validator: validateItemCode, trigger: 'blur'}
          ],
          itemName: [
            {validator: validateItemName, trigger: 'blur'}
          ],
          itemSort: [
            {validator: validateItemSort, trigger: 'blur'}
          ],
          itemStates: [
            {validator: validateItemStates, trigger: 'change'}
          ],
          itemDefault: [
            {validator: validateItemDefault, trigger: 'change'}
          ]
        },
        tableData: [],
        keywords: '',
        pageUrl: '',
        total: 0,
        loading: false,
        currentPage: 1,
        pageSize: 20,
        getListState: false,
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '字典数据管理', url: 'baseDataManage'}];
      if (this.$constant.BASEDATAMANGE) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.BASEDATAMANGE;
        this.$http({
          url: this.$constant.BASEDATAMANGE,
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
                    baseDataCode: me.$handleData(dt.code),
                    baseDataName: me.$handleData(dt.name),
                    baseDataState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
      treeClick(data, elem, vm){
        if (data.currentOpe !== '' && data.currentOpe !== 'add') {
          if (data.key != '' && data.label != '') {
            if (data.key === 'parent') {
              if (this.baseDataChildShow) {
                this.baseDataShow = true;
                this.baseDataChildShow = false;
              }
              if (data.currentOpe === 'detail') {
                this.baseDataDetailForm =  data.parentData;
              } else if (data.currentOpe === 'edit') {
                this.baseDataEditForm ={
                  id: data.parentData.id,
                  baseDataName: data.parentData.baseDataName,
                  baseDataCode: data.parentData.baseDataCode,
                  baseDataState: data.parentData.baseDataState,
                  baseDataCreator_id: data.parentData.baseDataCreator_id,
                  baseDataUpdater_id: data.parentData.baseDataUpdater_id,
                  childItems: data.parentData.childItems
                };
                this.baseDataCopyForm = {
                  id: data.parentData.id,
                  baseDataName: data.parentData.baseDataName,
                  baseDataCode: data.parentData.baseDataCode,
                  baseDataState: data.parentData.baseDataState,
                  baseDataCreator_id: data.parentData.baseDataCreator_id,
                  baseDataUpdater_id: data.parentData.baseDataUpdater_id,
                  childItems: data.parentData.childItems
                };
                this.$refs.baseDataChildEditForm && this.$refs.baseDataChildEditForm.resetFields();
                this.$refs.baseDataEditForm && this.$refs.baseDataEditForm.resetFields();
              }
            } else if (data.key === 'children') {
              if (this.baseDataShow) {
                this.baseDataShow = false;
                this.baseDataChildShow = true;
                this.baseDataAddForm = data.parentData;
              }
              if (data.currentOpe === 'detail') {
                this.baseDataChildDetailForm = data.childData;
              } else if (data.currentOpe === 'edit') {
                this.$refs.baseDataChildEditForm && this.$refs.baseDataChildEditForm.resetFields();
                this.$refs.baseDataEditForm && this.$refs.baseDataEditForm.resetFields();
                this.baseDataChildEditForm = {
                  itemCode: data.childData.itemCode,
                  itemName: data.childData.itemName,
                  itemSort: data.childData.itemSort,
                  itemStates: data.childData.itemStates,
                  itemDefault: data.childData.itemDefault,
                  creator_id: data.childData.creator_id,
                  typeCode: data.childData.typeCode,
                  typeId: data.childData.typeId,
                  updater_id: data.childData.updater_id,
                  itemId: data.childData.itemId
                };
                this.baseDataChildCopyForm = {
                  itemCode: data.childData.itemCode,
                  itemName: data.childData.itemName,
                  itemSort: data.childData.itemSort,
                  itemStates: data.childData.itemStates,
                  itemDefault: data.childData.itemDefault,
                  creator_id: data.childData.creator_id,
                  typeCode: data.childData.typeCode,
                  typeId: data.childData.typeId,
                  updater_id: data.childData.updater_id,
                  itemId: data.childData.itemId
                }
              }
            }
          }
        }
      },
      submitSure(formName){
        let me = this;
        if (formName === 'baseDataEditSetChildForm') {
          if (this.baseDataShow) {
            this.baseDataShow = false;
            this.baseDataChildShow = true;
            let session = this.$session({key: "loginMsg"});
            this.baseDataChildEditForm = {
              creator_id: session ? session.userId : "",
              itemCode: "",
              itemDefault: 0,
              itemId: "",
              itemName: "",
              itemSort: "",
              itemStates: 1,
              typeCode: this.baseDataEditForm.baseDataCode,
              typeId: this.baseDataEditForm.id,
              updater_id: ""
            };
            this.baseDataChildCopyForm = {
              creator_id: session ? session.userId : "",
              itemCode: "",
              itemDefault: 0,
              itemId: "",
              itemName: "",
              itemSort: "",
              itemStates: 1,
              typeCode: this.baseDataEditForm.baseDataCode,
              typeId: this.baseDataEditForm.id,
              updater_id: ""
            }
          }
        } else {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                let datas = null;
                if (formName === 'baseDataAddForm' || formName === 'baseDataEditForm') {
                  if (formName === 'baseDataAddForm') {
                    datas = this.baseDataAddForm;
                  } else if (formName === 'baseDataEditForm') {
                    for (let key in this.baseDataEditForm) {
                      if (this.baseDataEditForm[key] !== this.baseDataCopyForm[key]) {
                        datas = this.baseDataEditForm;
                        break;
                      }
                    }
                  } else {
                    return;
                  }
                  if (this.$constant.BASEDATAPARENT && datas && datas.id !== '') {
                    this.$http({
                      url: this.$constant.BASEDATAPARENT,
                      vm: me,
                      method: "POST",
                      data: {
                        id: datas.id,
                        code: datas.baseDataCode,
                        name: datas.baseDataName,
                        state: datas.baseDataState,
                        creatorId: datas.baseDataCreator_id,
                        updaterId: datas.baseDataUpdater_id
                      }
                    }, function (data) {
                      if (data) {
                        if (data.code === 200) {
                          //添加或修改成功修改状态
                          me.getListState = true;
                          me.dataTree[0].label = datas.baseDataName
                          me.dataTree[0].key = 'parent';
                          me.dataTree[0].parentData = {
                            id: datas.id,
                            baseDataCode: datas.baseDataCode,
                            baseDataName: datas.baseDataName,
                            baseDataState: datas.baseDataState,
                            baseDataCreator_id: datas.baseDataCreator_id,
                            baseDataUpdater_id: datas.baseDataUpdater_id
                          }
                          if (formName === 'baseDataAddForm') {
                            me.dataTree[0].currentOpe = 'add';
                            if (!me.baseDataChildShow) {
                              me.baseDataShow = false;
                              me.baseDataChildShow = true;
                            }
                          } else if (formName === 'baseDataEditForm') {
                            me.baseDataCopyForm = {
                              id: datas.id,
                              baseDataName: datas.baseDataName,
                              baseDataCode: datas.baseDataCode,
                              baseDataState: datas.baseDataState,
                              baseDataCreator_id: datas.baseDataCreator_id,
                              baseDataUpdater_id: datas.baseDataUpdater_id,
                              childItems: datas.childItems,
                            };
                            me.dataTree[0].currentOpe = 'edit';
                            me.$messageBox({
                              vm: me,
                              title: "成功：",
                              message: "设置成功！",
                              type: "success"
                            });
                          }
                        } else if (data.code === -1006) {
                          me.$messageBox({
                            vm: me,
                            title: "错误：",
                            message: "设置失败,名称或Code不唯一！",
                            type: "error"
                          });
                        } else {
                          me.$messageBox({
                            vm: me,
                            title: "错误：",
                            message: "设置失败！",
                            type: "error"
                          });
                          // me.submitReset(formName);
                        }
                      } else {
                        me.$messageBox({
                          vm: me,
                          title: "错误：",
                          message: "服务器响应失败！",
                          type: "error"
                        });
                      }
                    });
                  }
                } else if (formName === 'baseDataChildAddForm' || formName === 'baseDataChildEditForm') {
                  if (formName === 'baseDataChildAddForm') {
                    datas = this.baseDataChildAddForm;
                    datas.typeId = this.baseDataAddForm.id;
                    datas.typeCode = this.baseDataAddForm.baseDataCode;
                    datas.creator_id = this.baseDataAddForm.baseDataCreator_id;
                    datas.updater_id = this.baseDataAddForm.baseDataUpdater_id
                  } else if (formName === 'baseDataChildEditForm') {
                    for (let key in this.baseDataChildEditForm) {
                      if (this.baseDataChildEditForm[key] !== this.baseDataChildCopyForm[key]) {
                        datas = this.baseDataChildEditForm;
                        break;
                      }
                    }
                  } else {
                    return;
                  }
                  if (this.$constant.BASEDATACHILD && datas && datas.typeId !== '') {
                    this.$http({
                      url: this.$constant.BASEDATACHILD,
                      vm: me,
                      method: "POST",
                      data: {
                        id: datas.itemId,
                        typeId: datas.typeId,//父项id
                        typeCode: datas.typeCode,//父项的code
                        code: datas.itemCode,
                        name: datas.itemName,
                        seqNo: datas.itemSort,
                        state: datas.itemStates,
                        default: datas.itemDefault,
                        creatorId: datas.creator_id,
                        updaterId: datas.updater_id
                      }
                    }, function (data) {
                      if (data) {
                        if (data.code === 200) {
                          //添加或修改成功修改状态
                          me.getListState = true;
                          if (formName === 'baseDataChildAddForm') {
                            me.dataTree[0].children.push({
                              label: datas.itemName,
                              key: 'children',
                              childData: {
                                id: datas.itemId,
                                typeId: datas.typeId,//父项id
                                typeCode: datas.typeCode,//父项的code
                                code: datas.itemCode,
                                name: datas.itemName,
                                seqNo: datas.itemSort,
                                state: datas.itemStates,
                                default: datas.itemDefault,
                                creatorId: datas.creator_id,
                                updaterId: datas.updater_id
                              },
                              currentOpe: 'add'
                            });
                            me.baseDataChildAddForm = {
                              itemCode: "",
                              itemName: "",
                              itemSort: "",
                              itemStates: 1,
                              itemDefault: 0,
                              creator_id: "",
                              typeCode: "",
                              typeId: "",
                              updater_id: "",
                              itemId: ""
                            }
                          } else if (formName === 'baseDataChildEditForm') {
                            //确定当前修改的子项
                            me.baseDataChildCopyForm = {
                              itemCode: datas.itemCode,
                              itemName: datas.itemName,
                              itemSort: datas.itemSort,
                              itemStates: datas.itemStates,
                              itemDefault: datas.itemDefault,
                              creator_id: datas.creator_id,
                              typeCode: datas.typeCode,
                              typeId: datas.typeId,
                              updater_id: datas.updater_id,
                              itemId: datas.itemId,
                            };
                            let flag = datas.itemId;
                            if (me.$handleData(flag) !== '') {
                              for (let i = 0; i < me.dataTree[0].children.length; i++) {
                                let targetTree = me.dataTree[0].children[i].childData;
                                if (targetTree.itemId === flag) {
                                  me.dataTree[0].children[i].childData = {
                                    itemCode: datas.itemCode,
                                    itemName: datas.itemName,
                                    itemSort: datas.itemSort,
                                    itemStates: datas.itemStates,
                                    itemDefault: datas.itemDefault,
                                    creator_id: datas.creator_id,
                                    typeCode: datas.typeCode,
                                    typeId: datas.typeId,
                                    updater_id: datas.updater_id,
                                    itemId: datas.itemId,
                                  };
                                  me.dataTree[0].children[i].label = datas.itemName;
                                }
                              }
                            } else {
//                              me.dataTree[0].children.push({
//                                childData: datas,
//                                currentOpe: "edit",
//                                key: "children",
//                                label: datas.itemName
//                              })
                              me.openBtn('baseDataEditCard',datas.typeId);
                            }
                            me.$messageBox({
                              vm: me,
                              title: "成功：",
                              message: "设置成功！",
                              type: "success"
                            });
                          }
                        } else if (data.code === -1006) {
                          me.$messageBox({
                            vm: me,
                            title: "错误：",
                            message: "设置失败,名称或Code不唯一！",
                            type: "error"
                          });
                        } else {
                          me.$messageBox({
                            vm: me,
                            title: "错误：",
                            message: "设置子项失败！",
                            type: "error"
                          });
                          // me.submitReset(formName);
                        }
                      } else {
                        me.$messageBox({
                          vm: me,
                          title: "错误：",
                          message: "服务器响应失败！",
                          type: "error"
                        });
                      }
                    });
                  }
                }
              }
              else {
                return false;
              }
            }
          );
        }
      },
      submitReset(formName)
      {
        if (formName === 'baseDataAddForm') {
          if (this.$data[formName].id) {
            this.$data[formName] = {
              id: this.$data[formName].id,
              baseDataName: "",
              baseDataCode: "",
              baseDataState: 1,
              baseDataCreator_id: this.$data[formName].baseDataCreator_id,
              baseDataUpdater_id: this.$data[formName].baseDataUpdater_id,
              childItems: ""
            }
          }
        } else if (formName === 'baseDataChildAddForm') {
          this.$data[formName] = {
            itemCode: "",
            itemName: "",
            itemSort: "",
            itemStates: 1,
            itemDefault: 0,
            creator_id: this.$data[formName].creator_id,
            typeCode: this.$data[formName].typeCode,
            typeId: this.$data[formName].typeId,
            updater_id: this.$data[formName].updater_id,
            itemId: ""
          }
        } else if (formName === 'baseDataEditForm') {
          if (this.$data.baseDataCopyForm && this.$data.baseDataCopyForm.id) {
            this.$data[formName] = {
              id: this.$data.baseDataCopyForm.id,
              baseDataName: this.$data.baseDataCopyForm.baseDataName,
              baseDataCode: this.$data.baseDataCopyForm.baseDataCode,
              baseDataState: this.$data.baseDataCopyForm.baseDataState,
              baseDataCreator_id: this.$data.baseDataCopyForm.baseDataCreator_id,
              baseDataUpdater_id: this.$data.baseDataCopyForm.baseDataUpdater_id,
              childItems: this.$data.baseDataCopyForm.childItems,
            }
          }
        } else if (formName === 'baseDataChildEditForm') {
          if (this.$data.baseDataChildCopyForm && this.$data.baseDataChildCopyForm.typeId) {
            this.$data[formName] = {
              itemCode: this.$data.baseDataChildCopyForm.itemCode,
              itemName: this.$data.baseDataChildCopyForm.itemName,
              itemSort: this.$data.baseDataChildCopyForm.itemSort,
              itemStates: this.$data.baseDataChildCopyForm.itemStates,
              itemDefault: this.$data.baseDataChildCopyForm.itemDefault,
              creator_id: this.$data.baseDataChildCopyForm.creator_id,
              typeCode: this.$data.baseDataChildCopyForm.typeCode,
              typeId: this.$data.baseDataChildCopyForm.typeId,
              updater_id: this.$data.baseDataChildCopyForm.updater_id,
              itemId: this.$data.baseDataChildCopyForm.itemId,
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
        deleteById({vm: this, url: this.$constant.BASEDATADELETE, deleteId, callback: this.getDataList, state: 1});
      }
      ,
      closeBtn(showName)
      {
        if (showName !== undefined && this.$data[showName]) {
          let datas = {
            id: "",
            baseDataName: "",
            baseDataCode: "",
            baseDataState: "",
            baseDataCreator_id: "",
            baseDataUpdater_id: "",
            childItems: ""
          };
          if (showName === 'baseDataAddCard') {
            this.baseDataAddForm = datas;
            this.baseDataChildAddForm = {
              itemCode: "",
              itemName: "",
              itemSort: "",
              itemStates: 1,
              itemDefault: 0,
              creator_id: "",
              typeCode: "",
              typeId: "",
              updater_id: "",
              itemId: ""
            }
          } else if (showName === 'baseDataEditCard') {
            this.baseDataEditForm = datas;
            this.baseDataChildEditForm = {
              itemCode: "",
              itemName: "",
              itemSort: "",
              itemStates: "",
              itemDefault: "",
              creator_id: "",
              typeCode: "",
              typeId: "",
              updater_id: "",
              itemId: ""
            }
          } else if (showName === 'baseDataDetailCard') {
            this.baseDataDetailForm = datas;
            this.baseDataChildDetailForm = {
              itemCode: "",
              itemName: "",
              itemSort: "",
              itemStates: "",
              itemDefault: "",
              creator_id: "",
              typeCode: "",
              typeId: "",
              updater_id: "",
              itemId: ""
            };
          } else {
            return;
          }
          this.dataTree[0].label = '';
          this.dataTree[0].key = '';
          this.dataTree[0].parentData = '';
          this.dataTree[0].children = [];
          this.dataTree[0].currentOpe = '';
          this.baseDataCopyForm = {
            id: "",
            baseDataName: "",
            baseDataCode: "",
            baseDataState: "",
            baseDataCreator_id: "",
            baseDataUpdater_id: "",
            childItems: ""
          };
          this.baseDataChildCopyForm = {
            itemCode: "",
            itemName: "",
            itemSort: "",
            itemStates: "",
            itemDefault: "",
            creator_id: "",
            typeCode: "",
            typeId: "",
            updater_id: "",
            itemId: ""
          };
          if (this.baseDataChildShow) {
            this.baseDataShow = true;
            this.baseDataChildShow = false;
          }
          this.$data[showName] = false;
          if (this.getListState) {//添加或修改成功之后从新获取
            this.getDataList();
          }
        }
      }
      ,
      openBtn(showName, id)
      {
        let me = this;
        //if (!this.$data[showName]) {
        if (this.$constant.BASEDATAINNIT) {
          this.$http({
            url: this.$constant.BASEDATAINNIT,
            vm: me,
            method: "GET",
            params: {id: id !== undefined ? id : ''}
          }, function (data) {
            if (data && data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data;
                let session = me.$session({key: "loginMsg"});
                let datas = {
                  id: me.$handleData(dt.id),
                  baseDataCode: me.$handleData(dt.code),
                  baseDataName: me.$handleData(dt.name),
                  baseDataState: me.$handleData(dt.state) === '' ? 1 : me.$handleData(dt.state),
                  baseDataCreator_id: '',
                  baseDataUpdater_id: '',
                  childItems: ""
                }
                if (datas.id !== '') {//拿到id才显示
                  me.dataTree[0].label = datas.baseDataName
                  me.dataTree[0].key = 'parent';
                  me.dataTree[0].currentOpe = showName === 'baseDataAddCard' ? 'add' : showName === 'baseDataDetailCard' ? 'detail' : showName === 'baseDataEditCard' ? 'edit' : '';
                  me.dataTree[0].parentData = {
                    id: me.$handleData(dt.id),
                    baseDataCode: me.$handleData(dt.code),
                    baseDataName: me.$handleData(dt.name),
                    baseDataState: me.$handleData(dt.state) === '' ? 1 : me.$handleData(dt.state),
                    baseDataCreator_id: '',
                    baseDataUpdater_id: '',
                    childItems: ""
                  }
                  if (me.$handleData(dt.item) !== '' && dt.item instanceof Array) {
                    me.dataTree[0].children = [];
                    for (let i = 0; i < dt.item.length; i++) {
                      me.dataTree[0].children.push({
                        label: dt.item[i].itemName,
                        key: 'children',
                        childData: {
                          itemCode: dt.item[i].itemCode,
                          itemName: dt.item[i].itemName,
                          itemSort: dt.item[i].seqNo,
                          itemStates: dt.item[i].itemState,
                          itemDefault: dt.item[i].itemDefault,
                          creator_id: "",
                          typeCode: dt.item[i].typeCode,
                          typeId: dt.item[i].typeId,
                          itemId: dt.item[i].itemId,
                          updater_id: "",
                        },
                        currentOpe: showName === 'baseDataAddCard' ? 'add' : showName === 'baseDataDetailCard' ? 'detail' : showName === 'baseDataEditCard' ? 'edit' : '',
                      });
                    }
                  }
                  if (showName === 'baseDataAddCard') {
                    if (session && session.userId !== undefined) {
                      datas.baseDataCreator_id = session.userId;
                    }
                    me.baseDataAddForm = datas;
                  } else if (showName === 'baseDataEditCard') {
                    if (session && session.userId !== undefined) {
                      datas.baseDataUpdater_id = session.userId;
                    }
                    me.baseDataEditForm = datas;
                    me.baseDataCopyForm = {
                      id: datas.id,
                      baseDataCode: datas.baseDataCode,
                      baseDataName: datas.baseDataName,
                      baseDataState: datas.baseDataState,
                      baseDataCreator_id: datas.baseDataCreator_id,
                      baseDataUpdater_id: datas.baseDataUpdater_id,
                      childItems: datas.childItems,
                    };//添加副本元素 便于重置
                  } else if (showName === 'baseDataDetailCard') {
                    me.baseDataDetailForm = datas;
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
        //}
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
                  baseDataCode: me.$handleData(dt.code),
                  baseDataName: me.$handleData(dt.name),
                  baseDataState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
                  baseDataCode: me.$handleData(dt.code),
                  baseDataName: me.$handleData(dt.name),
                  baseDataState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
        if (this.$constant.BASEDATAMANGE) {
          let me = this;
          this.loading = true;
          this.total = 0;
          this.pageUrl = this.$constant.BASEDATAMANGE;
          this.$http({
            url: this.$constant.BASEDATAMANGE,
            vm: me,
            method: "GET",
            params: {page: 1, rows: this.pageSize}
          }, function (data) {
            me.getListState = false;
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
                      baseDataCode: me.$handleData(dt.code),
                      baseDataName: me.$handleData(dt.name),
                      baseDataState: me.$handleData(dt.state) === 1 ? '启用' : me.$handleData(dt.state) === 0 ? '禁用' : '',
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
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .base-data-card {
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
    & > .el-card__header {
      padding: 0 !important;
      height: 36px;
      position: absolute;
      border: none;
      top: 20px;
      left: 20px;
    }
    .el-tree {
      min-height: 360px;
    }
    .base-data-card-header {
      height: 36px;
      overflow: hidden;
      text-align: left;
    }
    .base-data-card-body {
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
  .base-data-card {
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
    .base-data-add, .base-data-edit, .base-data-detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .base-data-add-card {
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
    .edit-set-child {
      width: 100% !important;
      margin-left: 0 !important;
      margin-top: 20px;
    }
    .base-data-submit button {
      width: 100%;
    }
    /*.el-button + .el-button {*/
    /*margin-left: 50px;*/
    /*}*/
    .base-data-add-card-header {
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
      .el-tree {
        width: 30%;
        height: 100%;
        float: left;
        text-align: left;
      }
      .el-form {
        width: 66%;
        display: inline-block;
        float: right;
      }
      .el-input {
        width: 100%;
        margin-left: 0;
      }
      .el-radio-group {
        padding: 0 20px;
        width: 100%;
        box-sizing: border-box;
      }
      .float-first {
        margin-right: 48px;
      }
      .float-second {
        margin-right: 62px;
      }
      .radio-el-form-item {
        text-align: left;
      }
    }
  }
</style>
