<script setup lang="ts">
import type { Product } from "~/server/types";

const { data } = await useFetch("/api/product/1");
const product = (data.value?.body ?? null) as Product | null;
</script>

<template>
	<div>
		<h1>{{ product?.name }}</h1>
		<img :src="product?.image" alt="" />
	</div>
</template>
