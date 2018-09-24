// 写我们的vuex代码
import Vue from 'vue'
import Vuex from 'vuex'

// 如果是在模块化的环境中，插件是必须手动调用use方法
Vue.use(Vuex)

// 存放vuex的状态
const state = {
  todoList: [
    { id: 1, name: '吃饭', completed: true },
    { id: 2, name: '睡觉', completed: true },
    { id: 3, name: '打豆豆', completed: false }
  ],
  index: 3,
  msg: '哈哈',
  title: '呵呵'
}

// 存放mutations
const mutations = {
  // 添加一条新的todo
  addTodo(state, payload) {
    state.todoList.push({
      id: ++state.index,
      name: payload.todoName,
      completed: false
    })
  },
  // 删除一条todo， 需要传递id值
  delTodo(state, payload) {
    // 根据id找到下标
    let idx = state.todoList.findIndex(item => item.id === payload.id)
    // 删除对应的数据即可
    state.todoList.splice(idx, 1)
  },
  // 修改一条todo,需要传递id值
  changeStatus(state, payload) {
    let idx = state.todoList.findIndex(item => item.id === payload.id)
    state.todoList[idx].completed = !state.todoList[idx].completed
  },
  clearCompleted(state) {
    state.todoList = state.todoList.filter(item => !item.completed)
  }
}

// vuex中的getters，类似于实例中computed
// getters的作用也是给vuex提供数据，但是这个数据是算出来的
const getters = {
  // unCompletedCount根据todoList中未完成的条数变化
  unCompletedCount: function(state) {
    // 返回completed为false的个数
    return state.todoList.filter(item => !item.completed).length
  },
  // 控制完成按钮是否显示
  // 只要有一个完成就返回true
  isShow: function(state) {
    return state.todoList.some(item => item.completed)
  }
}

// actions类似于mutations，但是可以有异步的操作
const actions = {
  // actions是不能直接修改state数据，修改state数据只有mutations
  // actions最终还是提交了mutations
  // context: 上下文，代表了当前的store
  clearCompletedAsync(context) {
    setTimeout(() => {
      context.commit('clearCompleted')
    }, 1000)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters
})

export default store
