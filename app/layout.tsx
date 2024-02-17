import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Gather",
	description:
		"Discover, create, and attend events seamlessly with Gather – Your ultimate platform for social gatherings. Explore a vibrant community, create memorable events, and effortlessly book tickets. Join the social revolution with Gather.",
	icons: {
		icon: "/assets/icons/fav-logo.svg",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={poppins.variable}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
