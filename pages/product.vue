<script setup lang="ts">
import type { Product } from "~/server/types";

const { data } = await useFetch("/api/product/1");
const product = (data.value?.body ?? null) as Product | null;
</script>

<template>
	<h1>{{ product?.name }}</h1>
	<img
		:src="product?.image"
		:alt="product?.name"
		height="224"
		width="224"
		class="object-contain" />
</template>
