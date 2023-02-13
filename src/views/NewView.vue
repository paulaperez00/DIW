<template>

    <v-card class="mx-auto" max-width="100%" rounded="0">
        <v-img height="100px" cover
            src="https://st.depositphotos.com/1706091/1209/i/600/depositphotos_12093570-stock-photo-watercolor-background.jpg">

            <v-avatar color="grey" size="36px" rounded="3">
                <v-img class="mx-auto" cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            <!-- Uso los props para almacenar el nombre y el apellido del formulario -->
            <v-list-item class="text-white">{{ nombre }} {{ apellido }}</v-list-item>
        </v-img>
    </v-card>
    <v-sheet width="600" class="mx-auto">
        <v-text-field label="Introduce el nombre del producto" v-model="nombre_producto"></v-text-field>
        <v-text-field label="Introduce una descripción" v-model="descripcion_producto"></v-text-field>
        <v-btn color="teal-lighten-4" @click="guardar">Añadir producto</v-btn>

        <v-table width="600" class="mx-auto">
            <thead>
                <tr>
                    <th class="text-left">
                        Id
                    </th>
                    <th class="text-left">
                        Nombre
                    </th>
                    <th class="text-left">
                        Descripción
                    </th>
                    <th class="text-left">

                    </th>
                    <th class="text-left">

                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in products">
                    <td>{{ index }}</td>
                    <td>{{ producto.nombre_producto }}</td>
                    <td>{{ producto.descripcion_producto }}</td>
                    <td><v-list-item color="teal-darken-4" link prepend-icon="mdi-delete"
                            @click="eliminar(index)"></v-list-item></td>

                    <td><v-list-item color="teal-darken-4" link prepend-icon="mdi-pencil"
                            @click="modificar(index)"></v-list-item></td>

                </tr>
            </tbody>
        </v-table>

    </v-sheet>
</template>
<script>
export default {
    data() {
        return {
            indice: -1,
            nombre_producto: '',
            descripcion_producto: '',
            products: []
        }

    },
    methods: {

        //guardar los campos introducidos
        guardar() {
            if (this.nombre_producto != '' && this.descripcion_producto != '') {
                this.products.push({
                    nombre_producto: this.nombre_producto,
                    descripcion_producto: this.descripcion_producto,
                });
                this.nombre_producto = '',
                    this.descripcion_producto = ''
            } else {
                window.alert("Debes rellenar los campos")
            }


        },

        //elimina el campo seleccionado
        eliminar(index) {
            this.products.splice(index, 1);
        },
        modificar(index) {
            var producto = this.products[index]
            this.indice = -1,
                this.indice = index,
            //rellena los campos de nombre y descripcion para editarlos
            this.nombre_producto = producto.nombre_producto;
            this.descripcion_producto = producto.descripcion_producto;
            
            //No me ha dado tiempo a terminar este apartado, cuando edito un elemento del array se me crea uno nuevo en lugar de actualizarse
            if (this.indice != -1) {
                //Si es -1 es un producto nuevo y se agrega como nuevo a la lista
                this.products.push(data)
            } else {
                //Si es contrario a -1 reemplaza el valor del indice por el nuevo
                this.products[this.indice] = data
            }
        }
    },
    props: {
        nombre: {
            type: String
        },
        apellido: {
            type: String
        }
    }

}



</script>