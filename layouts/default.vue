<template>
	<div class="flex flex-col h-screen">
		<header class="h-fit">
			<AppHeader />
		</header>

		<main class="h-full px-4">
			<slot />
		</main>

		<footer class="h-fit p-4">
			<AppFooter />
		</footer>
	</div>
</template>

<style lang="postcss">
main {
	@apply bg-white dark:bg-gray-800 dark:text-gray-200 transition-colors duration-500;
}

header,
footer {
	@apply w-screen bg-gray-950 text-white;
}

main,
header,
footer {
	@apply px-4;
}
</style>
