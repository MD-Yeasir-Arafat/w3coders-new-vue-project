<script setup>
import AdminLayout from "./layouts/AdminLayout.vue";
import AdminGuestLayout from "./layouts/AdminGuestLayout.vue";

const isLoggedIn = true;
</script>
<template>
    <div>
        <AdminLayout v-if="isLoggedIn">
            <section class="content">
                <router-view></router-view>
            </section>
        </AdminLayout>

        <AdminGuestLayout v-if="!isLoggedIn">
            <router-view></router-view>
        </AdminGuestLayout>
    </div>
</template>
