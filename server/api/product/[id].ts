import type { Product } from "~/server/types";
import products from "~/public/assets/json/products.json";

const placeholder =
	"https://via.placeholder.com/500X500/dedede/000000?Text=500X500";

export default defineEventHandler(async (event) => {
	const params = event.context.params;
	if (!params) return { statusCode: 400, body: "Bad Request" };
	const id = +params.id;
	const product = await getProduct(id);

	if (product) {
		product.image = (await imageExists(product.image))
			? product.image
			: placeholder;
	}

	return {
		statusCode: 200,
		body: product,
	};
});

async function getProduct(id: number): Promise<Product | null> {
	return products.find((product) => product.id === +id) ?? null;
}

async function imageExists(image: string): Promise<boolean> {
	try {
		await $fetch(`${image}`);
		return true;
	} catch {
		return false;
	}
}
