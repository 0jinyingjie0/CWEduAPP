import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


/**
 * 创建一个 Vuex 容器实例，用来在组件的外部管理共享的数据状态
 */
const store = new Vuex.Store({
    /**
     * 类似于组件中的 data
     * <p>{{ $store.state.count }}</p>
     *  console.log(this.$store.state.count)
     */
    state: {
        count: 0
    },
    /**
    * mutations的方法只能修改state中的属性
    * this.$store.commit('increment')
    */
    mutations: {
        increment(state, obj) {
            // 变更状态
            state.count++;
        }
    },
    /**
    * mutations的context代表与store 实例具有相同方法和属性的
    * this.$store.dispatch('increment', 10)
    */
    actions: {
        increment(context) {
          // 执行异步操作
          setTimeout(() => {
            // 提交 mutation 更新 state
            context.commit("increment");
          }, 1000);
        }
      }
});

export default store;