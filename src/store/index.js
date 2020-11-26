import { createStore } from "vuex";
import { userService } from "@/services/userServices";


const store = createStore({
  state() {
    return {
      user: {},
      projets: []
    };
  },
  mutations: {
    getUser(state, payload) {
       userService.getUser(payload.value).then(result => {
        return state.user = result
      })
    },
    getProjets(state, payload) {
       userService.getInfos(payload.value).then(result => {
         console.log(result);
        return state.projets = result
      })
    },
  },
  actions: {
    getUser(context, payload) {
      context.commit("getUser", payload);
    },
    getProjets(context, payload) {
      console.log(payload);
      context.commit("getProjets", payload);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getProjets(state) {
      console.log(state);
      return state.projets;
    },
  },
  modules: {},
});

export default store;

//
//     another logic for store
//
// import { inject, provide, reactive } from "vue";
// import { userService } from "@/services/userServices";
//
// export class State {
//   loading = false;
//   loaded = false;
//   error = "";
//   user;
//
//   async getUser(payload) {
//
//     if(!this.loaded) {
//       this.loading = true;
//       await userService.getUser(payload !== undefined ? payload :
//         "ibrahimdans").then(response => {
//         this.loaded = true;
//         return this.user = response;
//       }).catch(err => {
//         this.loading = false;
//         this.error = err.message;
//         console.log(err);
//       });
//     }
//   }
//
//   async clearTasks() {
//     this.loaded = true;
//     this.user = undefined;
//   }
// }
//
// export const stateSymbol = Symbol("state");
// export const createState = () => {
//   return reactive(new State());
// };
//
// export const useState = () => inject(stateSymbol);
// export const provideState = () => provide(
//   stateSymbol,
//   createState(),
// );
