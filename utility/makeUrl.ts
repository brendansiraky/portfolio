export const makeUrl = (endpoint: string) =>
	`${process.env.NEXT_PUBLIC_STRAPI_API_URL}:${process.env.NEXT_PUBLIC_STRAPI_API_PORT}${endpoint}`
// made small test change
