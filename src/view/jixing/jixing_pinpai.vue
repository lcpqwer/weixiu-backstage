<template>
  <div>
    <Button style="margin-right: 6px;float: left" type="info" @click="add">新增</Button>
    <!--搜索-->
    <div style="float: left">
      <!--<Form :model="data2" :label-width="10">-->
        <!--<FormItem label="" prop="provinceid">-->
          <Select style="width:200px;margin-right: 3px" placeholder="请选择机型大类键字搜索">
            <Option v-for="item in data2" :value="item.name" :key="item.Id" @click.native="chioce(item)" style="width: 80px">{{ item.name }}</Option>
          </Select>
        <!--</FormItem>-->
      <!--</Form>-->
    </div>
    <!--<Input clearable placeholder="请输入种类关键字搜索" class="search-input" v-model="cid" style="width: 200px"/>-->
      <Input clearable placeholder="请输入品牌关键字搜索" class="search-input" v-model="juti_name" style="width: 200px;margin-right: 3px"/>
      <Button type="info" @click="handSeek">搜索</Button>

    <Table :columns="columns1" :data="data1" style="clear: both;margin-top: 10px"></Table>
    <!--新增-->
    <Modal
      v-model="modal3"
      title="新增"
      @on-ok="ok3('formAdd')"
      @on-cancel="cancel3"
      :loading="loading">
      <Form :model="formAdd" :label-width="80" :rules="ruleValidate" ref="formAdd">
        <FormItem label="机型大类" prop="provinceid">
          <Select v-model="formAdd.name" style="width:200px">
            <Option v-for="item in lei" :value="item.name" :key="item.id" @click.native="chioce1(item)">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem label="品牌名称" prop="juti_name">
          <Input v-model="formAdd.juti_name" placeholder="" style="width:200px"></Input>
        </FormItem>
      </Form>
    </Modal>
    <!--//修改弹框-->
    <!--<Button type="primary" @click="modal1 = true">修改</Button>-->
    <Modal
      v-model="modal1"
      title="修改"
      @on-ok="ok('formItem')"
      @on-cancel="cancel"
      :loading="loading1">
      <Form :model="formItem" :label-width="80" :rules="ruleValidate2" ref="formItem">
        <FormItem label="机型大类" prop="provinceid">
          <Select v-model="formItem.leiname" style="width:200px">
            <Option v-for="item in lei" :value="item.name" :key="item.id" @click.native="chioce2(item)">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem label="品牌名称" prop="juti_name">
          <Input v-model="formItem.name" placeholder="" style="width:200px"></Input>
        </FormItem>
      </Form>
    </Modal>
    <!--//分页-->
    <div style="text-align: right">
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleValidate: {
          juti_name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        },
        ruleValidate2: {
          name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        },
        juti_name:'',
        lei:[],
        leiId:'',
        cid:'',
        formAdd:{
          name:'',
          juti_name: '',
          jwt:localStorage.getItem('jwt')
        },
        formItem:{
          leiname:'',
          cid:'',
          id:'',
          name: '',
          jwt:localStorage.getItem('jwt')
        },
        modal1: false,
        modal2: false,
        modal3:false,
        loading: true,
        loading1: true,
        //    分页
        ajaxHistoryData: [],
        // 初始化信息总条数
        dataCount: 0,
        // 每页显示多少条
        pageSize: 10,
        page:1,
        columns1: [
          {
            title: '机型大类',
            key: 'category_name'
          },
          {
            title: '品牌名称',
            key: 'name'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    marginBottom: '5px'
                  },
                  on: {
                    click: () => {
                      this.xiugai(params.row);
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    marginBottom: '5px'
                  },
                  attrs: {
                    style: 'background-color:#d6514d;border:1px solid #d6514d'
                  },
                  on: {
                    click: () => {
                      this.delete(params.row);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [],
        data2:[]
      }
    },
    created() {
      // console.log(localStorage.getItem('jwt'))
      this.jixingLei()
      this.tableShow()

      // console.log(this.data2)
    },
    methods: {
      //机型大类
      jixingLei(){
        this.$axios({
          method: 'post',
          url: 'admin/Category/show',
          data: this.$qs.stringify({
            name:this.juti_name,
            jwt: localStorage.getItem('jwt')
          })
        }).then(res => {
          // console.log(res.data.table,'用户信息')
          this.data2= res.data.table;
          this.lei = res.data.table
          // console.log(this.data2,'用户信息')
        }).catch(res => {
          this.$Message.error('请求超时,请稍后再试...');
        });
      },
      //用户信息展示
      tableShow(){
        this.$axios({
          method: 'post',
          url: 'admin/Brand/show',
          data: this.$qs.stringify({
            name:this.juti_name,
            cid:this.cid,
            page:this.page,
            jwt: localStorage.getItem('jwt')
          })
        }).then(res => {
          // console.log(res.data.table,'用户信息')
          this.ajaxHistoryData = res.data.table;
          this.dataCount = res.data.count;
          // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
          if (res.data.count < this.pageSize) {
            // this.historyData = this.ajaxHistoryData;
            this.data1 = res.data.table
          } else {
            this.data1 = this.ajaxHistoryData.slice(0, this.pageSize);
          }
        }).catch(res => {
          this.$Message.error('请求超时,请稍后再试...');
        });
      },
      //搜索
      handSeek(){
        this.tableShow()
      },
      //新增
      add(){
        this.modal3=true
        this.jixingLei()
      },
      ok3 (formAdd) {
        // console.log(this.$nextTick,'验证')
        this.$refs[formAdd].validate((valid) => {
          if (valid) {
            this.$axios({
              method: 'post',
              url: 'admin/Brand/insert',
              data: this.$qs.stringify({
                cid:this.leiId,
                name: this.formAdd.juti_name,
                jwt:localStorage.getItem('jwt')
              })
            }).then(res => {
              // console.log(res,'用户增加')
              this.tableShow()
              this.modal3 = false
              this.formAdd = {}
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
            });
            callback();
          } else{
            this.loading = false;
            this.$nextTick(() => {
              this.loading = true;
            });
            this.$Message.error('新增失败，请填写完整的信息!');
          }
        })
        this.tableShow()
        this.formAdd = {}
      },
      cancel3 () {
        this.tableShow()
        this.formAdd = {}
        // this.$Message.info('Clicked cancel');
      },
      //用户修改
      xiugai(row){
        // console.log(row)
        this.modal1=true
        this.formItem=row
        this.formItem.Id=row.Id
        this.formItem.cid=row.category
      },
      ok (formItem) {
        this.$refs[formItem].validate((valid) => {
          if (valid) {
            this.$axios({
              method: 'post',
              url: 'admin/Brand/upd',
              data: this.$qs.stringify({
                cid:this.formItem.cid,
                Id:this.formItem.Id,
                name: this.formItem.name,
                jwt:localStorage.getItem('jwt')
              })
            }).then(res => {
              // console.log(res,'用户修改')
              this.modal1=false
              this.tableShow()
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
            });
            callback();
          } else{
            this.loading = false;
            this.$nextTick(() => {
              this.loading = true;
            });
            this.$Message.error('修改失败,请正确填写信息!');
          }
        })
        this.tableShow()
      },
      cancel () {
        this.modal3=false
        // this.$Message.info('Clicked cancel');
      },
      //选择
      chioce(item){
        // console.log(item)
        this.cid=item.Id
      },
      chioce1(item){
        // console.log(item)
        this.leiId=item.Id
      },
      chioce2(item){
        // console.log(item)
        this.leiId=item.Id
      },
      //删除
      delete(row){
        // console.log(row)
        this.$Modal.confirm({
          title: '删除',
          content: '确认删除该条信息吗？',
          onOk: () => {
            this.$axios({
              method: 'post',
              url: 'admin/Brand/delete',
              data: this.$qs.stringify({
                Id: row.Id,
                jwt:localStorage.getItem('jwt')
              })
            }).then(res => {
              this.tableShow()
            }).catch(res => {
              this.$Message.error('请求超时,请稍后再试...');
            });
          },
          onCancel: () => {
            this.$Message.info('取消');
          }
        });
      },
      //分页
      changepage (index) {
        this.page = index
        this.tableShow()
        var _start = (index - 1) * this.pageSize;
        var _end = index * this.pageSize;
        this.data1 = this.ajaxHistoryData.slice(_start, _end);
      }
    }
  }
</script>

<style scoped>

</style>
