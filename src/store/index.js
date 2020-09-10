import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [
      {
        id: 1,
        name: 'Барсик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 3,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 2,
        name: 'Бесси',
        breed: 'абиссинская',
        color: 'бежевая',
        gender: 'Кошка',
        age: 7,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 3,
        name: 'Толик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 40,
        comment: 'толик'
      },
      {
        id: 4,
        name: 'Барсик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 3,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 5,
        name: 'Барсик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 3,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 6,
        name: 'Барсик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 3,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 7,
        name: 'Барсик',
        breed: 'дворняга',
        color: 'чёрный',
        gender: 'Кот',
        age: 3,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 8,
        name: 'Люси',
        breed: 'абиссинская',
        color: 'рыжий',
        gender: 'Кошка',
        age: 2,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 9,
        name: 'Сойер',
        breed: 'деревенский',
        color: 'чёрно-белый',
        gender: 'Кот',
        age: 11,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 10,
        name: 'Ларсик',
        breed: 'британский',
        color: 'серый',
        gender: 'Кот',
        age: 2,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      },
      {
        id: 11,
        name: 'Ларсик',
        breed: 'британский',
        color: 'серый',
        gender: 'Кот',
        age: 2,
        comment:
          'добрый отзывчивый котик, очень мягкий и пушистый, очень сильно любит общение и игры'
      }
    ],
    filters: [[], [], []]
  },
  mutations: {
    addCat(state, cat) {
      state.cats.unshift(cat)
    },
    deleteCat(state, id) {
      state.cats = state.cats.filter(c => c.id !== id)
    },
    updateCat(state, cat) {
      const cats = state.cats.concat()
      const idx = cats.findIndex(c => c.id == cat.id)
      cats[idx] = cat
      state.cats = cats
    },
    setFilters(state, data) {
      state.filters = data
    },
    resetFilters(state) {
      state.filters = [[], [], []]
    },
    totalDisplayedCats(state, items) {
      state.totalDisplayedCats = items ? items.length : 0
    }
  },
  actions: {
    addCat({ commit }, cat) {
      commit('addCat', cat)
    },
    deleteCat({ commit }, id) {
      commit('deleteCat', id)
    },
    updateCat({ commit }, cat) {
      commit('updateCat', cat)
    },
    setFilters({ commit }, data) {
      commit('setFilters', data)
    },
    resetFilters({ commit }) {
      commit('resetFilters')
    }
  },
  getters: {
    cats: s => s.cats,
    filters: s => s.filters
  }
})
