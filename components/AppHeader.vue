<script setup lang="ts">
const colorMode = useColorMode();
const selected = ref(
	colorMode.preference === "dark" || colorMode.preference === "system"
);

watch(
	selected,
	() => (colorMode.preference = selected.value ? "dark" : "light")
);
</script>

<template>
	<div class="flex items-center justify-center">
		<div>
			<nuxt-link class="p-4" to="/">
				<img
					height="48"
					width="48"
					class="h-12 w-12"
					src="/assets/img/logo-no-background.png"
					alt="Art Design logo" />
			</nuxt-link>
		</div>
		<nav
			class="flex max-w-7xl items-center justify-center p-6 lg:px-8 mx-8"
			aria-label="Global">
			<nuxt-link class="p-4" to="/">Home</nuxt-link>
			<nuxt-link class="p-4" to="/producten">Producten</nuxt-link>
		</nav>
		<UToggle
			on-icon="i-heroicons-moon"
			off-icon="i-heroicons-sun"
			v-model="selected" />
	</div>
</template>

<style lang="postcss">
body {
	@apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
