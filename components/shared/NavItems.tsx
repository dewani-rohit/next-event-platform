"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
	const pathname = usePathname();

	return (
		<ul className="flex w-full flex-col items-start gap-5 md:flex-between md:flex-row">
			{headerLinks.map((link) => {
				const isActive = pathname === link.route;

				return (
					<li
						key={link.label}
						className={`${
							isActive && "text-primary-500"
						} flex-center p-medium-16 whitespace-nowrap`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItems;
