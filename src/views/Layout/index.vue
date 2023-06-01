<script setup>

import LayoutNav from './components/LayoutNav.vue';

import LayoutHeader from './components/LayoutHeader.vue'

import LayoutFix from './components/LayoutFixed.vue'

import LayoutFooter from './components/LayoutFooter.vue';
import { useRouter } from 'vue-router'


const router = useRouter()
</script>

<template>
    <LayoutNav/>
    <!-- <RouterView /> -->
    <LayoutHeader/>
    <LayoutFix/>

    
  
</template>

