import Button from './Button';
import Image from 'next/image';
import FooterLink from './FooterLink';
import { Input } from './ui/input';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-footer bg-cover xl:pt-40 pt-20 relative z-40 pb-2">
			<div className="before:bg-background before:opacity-[.97] before:absolute before:-z-10 before:inset-0 before:h-full">
				<div className="lg:container lg:grid max-lg:px-4 xl:grid-cols-2 gap-x-16 grid-cols-[20rem_1fr] relative">
					<div className="xl:w-1/2 flex flex-col gap-4 mb-16 xl:mb-0 lg:text-start  lg:items-start ">
						<Image
							width={420}
							height={76}
							src={'/logo.png'}
							alt="logo business"
							className=""
						/>
						<p className="text-muted">
							Transform your business with our expert insights and
							strategic guidance. Achieve sustainable growth and
							unlock new opportunities.
						</p>
						<Link href="./contact" aria-label="contact us">
							<Button title="Contact us" />
						</Link>
					</div>
					<div className="lg:grid lg:grid-cols-[1fr_1fr_2fr] gap-x-8 grid-cols-none *:mb-16 ">
						<div>
							<h5>Company</h5>
							<ul className="*:mb-4 mt-8">
								<li>
									<FooterLink href="/about" text="About us" />
								</li>
								<li>
									<FooterLink href="/team" text="Our team" />
								</li>
								<li>
									<FooterLink href="/" text="Careers" />
								</li>
								<li>
									<FooterLink href="/" text="Offices" />
								</li>
							</ul>
						</div>
						<div>
							<h5>Services</h5>
							<ul className="*:mb-4 mt-8">
								<li>
									<FooterLink
										href="/"
										text="Strategy Consulting"
									/>
								</li>
								<li>
									<FooterLink
										href="/"
										text="Portfolio Analysis"
									/>
								</li>
								<li>
									<FooterLink
										href="/"
										text="Financial Modelling"
									/>
								</li>
								<li>
									<FooterLink
										href="/"
										text="Data & Analytics"
									/>
								</li>
							</ul>
						</div>
						<div>
							<h5 className="mt-6">Subscribe</h5>
							<form>
								<Input
									autoComplete="email"
									type="email"
									className="lg:max-w-[300px] mt-8 w-full text-foreground"
									required
								/>
								<Button title="Subscribe" />
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="text-end mt-20">
				<p className="pr-8 text-foreground">
					Copyright by Strategysphere Advisors &copy;{' '}
					{new Date().getFullYear()}{' '}
				</p>
			</div>
		</footer>
	);
}
