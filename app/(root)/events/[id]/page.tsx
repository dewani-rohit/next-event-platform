import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
	getEventById,
	getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { getAllOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function EventDetailsPage({
	params: { id },
	searchParams,
}: SearchParamProps) {
	const { sessionClaims } = auth();
	const userId = sessionClaims?.userId as string;

	const event = await getEventById(id);

	const relatedEvents = await getRelatedEventsByCategory({
		categoryId: event.category._id,
		eventId: event._id,
		page: searchParams.page as string,
	});

	const eventStartDate = formatDateTime(event.startDateTime).dateOnly;
	const eventStartTime = formatDateTime(event.startDateTime).timeOnly;
	const eventEndDate = formatDateTime(event.endDateTime).dateOnly;
	const eventEndTime = formatDateTime(event.endDateTime).timeOnly;

	const eventsBoughtByUser = await getAllOrdersByUser({ userId });
	const hasUserBoughtThisEvent = eventsBoughtByUser.some(
		(o: IOrder) => o.event === event._id
	);

	return (
		<>
			<section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
				<div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
					<Image
						src={event.imageUrl}
						alt={`${event.title} image`}
						width={1000}
						height={1000}
						className="h-full min-h-[300px] object-cover object-center"
					/>

					<div className="flex w-full flex-col gap-8 p-5 md:p-10">
						<div className="flex flex-col gap-6">
							<h2 className="h2-bold">{event.title}</h2>

							<div className="flex flex-col gap-3">
								<p className="p-medium-18">
									Organized by{" "}
									<span className="text-primary-500">
										{event.organizer.firstName} {event.organizer.lastName}
									</span>
								</p>

								<div className="flex gap-3">
									<p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
										{event.isFree ? "FREE" : `₹${event.price}`}
									</p>

									<p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
										{event.category.name}
									</p>
								</div>
							</div>
						</div>

						{hasUserBoughtThisEvent ? (
							<p className="p-medium-16 lg:p-regular-18 text-primary-500">
								Ticket already purchased
							</p>
						) : (
							<CheckoutButton event={event} />
						)}

						<div className="flex flex-col gap-5">
							<div className="flex gap-2 md:gap-3">
								<Image
									src="/assets/icons/calendar.svg"
									alt="calendar icon"
									width={32}
									height={32}
								/>

								<div className="p-medium-16 lg:p-regular-20 flex-wrap items-center">
									{eventStartDate === eventEndDate ? (
										<>
											<p>{eventStartDate}</p>

											<p>
												{eventStartTime} - {eventEndTime}
											</p>
										</>
									) : (
										<>
											<p>
												From: {eventStartDate} - {eventStartTime}
											</p>

											<p>
												To: {eventEndDate} - {eventEndTime}
											</p>
										</>
									)}
								</div>
							</div>

							<div className="p-regular-20 flex items-center gap-3">
								<Image
									src="/assets/icons/location.svg"
									alt="location icon"
									width={32}
									height={32}
								/>

								<p className="p-medium-16 lg:p-regular-20">{event.location}</p>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="p-bold-20 text-grey-600">Description:</p>

							<p className="p-medium-16 lg:p-regular-18">{event.description}</p>

							<Link
								href={event.url}
								className="p-medium-16 lg:p-regular-18 text-primary-500 mt-2 hover:underline"
							>
								Find out more
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
				<h3 className="h3-bold">Related Events</h3>

				<Collection
					data={relatedEvents?.data}
					emptyTitle="No similar events found"
					emptySubtext="Come back later"
					collectionType="All_Events"
					limit={4}
					page={searchParams.page as string}
					totalPages={relatedEvents?.totalPages}
				/>
			</section>
		</>
	);
}
