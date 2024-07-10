<script setup lang="ts">
type TIcon =
	| "i-heroicons-moon"
	| "i-heroicons-sun-20-solid"
	| "i-heroicons-arrow-path";

const colorMode = useColorMode();
const selected = ref(colorMode.value === "dark");

const getButtonIcon = () =>
	(selected.value ? "i-heroicons-sun-20-solid" : "i-heroicons-moon") as TIcon;

const buttonIcon = ref("i-heroicons-arrow-path" as TIcon);

onMounted(() => {
	buttonIcon.value = getButtonIcon();
});

// theming 

const toggleColorMode = () => {
	selected.value = !selected.value;
	buttonIcon.value = getButtonIcon();
	colorMode.preference = selected.value ? "dark" : "light";
};
</script>

<template>
	<div class="flex items-center justify-between">
		<nuxt-link class="px-4" to="/">
			<img
				height="48"
				width="48"
				class="h-12 w-12"
				src="/assets/img/logo-no-background.png"
				alt="Art Design logo" />
		</nuxt-link>
		<nav
			class="flex max-w-7xl items-center justify-center p-6 lg:px-8 mx-8"
			aria-label="Global">
			<ULink
				active-class="text-primary"
				inactive-class="text-gray-400 hover:text-gray-700 "
				class="px-4"
				to="/"
				>Home</ULink
			>
			<ULink
				active-class="text-primary"
				inactive-class="text-gray-500 hover:text-gray-700 "
				class="px-4"
				to="/producten"
				>Producten</ULink
			>
		</nav>
		<UButton
			:icon="buttonIcon"
			@click="toggleColorMode"
			class="colormode"
			color="primary"
			variant="outline" />
	</div>
</template>

<style lang="postcss">
button:hover {
	@apply bg-primary-950 !important;
}

button:active {
	@apply bg-primary-800 !important;
}
</style>

<style lang="postcss" scoped>
.colormode > :deep(.i-heroicons-arrow-path) {
	animation: spin 1s infinite;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
