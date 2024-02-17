import * as z from "zod";

export const eventFormSchema = z.object({
	title: z
		.string()
		.min(5, "Title must be at least 5 characters")
		.max(50, "Title cannot be longer than 50 characters"),
	description: z
		.string()
		.min(10, "Description must be at least 10 characters long")
		.max(400, "Description cannot be longer than 400 characters"),
	location: z
		.string()
		.min(3, "Location must be at least 3 characters long")
		.max(100, "Location cannot be longer than 100 characters"),
	imageUrl: z.string().url(),
	startDateTime: z.date(),
	endDateTime: z.date(),
	categoryId: z.string(),
	price: z.string(),
	isFree: z.boolean(),
	url: z.string().url(),
});
