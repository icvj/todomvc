<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.completed}" v-for="item in todoList" :key="item.id">
        <div class="view">
          <input @change="changeStatus({id: item.id})" class="toggle" type="checkbox" :checked="item.completed">
          <label>{{item.name}}</label>
          <button class="destroy" @click="delTodo({id: item.id})"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
    </ul>
  </section>
</template>

<script>
// 导入mapState辅助函数
import { mapState, mapMutations } from 'vuex'
export default {
  // 数组表示你需要从vuex中对应多少数据
  // 相当于自己提供了两个computed属性
  computed: mapState('user', ['todoList', 'msg', 'title']),
  methods: {
    ...mapMutations('user', ['delTodo', 'changeStatus'])
  }
  // methods: {
  //   delTodo(id) {
  //     this.$store.commit('delTodo', { id })
  //   },
  //   changeStatus(id) {
  //     this.$store.commit('changeStatus', { id })
  //   }
  // }
}
</script>

<style>
</style>
