<template>
    <section class="src-components-ingresosform">
        <div class="jumbotron">
            <h2>Formulario de Ingresos/Gastos</h2>
            <br>
            <vue-form :state="formState" @submit.prevent="enviar()">
                <validate tag="div">
                    <label for="nombre">Nombre</label>
                    <input
                    id="nombre"
                    class="form-control"
                    type="text"
                    v-model.trim="formData.nombre"
                    required
                    :minlength="nombreMinLength"
                    :maxlength="nombreMaxLength"
                    name="nombre"
                    autocomplete="off"
                    no-spaces
                    />
                    <field-messages name="nombre">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo Requerido</div>
                        <div slot="minlength" class="alert alert-danger mt-1">
                            Este campo debe contener al menos 3 caracteres</div>
                        <div slot="maxlength" class="alert alert-danger mt-1">
                            Este campo debe contener menos de 15 caracteres</div>
                        <div slot="no-spaces" class="alert alert-danger mt-1">
                            Este campo no debe contener espacios</div>      
                    </field-messages>
                </validate>
                <br>
                <validate tag="div">
                    <label for="descripcion">Descripcion</label>
                    <input
                    id="descripcion"
                    class="form-control"
                    type="text"
                    v-model.trim="formData.descripcion"
                    required
                    name="descripcion"
                    autocomplete="off"
                    />
                    <field-messages name="descripcion">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo Requerido</div>   
                    </field-messages>
                </validate>
                <br>
                <validate tag="div">
                    <label for="importe">Importe</label>
                    <input
                    id="importe"
                    class="form-control"
                    type="number"
                    v-model.trim="formData.importe"
                    required
                    name="importe"
                    autocomplete="off"
                    num-only
                    />
                    <field-messages name="importe">
                        <div slot="required" class="alert alert-danger mt-1">
                            Campo Requerido</div>
                        <div slot="num-only" class="alert alert-danger mt-1">
                            Este campo debe contener solo numeros</div>    
                    </field-messages>
                </validate>
            </vue-form>
            <br>
            <div class="table-responsive">
                <table class="table table-dark">
                    <th>Usuario</th>
                    <th>Desc.</th>
                    <th>Importe</th>
                    <th>Fecha de Gasto</th>
                    <th>Gasto Total</th>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

  export default  {
    name: "src-components-ingresosform",
    props: [],
    mounted() {
    },
    data() {
        return {
            gastos: [],
            formData: this.getInitialData(),
            nombreMinLength: 3,
            nombreMaxLength: 15,
        };
    },
    methods: {
        getInitialData() {
        return {
          nombre: null,
          descripcion: null,
          importe: null
        }
      }
    },
    computed: {},
    components: { validate }
}


</script>

<style scoped lang="css">
</style>