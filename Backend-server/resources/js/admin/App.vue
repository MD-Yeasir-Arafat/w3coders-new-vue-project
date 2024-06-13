<script setup>
import AdminLayout from "./layouts/AdminLayout.vue";
</script>
<template>
    <div>
        <AdminLayout>
            <section class="content">
                <router-view></router-view>
            </section>
        </AdminLayout>
    </div>
</template>
