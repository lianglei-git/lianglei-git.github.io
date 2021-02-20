
Vue.component('Abx', {
    template: `
        <div>akljsdhkaj hlkjasdklj</div>
    `
})
new Vue({
    el: '#app',
    data: {
        titles: [
            {
                label:"月份查询",
                key: 'date'
            },
            {
                label:"区间查询",
                key: 'date-d'
            },
            {
                label: "组织查询",
                key: 'demp'
            },
            {
                label:"区域查询",
                key: 'area'
            },
            {
                label:"筛选查询",
                key: 'screen'
            },
            {
                label: "指标看板",
                key: 'display'
            },
             {
                 label:"园区明细",
                 key: 'park-detail'
             },
             {
                label:'园区客个详情',
                key : 'parkCustCnt'
             },
             {
                label:'到付未寄详情',
                key : 'parkCustCnt'
             },
             {
                label:'转横屏',
                key : 'isH'
             },
             {
                label:'园区搜索',
                key : 'search'
             },
             {
                label:'维护',
                key : 'maintain'
             },
             {
                label:'访园次',
                key : 'parkvisit'
             },
             {
                label:'跟进备注',
                key : 'follow'
             },
             {
                label:'销售信息',
                key : 'deparmentName'
             },
             {
                label:'面包屑',
                key : 'bread'
             },
        ]
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
})
