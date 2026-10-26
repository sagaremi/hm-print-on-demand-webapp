export const site = {
	name: 'HoodMeta',
	tagline: 'Custom corporate T-shirts, printed & delivered',
	regions: 'Delhi NCR, Panipat, Uttar Pradesh and Punjab',
	email: 'hoodmetawear@gmail.com',
	phoneDisplay: '+91 81788 99405',
	// Digits only, with country code, no "+" (format required by wa.me links)
	whatsappNumber: '918178899405',
	whatsappMessage: "Hi HoodMeta, I'd like a quote for custom T-shirts.",
	// Public key from web3forms.com (safe to expose); form submissions are emailed to the address it was created with
	web3formsAccessKey: 'a2649040-acf5-4dd7-902b-66afdbbc99d0',
};

export const whatsappLink = (message = site.whatsappMessage) =>
	`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const emailLink = (subject = 'T-shirt quote request') =>
	`mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
