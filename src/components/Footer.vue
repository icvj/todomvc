<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{unCompletedCount}}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-show="isShow" @click="clearCompletedAsync" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['unCompletedCount', 'isShow'])
  },
  methods: {
    ...mapActions('user', ['clearCompletedAsync']),
    ...mapMutations([])
  }
}
</script>

<style>
</style>
