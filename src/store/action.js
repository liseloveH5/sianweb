import types from './mutation-types'

// export const addToCart = ({ commit }, product) => {
//   if (product.inventory > 0) {
//     commit(types.ADD_TO_CART, {
//       id: product.id
//     })
//   }
// }

export default {
  setHeader: ({commit}, header) => {
    commit(types.SET_HEADER, {
      header: header
    })
  },
  setLang: ({commit}, lang) => {
    commit(types.SET_LANG, {
      lang: lang
    })
  },
  setFooter: ({commit}, footer) => {
    commit(types.SET_FOOTER, {
      footer: footer
    })
  }
}

