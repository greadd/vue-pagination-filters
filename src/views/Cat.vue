<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-6" tile>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Реактирование товара</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="cat.name"
                label="Кличка*"
                type="text"
                outlined
                dense
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                v-model="cat.breed"
                label="Порода"
                type="text"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                v-model="cat.color"
                label="Окрас"
                type="text"
                outlined
                dense
              ></v-text-field>
              <v-radio-group
                v-model="cat.gender"
                label="Пол*"
                row
                dense
                :rules="genderRules"
              >
                <v-radio label="Кот" value="Кот"></v-radio>
                <v-radio label="Кошка" value="Кошка"></v-radio>
              </v-radio-group>
              <v-text-field
                v-model="cat.age"
                label="Возраст"
                type="text"
                outlined
                dense
                :rules="ageRules"
              ></v-text-field>
              <v-textarea
                v-model="cat.comment"
                label="Комментарий"
                outlined
                dense
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/" tile class="mb-2 ml-2">
              <v-icon left>mdi-arrow-left-circle</v-icon>Назад
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid || loadingBtn"
              :loading="loadingBtn"
              color="success"
              class="mb-2 mr-2"
              tile
              @click="updateCat"
            >
              <v-icon left>mdi-content-save-edit</v-icon>Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    loader: null,
    loadingBtn: false,
    cat: {
      name: '',
      breed: '',
      color: '',
      gender: '',
      age: '',
      comment: ''
    },
    nameRules: [
      v => !!v || 'Введите кличку',
      v => (v && v.length > 1) || 'Кличка не можеть быть короче 2-х символов'
    ],
    genderRules: [v => !!v || 'Укажите'],
    ageRules: [
      v => !v || /^\d+$/.test(v) || 'Возраст не может быть дробным числом'
    ]
  }),
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 1500)
      this.loader = null
    }
  },
  mounted() {
    this.cat = this.$store.getters.cats.find(c => c.id == this.$route.params.id)
  },
  methods: {
    async updateCat() {
      this.loader = 'loadingBtn'
      if (this.$refs.form.validate())
        await setTimeout(() => {
          this.$store.dispatch('updateCat', this.cat)
          this.$router.go(-1)
        }, 1500)
    }
  }
}
</script>

<style></style>
