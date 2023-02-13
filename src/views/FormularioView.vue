<template>
    <v-sheet width="300" class="mx-auto">
        <v-form>
            <v-text-field label="Introduce nombre" clas="d-flex justify-center mb-6" v-model="nombre"></v-text-field>
            <v-text-field label="Introduce apellido" v-model="apellido"></v-text-field>
            <v-btn color="teal-lighten-4" :disabled="!invisible" @click="pasar">
                Logear
            </v-btn>
        </v-form>
    </v-sheet>
</template>
<script>
import NewView from './NewView.vue'

export default {
    data() {
        return {
            nombre: '',
            apellido: '',
            invisible: false
        }
    },
    methods: {
        comprobar() {
            this.invisible = this.nombre != '' && this.apellido != ''
        },
        pasar() {
            this.$router.push({ name: 'listado', params: { nombre: this.nombre, apellido: this.apellido } })
        }
    },
    watch: {
        nombre: function () {
            this.comprobar()
        },
        apellido: function () {
            this.comprobar()
        }
    }
}
</script>