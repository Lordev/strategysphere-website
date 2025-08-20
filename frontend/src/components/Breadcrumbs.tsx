'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
	homeElement: ReactNode;
	separator: ReactNode;
	containerClasses?: string;
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
	filter?: number[];
};

const sharedClasses =
	'mx-2 scroll-m-20 font-medium text-xs tracking-[.3rem] uppercase mt-2 ';

const lastSegment = '2024';

function convertToMonthString(year: string, month: string) {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const monthString = monthNames[parseInt(month, 10) - 1];
	return `${monthString} ${year}`;
}

const detectDate = (segment: string) => {
	const parts = segment.split('-');
	if (parts.length === 1 && parts[0].match(/^\d{4}$/)) {
		return `This year`;
	} else if (
		parts.length === 2 &&
		parts[0].match(/^\d{4}$/) &&
		parts[1].match(/^\d{1,2}$/)
	) {
		const [year, month] = parts;
		return convertToMonthString(year, month);
	} else {
		return parts.join('-');
	}
};

export const NextBreadcrumb = ({
	homeElement,
	separator,
	containerClasses,
	listClasses,
	activeClasses,
	capitalizeLinks,
	filter = [0],
}: TBreadCrumbProps) => {
	const paths = usePathname();
	const decodedPath = decodeURI(paths);
	const pathNames = decodedPath.split('/').filter(path => path);

	const transformedPath = pathNames
		.slice(0, -1) 
		.map(item => item.split('-').join(' '));

	const lastItem = pathNames[pathNames.length - 1];
	const transformedLastItem = detectDate(lastItem);

	const finalPathNames = [...transformedPath, transformedLastItem];

	return (
		<div>
			<ul className={`${containerClasses}`}>
				<li className={sharedClasses + listClasses}>
					<Link
						className={`hover:underline cursor-pointer`}
						href={'/'}
					>
						{homeElement}
					</Link>
				</li>
				{finalPathNames.length > 0 && separator}
				{finalPathNames
					.map((link, index) => {
						const href = `/${finalPathNames
							.slice(0, index + 1)
							.join('/')
							.replaceAll(' ', '-')}`;
						const isLastItem = index === finalPathNames.length - 1;
						const itemClasses = isLastItem
							? `${activeClasses}`
							: listClasses;
						const itemLink = capitalizeLinks
							? link[0].toUpperCase() +
								link.slice(1).replaceAll('-', ' ')
							: link.replaceAll('-', ' ');

						return { href, itemClasses, itemLink, isLastItem };
					})
					.filter((_, index) => !filter.includes(index))
					.map(
						(
							{ href, itemClasses, itemLink, isLastItem },
							index
						) => (
							<React.Fragment key={index}>
								<li
									className={`${sharedClasses + itemClasses}`}
								>
									{!isLastItem ? (
										<Link href={href}>{itemLink}</Link>
									) : (
										<span>{itemLink}</span>
									)}
								</li>
								{!isLastItem && separator}
							</React.Fragment>
						)
					)}
			</ul>
		</div>
	);
};
