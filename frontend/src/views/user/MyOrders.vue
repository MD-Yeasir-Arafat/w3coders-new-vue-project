<script setup>
import { useOrder } from "@/stores";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { Loader } from "@/components/Loader";
import InfiniteLoading from "v3-infinite-loading";
// import "v3-infinite-loading/lib/style.css";
const order = useOrder();
const { getOrders, loading, noResult } = storeToRefs(order);

onMounted(() => {
  loadData();
});

const loadData = () => {
  order.index();
};
</script>

<template>
  <div>
    <section class="inner-section single-banner">
      <div class="container">
        <h2>Order List</h2>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">My Orders</a></li>
        </ol>
      </div>
    </section>
    <section class="inner-section wishlist-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            
            <div class="table-scroll">
              <table class="table-list">
                <thead>
                  <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Address</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">discount</th>
                    <th scope="col">Total</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, index) in getOrders" :key="index">
                    <td class="table-serial">
                      <h6>{{ ++index }}</h6>
                    </td>
                    <td class="table-image">#{{ order.order_number }}</td>
                    <td class="table-name">
                      <h6>{{ order.shipping_address }}</h6>
                    </td>
                    <td class="table-price">
                      {{ $filters.currencySymbol(order.subtotal) }}
                    </td>
                    <td class="table-price">
                      {{ $filters.currencySymbol(order.discount) }}
                    </td>

                    <td class="table-price">
                      {{ $filters.currencySymbol(order.total) }}
                    </td>
                    <td class="table-shop">
                      <RouterLink
                        :to="{
                          name: 'order.details',
                          params: { id: order.id },
                        }"
                        class="product-add"
                        title="Add to Cart"
                      >
                        Details</RouterLink
                      ><!-- fas fa-spinner fa-spin -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-5">
              <InfiniteLoading @infinite="loadData" @distance="1">
                <template #spinner>
                  <Loader v-if="loading" />
                  <span v-if="noResult">No more data found!</span>
                </template>
              </InfiniteLoading>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.single-banner {
  background: url("@/assets/images/single-banner.jpg") no-repeat center;
  /* Other styles */
}
</style>
