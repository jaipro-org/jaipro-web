<template>
  <div id="payment-list__container" class="mb-2 pt-4">
    <h1 class="payment-list__title">Pagos</h1>

    <b-row class="mx-0 justify-content-center mt-4">
      <b-col cols="12" lg="3" xl="4">
        <span>Categoría</span>
        <v-select
          class="payment-list__filter mb-3"
          multiple
          v-model="categorySelected"
          :options="categoryOptions"
          :reduce="(option:any) => option.value"
        />
      </b-col>
      <b-col cols="12" lg="3">
        <span>Fecha de publicación</span>
        <b-form-input
          type="date"
          class="payment-list__filter mb-3"
        ></b-form-input>
      </b-col>
      <b-col cols="12" lg="3" xl="4">
        <span>Ubicación</span>
        <v-select
          class="payment-list__filter mb-3"
          multiple
          v-model="ubicationSelected"
          :options="ubicationOptions"
          :reduce="(option:any) => option.value"
        />
      </b-col>
      <b-col cols="12" lg="3" xl="1" class="d-flex align-items-center pt-2">
        <b-button variant="primary" class="payment-list__button"
          >Buscar</b-button
        >
      </b-col>
    </b-row>

    <payments-table
      class="mt-4"
      :fields="fields"
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template v-slot:action="{ row }">
        <b-button
          variant="primary"
          v-if="row.isAction"
          @click="$router.push({ name: 'pay-comision' })"
        >
          <i class="fa-regular fa-money-bill-1"></i>
          Pagar
        </b-button>
      </template>
    </payments-table>
    <div class="d-flex justify-content-end my-4">
      <b-pagination
        v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        prev-text="<"
        next-text=">"
      ></b-pagination>
    </div>

    <!-- <div>
      <b-table>
        <b-thead>
          <b-tr>
            <b-th sticky-column>Codigo de Pago</b-th>
            <b-th>Tipo de Pago</b-th>
            <b-th>Cliente</b-th>
            <b-th>Monto Total</b-th>
            <b-th>%Comisión</b-th>
            <b-th>Fecha Emisión</b-th>
            <b-th>Fecha Vencimiento</b-th>
            <b-th>Estado</b-th>
            <b-th>Acciones</b-th>
          </b-tr>
          <b-tbody>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
          </b-tbody>
        </b-thead>
      </b-table>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import { PaymentsTable } from "./components"

export default defineComponent({
  components: {
    PaymentsTable,
  },
  setup() {
    const categorySelected = ref([])
    const categoryOptions = [
      {
        label: "Albañil",
        value: 0,
      },
      {
        label: "Electricista",
        value: 1,
      },
    ]
    const ubicationSelected = ref([])
    const ubicationOptions = [
      {
        label: "Lima Norte",
        value: 0,
      },
      {
        label: "Lima Sur",
        value: 1,
      },
    ]

    // TABLE
    const fields = [
      { key: "code", label: " Codigo de Pago" },
      { key: "type", label: " Tipo de Pago" },
      { key: "client", label: " Cliente" },
      { key: "amount", label: " Monto Total" },
      { key: "comision", label: " %Comisión" },
      { key: "issueDate", label: " Fecha Emisión" },
      { key: "dueDate", label: " Fecha Vencimiento" },
      { key: "status", label: " Estado" },
    ]

    const items = [
      {
        code: "AASD1",
        type: "Online",
        client: "Hugo A.",
        amount: "250",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Pendiente ",
        isAction: true,
      },
      {
        code: "ZXCZC2",
        type: "Online",
        client: "Ricardo A.",
        amount: "150",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Pendiente",
        isAction: true,
      },
      {
        code: "ASDAD3",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Observado",
        isAction: false,
      },
      {
        code: "ADFAF4",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Finalizado",
        isAction: false,
      },
      {
        code: "QWEQ5",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Finalizado",
        isAction: false,
      },
      {
        code: "XZVZX6",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Confirmado",
        isAction: true,
      },
      {
        code: "ASDAD7",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Finalizado",
        isAction: false,
      },
      {
        code: "QWEQWE8",
        type: "Online",
        client: "Hilario A.",
        amount: "200",
        comision: "5",
        issueDate: "01-02-2023",
        dueDate: "08-07-2023",
        status: "Pendiente",
        isAction: false,
      },
    ]
    const currentPage = ref(1)
    const perPage = ref(4)

    return {
      // PARAMS
      categorySelected,
      categoryOptions,
      ubicationSelected,
      ubicationOptions,
      fields,
      items,
      currentPage,
      perPage,
    }
  },
})
</script>

<style scoped lang="scss">
#payment-list__container {
  .payment-list__title {
    font-size: 1.6rem;
  }
  .payment-list__filter {
    font-size: 1rem;
    height: 35px;
    border: 1px solid rgb(184, 184, 184);
    border-radius: 4px;
  }
}

@media (max-width: 991px) {
  #payment-list__container {
    .payment-list__button {
      width: 100%;
    }
  }
}
</style>
