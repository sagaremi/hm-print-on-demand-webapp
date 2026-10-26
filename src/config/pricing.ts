// Edit prices here. Each price list follows quantityBands: 25–49, 50–99, 100–249, 250+.
export const pricing = {
	minimumOrder: 25,
	quantityBands: [25, 50, 100, 250],
	products: [
		{
			name: 'Round-neck T-shirt',
			unit: 'piece',
			prices: {
				'Screen print': [220, 200, 190, 185],
				'DTF print': [185, 175, 165, 155],
			},
		},
		{
			name: 'Polo T-shirt',
			unit: 'piece',
			prices: {
				'Screen print': [240, 220, 210, 200],
			},
		},
		{
			name: 'Uniform set',
			unit: 'set',
			prices: {
				Embroidery: [850, 800, 750, 700],
			},
		},
	],
};

export type Product = (typeof pricing.products)[number];

export function getEstimate(product: Product, printType: string, quantity: number) {
	const prices: number[] | undefined = (product.prices as Record<string, number[]>)[printType];
	if (!prices || !Number.isInteger(quantity) || quantity < pricing.minimumOrder) return null;

	const band = pricing.quantityBands.findLastIndex((min) => quantity >= min);
	const perUnit = prices[band];
	const hasNext = band + 1 < pricing.quantityBands.length;

	return {
		perUnit,
		total: perUnit * quantity,
		next: hasNext ? { from: pricing.quantityBands[band + 1], perUnit: prices[band + 1] } : null,
	};
}

export const formatINR = (amount: number) =>
	new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
