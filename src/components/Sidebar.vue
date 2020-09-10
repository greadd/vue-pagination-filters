<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-group prepend-icon="mdi-filter-menu" value="true">
        <template v-slot:activator>
          <v-list-item-title>Фильтры</v-list-item-title>
        </template>
        <v-list-group sub-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Пол</v-list-item-title>
          </template>
          <v-list-item-group v-model="genders" multiple>
            <v-list-item
              v-for="gender in catsGenders"
              :key="gender"
              :value="gender"
            >
              <v-list-item-title v-text="gender"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
        <v-list-group sub-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Порода</v-list-item-title>
          </template>
          <v-list-item-group v-model="breeds" multiple>
            <v-list-item
              v-for="breed in catsBreeds"
              :key="breed"
              :value="breed"
            >
              <v-list-item-title v-text="breed"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
        <v-list-group sub-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Окрас</v-list-item-title>
          </template>
          <v-list-item-group v-model="colors" multiple>
            <v-list-item
              v-for="color in catsColors"
              :key="color"
              :value="color"
            >
              <v-list-item-title v-text="color"></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </v-list-group>
    </v-list>
    <v-badge
      overlap
      tile
      :content="genders.length + breeds.length + colors.length"
      :value="genders.length + breeds.length + colors.length !== filtersCount"
      color="error"
      class="d-block"
      offset-x="20"
      offset-y="20"
    >
      <v-btn
        color="primary"
        block
        tile
        :disabled="
          !filtersCount && !genders.length && !colors.length && !breeds.length
        "
        class="my-2"
        @click="setFilters"
        >Применить</v-btn
      ></v-badge
    >
    <v-badge
      overlap
      tile
      color="primary"
      :content="filtersCount"
      :value="filtersCount"
      class="d-block"
      offset-x="20"
      offset-y="20"
      ><v-btn
        color="error"
        block
        class="mx-auto"
        tile
        :disabled="
          !filtersCount && !genders.length && !colors.length && !breeds.length
        "
        @click="resetFilters"
        >Сбросить фильтры</v-btn
      ></v-badge
    >
  </v-navigation-drawer>
</template>

<script>
import _ from 'lodash'
export default {
  data: () => ({
    genders: [],
    breeds: [],
    colors: [],
    drawer: false
  }),
  computed: {
    catsGenders() {
      return Array.from(new Set(this.$store.getters.cats.map(c => c.gender)))
    },
    catsBreeds() {
      return Array.from(
        new Set(this.$store.getters.cats.map(c => c.breed).filter(c => c))
      )
    },
    catsColors() {
      return Array.from(
        new Set(this.$store.getters.cats.map(c => c.color).filter(c => c))
      )
    },
    filtersCount() {
      return _.flattenDeep(this.$store.getters.filters).length
    }
  },
  methods: {
    setFilters() {
      this.$store.dispatch('setFilters', [
        this.colors,
        this.breeds,
        this.genders
      ])
      this.drawer = false
    },
    resetFilters() {
      this.genders = this.colors = this.breeds = []
      this.$store.dispatch('resetFilters')
      this.drawer = false
    }
  }
}
</script>
