import _ from 'lodash'
export default {
  data: () => ({
    page: 1,
    perPage: 10,
    pages: 0,
    allCats: [],
    displayedCats: []
  }),
  methods: {
    setupPagination(allCats) {
      this.allCats = _.chunk(allCats, this.perPage)
      this.pages = this.allCats.length
      if (+this.$route.query.page > this.pages)
        this.$router.push(`${this.$route.path}?page=${this.pages}`)
      if (+this.$route.query.page < 1)
        this.$router.push(`${this.$route.path}?page=${1}`)
      this.page = +this.$route.query.page || 1
      this.displayedCats = this.allCats[this.page - 1] || this.allCats[0]
    },
    changePage(page) {
      if (+this.$route.query.page !== page)
        this.$router.push(`${this.$route.path}?page=${page}`)
      this.displayedCats = this.allCats[page - 1] || this.allCats[0]
    }
  }
}
