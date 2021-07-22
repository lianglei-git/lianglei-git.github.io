
Vue.component('Dialogs', {
    props: ['visible', 'src', 'beforeclose','width'],

    template: `
    <el-dialog
    :visible.sync="visible"
    :width="width || '32%'"
    top='0'
    :before-close="beforeclose">
    <div style="height:80%;overflow:auto">
    </div>
    <img :src="src" />
  </el-dialog>
    `
})
new Vue({
    el: '#app',
    data: {
        isshow: false,
        dialogVisible: false,
        src:"",
        width:false,
        titles: [
            {
                label:'工程目录',
                key: 'menu'
            },
            {
                label: "月份查询",
                key: 'date',
                src: 'images/date.gif',
                isShowDetail: false,
                text: '月份查询为通用查询条件，控制所有接口的入参，可选近两年。',
                codeText: '路径：src/components/condition-select.vue'
            },
            {
                label: "区间查询",
                key: 'date-d',
                src: 'images/date-d.gif',
                isShowDetail: false,
                text: '区间查询为通用查询条件，控制所有接口的入参，只能查询当月数据。'
                ,
                codeText: '路径：src/components/condition-select.vue'
            },
            {
                label: "组织查询",
                key: 'demp',
                isShowDetail: false,
                src: 'images/demp.gif',
                text: '组织查询为通用查询条件，控制所有接口的入参，分组织、员工权限。'
                ,
                codeText: '路径：src/components/org-panel.vue'
            },
            {
                label: "区域查询",
                key: 'area',
                isShowDetail: false,
                src: 'images/area.gif',
                text: '区域查询为通用查询条件，控制所有接口的入参，可选全国范围。'
                ,
                codeText: '路径：src/components/area-select.vue'
            },
            {
                label: "筛选查询",
                key: 'screen',
                isShowDetail: false,
                src: 'images/screen.gif',
                text: '1. 园区汇总/部门平铺 可选择寄收类型，行业类型（单选）作为全局查询条件',
                text2: '2. 园区平铺 可选择寄收类型、行业、是否关注、是否指派、园区等级（多选）、以及覆盖客率、园区客个、（寄收）（寄）（收）客个、流失客个、潜在客个最高最低筛选'
                ,
                codeText: '路径：src/components/screen.vue'
            },
            {
                label: "指标看板",
                key: 'display',
                isShowDetail: false,
                src: 'images/home.gif',
                text: '指标看板为通用模块' ,
                codeText: '路径：src/components/dataDisplay.vue'
            },
            {
                label: "园区明细",
                key: 'park-detail',
                isShowDetail: false,
                src: 'images/home.gif',
                text:'汇总页面-> 园区明细：主要基于ks-table来实现移动端表格，包括横竖屏，组织可以下钻'
                ,
                codeText: '路径：src/views/summary'
            },
            {
                label: '园区客个详情',
                key: 'parkCustCnt',
                isShowDetail: false,
                src: 'images/table-detaile.gif',
                text: '此为新页面，通过弹窗的方式来实现'  ,
                codeText: '路径：src/components/park-custCnt'
            },
            {
                label: '到付未寄详情',
                key: 'parkCustCnts',
                isShowDetail: false,
                src: 'images/table-detaile.gif',
                text: '此为新页面，通过弹窗的方式来实现',
                codeText: '路径：src/components/park-lostCustCnt'
            },
            {
                label: '转横屏',
                key: 'isH',
                isShowDetail: false,
                src: 'images/showh.gif',
                text: ' --- ',
                codeText: '---'
            },
            {
                label: '园区搜索',
                key: 'search',
                isShowDetail: false,
                src: 'images/search.gif',
                text: '此为新页面，通过弹窗的方式来实现',
                codeText: '路径：src/components/park-search'
            },
            {
                label: '维护',
                key: 'maintain',
                isShowDetail: false,
                src: 'images/maintain.gif',
                text: '维护页面分为：维护、反馈、分配',
                codeText: '路径：src/components/maintain'
            },
            {
                label: '访园次',
                key: 'parkvisit',
                isShowDetail: false,
                src: 'images/table-detaile.gif',
                text: '此为新页面，通过弹窗的方式来实现',
                codeText: '路径：src/components/park-visiCnt'
            },
            {
                label: '跟进备注',
                key: 'follow',
                isShowDetail: false,
                src: 'images/table-detaile.gif',
                text: '此为新页面，通过弹窗的方式来实现',
                codeText: '路径：src/components/follow-table'
            },
            {
                label: '销售信息',
                key: 'deparmentName',
                isShowDetail: false,
                src: 'images/table-detaile.gif',
                text: '跳转跨声员工信息',
                codeText: '路径：src/components/salesMessage'
            },
            {
                label: '面包屑',
                key: 'bread',
                isShowDetail: false,
                src: 'images/home.gif',
                text: '只有在下钻时候才会展示，会重新计算表格高度',
                codeText: '路径：src/components/Crumbs'
            },
        ]
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        beforeclose() {
            this.dialogVisible = false
            this.width = false
        },
        itemClick(item) {
            location.href ='#' + item.key
        }
    }
})
{/* <pre class="pre">
    + api
    + assets
    + components
        + area-select -- '热门城市' 组件
            - hot-city.js 
            - index.vue
        + common-popup -- 公用弹窗壳子
            - index.vue
        + condition-select -- 区域查询跟组件
            - condition-select.vue
        + Crumbs -- 面包屑组件
            - index.less
            - index.vue
        + dataDisplay -- 指标看板
        + follow-table -- 跟进备注详情
        + indicators -- 指标说明
        + maintain -- 维护组件
            + allocationCom -- 开发阶段组件
                - devphase.vue
                - index.less
                - index.vue
            + feedbackJsx -- 位置错误 跳转其他模块
                - index.jsx
                - index.less
            + maintainJsx -- 维护组件-详情
                - index.jsx
                - index.css
            - index.less
            - index.vue -- 入口组件
            - mixin.js -- 搜索人员通用JSX
        + org-panel -- 组织选择
        + park-custCnt -- 园区客个详情
        + park-visiCnt -- 仿圆次详情
        + park-lostCustCnt -- 详情
        + park-search -- 搜索
        + salesMessage -- 销售信息
        + screen -- 筛选组件
        ...
    + demo
        - ...
    + mixins
        - ...
    + utils
        - ...
    + views
        + park-tile -- 园区平铺
        + park-summary -- 园区汇总
    - App.vue
    ...
</pre> */}