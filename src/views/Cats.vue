<template>
  <v-container fluid>
    <div v-if="!displayedCats" class="d-flex justify-center">
      <h1>Котиков по заданным фильтрам не найдено.</h1>
    </div>
    <div v-else>
      <v-pagination
        v-model="page"
        :length="pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @input="changePage"
      ></v-pagination>
      <div class="d-flex justify-center">
        Котиков: {{ filteredCats.length }}
      </div>
      <v-row justify="start">
        <v-col
          v-for="cat in displayedCats"
          :key="cat.id"
          class="column"
          cols="auto"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card class="elevation-6" tile>
              <v-img
                max-height="200"
                src="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out blue darken-2 show-info white--text"
                    style="height: 100%;"
                  >
                    <v-card-text>
                      <div>Порода: {{ cat.breed || 'не указана' }}</div>
                      <div>Окрас: {{ cat.color || 'не указан' }}</div>
                      <div>Возраст: {{ cat.age || 'не указан' }}</div>
                      <div>Комментарий: {{ cat.comment || 'не указан' }}</div>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-title>{{ cat.name }}</v-card-title>
              <v-card-subtitle>{{ cat.gender }}</v-card-subtitle>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out show-buttons"
                >
                  <v-btn
                    color="primary"
                    fab
                    small
                    text
                    @click="$router.push(`/cat/${cat.id}`)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    color="error"
                    fab
                    small
                    text
                    @click="deleteConfirmation(cat.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-pagination
        v-if="displayedCats.length > 4"
        v-model="page"
        :length="pages"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @input="changePage"
      ></v-pagination>
    </div>
    <v-dialog v-if="dialog" v-model="dialog" max-width="290">
      <v-card tile>
        <v-card-title class="justify-center">Подтверждение</v-card-title>
        <v-card-text class="text-center">
          Подтвердите удаление карточки товара:
          <strong>{{ displayedCats.find(c => c.id === deleteId).name }}</strong>
        </v-card-text>
        <v-card-actions class="flex-column">
          <v-btn color="error" tile block class="mb-2" @click="deleteCat"
            >Подтвердить</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" tile block @click="dialog = false"
            >Отмена</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin'
export default {
  name: 'Cats',
  mixins: [paginationMixin],
  data: () => ({
    dialog: false,
    deleteId: null
  }),

  computed: {
    cats() {
      return this.$store.getters.cats
    },
    filters() {
      return this.$store.getters.filters
    },
    filteredCats() {
      if (
        !this.filters[0].length &&
        !this.filters[1].length &&
        !this.filters[2].length
      )
        return this.cats
      if (!this.filters[0].length && !this.filters[1].length)
        return this.cats.filter(c => this.filters[2].includes(c.gender))
      if (!this.filters[0].length && !this.filters[2].length)
        return this.cats.filter(c => this.filters[1].includes(c.breed))
      if (!this.filters[1].length && !this.filters[2].length)
        return this.cats.filter(c => this.filters[0].includes(c.color))
      if (!this.filters[0].length)
        return this.cats.filter(
          c =>
            this.filters[1].includes(c.breed) &&
            this.filters[2].includes(c.gender)
        )
      if (!this.filters[1].length)
        return this.cats.filter(
          c =>
            this.filters[0].includes(c.color) &&
            this.filters[2].includes(c.gender)
        )
      if (!this.filters[2].length)
        return this.cats.filter(
          c =>
            this.filters[0].includes(c.color) &&
            this.filters[1].includes(c.breed)
        )
      return this.cats.filter(
        c =>
          this.filters[0].includes(c.color) &&
          this.filters[2].includes(c.gender) &&
          this.filters[1].includes(c.breed)
      )
    }
  },
  watch: {
    filteredCats() {
      this.setupPagination(this.filteredCats)
    }
  },
  mounted() {
    this.setupPagination(this.filteredCats)
  },
  methods: {
    deleteConfirmation(id) {
      this.dialog = true
      this.deleteId = id
    },
    deleteCat() {
      this.dialog = false
      this.$store.dispatch('deleteCat', this.deleteId)
    }
  }
}
</script>

<style>
.show-info {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.show-buttons {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.column {
  width: 20%;
}
@media (max-width: 1400px) {
  .column {
    width: 50%;
  }
}
@media (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
