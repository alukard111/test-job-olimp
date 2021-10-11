import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

export default new Vuex.Store({
  state: {
    allBooks: null,
    allBooksInBasket: null,

    hotNewBooks: null,

  },


  mutations: {
    stateBooks(state, books) {
      state.allBooks = books
    },
    stateBasketBooks(state, basketBooks) {
      state.allBooksInBasket = basketBooks
    },
    stateHotNewBooks(state, hotNewBooks) {
      state.hotNewBooks = hotNewBooks
    }
  },


  actions: {
    getBooks(context) {
      axios.get('http://localhost:3000/books')
        .then(response => {
          if (response.status === 200) {
            context.commit('stateBooks', Object.assign(response.data))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getBooksFromBasket(context) {
      axios.get('http://localhost:3000/basketItems')
        .then(response => {
          if (response.status === 200) {
            context.commit('stateBasketBooks', Object.assign(response.data))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getHotNewBooks(context) {
      axios.get('http://localhost:3000/hotNewBooks')
        .then(response => {
          if (response.status === 200) {
            context.commit('stateHotNewBooks', Object.assign(response.data))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    setBooksInBasket(context, bookTitle) {
      const book = Object.assign(this.state.allBooks.find((item) => {
        return item.title === bookTitle
      }))
      axios.get('http://localhost:3000/basketItems')
        .then(response => {
          if (response.status === 200) {
            const statusItemInBasket = response.data.some((item) => {return bookTitle === item.title})
            if (statusItemInBasket) {
              const itemBook = response.data.find((item) => { return bookTitle === item.title })   
              axios.put(`http://localhost:3000/basketItems/${itemBook.id}`, {
                author: `${itemBook.author}`,
                title: `${itemBook.title}`,
                price: `${itemBook.price}`,
                path: `${itemBook.path}`,
                quantity: `${++itemBook.quantity}`,
              })
              .catch(error => {
                console.log(error)
              })
            } else {
              context.dispatch('addBooksInBasket', book)
            }
          }
        })
    },
    addBooksInBasket(context, bookObj) {
      axios.post('http://localhost:3000/basketItems', {
        author: `${bookObj.author}`,
        title: `${bookObj.title}`,
        price: `${bookObj.price}`,
        path: `${bookObj.path}`,
        quantity: 1,
      })
        .catch(error => {
          console.log(error)
      })
    },
    upQuantityBooks(context, bookObj) {
      axios.put(`http://localhost:3000/basketItems/${bookObj.id}`, {
        author: `${bookObj.author}`,
        title: `${bookObj.title}`,
        price: `${bookObj.price}`,
        path: `${bookObj.path}`,
        quantity: `${++bookObj.quantity}`,
      })
        .catch(error => {
          console.log(error)
        })
    },
    downQuantityBooks(context, bookObj) {
      if ((bookObj.quantity - 1 ) <= 0) {
        axios.delete(`http://localhost:3000/basketItems/${bookObj.id}`)
          .then(response => { if (response.status === 200) { context.dispatch('getBooksFromBasket') }})
          .catch(error => { console.log(error)})
      } else {
        axios.put(`http://localhost:3000/basketItems/${bookObj.id}`, {
          author: `${bookObj.author}`,
          title: `${bookObj.title}`,
          price: `${bookObj.price}`,
          path: `${bookObj.path}`,
          quantity: `${--bookObj.quantity}`,
        })
          .catch(error => {
            console.log(error)
          })
      }
     
      
    },
    deleteBookFromBasket(context, bookId) {
      axios.delete(`http://localhost:3000/basketItems/${bookId}`)
        .then(response => {   
          if (response.status === 200) {
            context.dispatch('getBooksFromBasket')  
          }
        })
        .catch(error => {
           console.log(error) 
        })
    },
    
    // Просто удаление циклом всех объектов из корзины 
    checkoutBasket(context) {
      if (this.state.allBooksInBasket.length > 0) {
        Promise.all (this.state.allBooksInBasket.map((el) => {
            return axios.delete(`http://localhost:3000/basketItems/${ el.id }`)
        }))
        .then(response => {
          return context.dispatch('getBooksFromBasket') 
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
  },


  modules: {
  },

  
  getters: {
    allBooks: state => {
      return state.allBooks
    },
    getAllBooksInBasket: state => {
      return state.allBooksInBasket
    },
    getHotNewBooksFromState: state => {
      return state.hotNewBooks
    }
  }
})
