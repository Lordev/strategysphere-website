import Icon from './Iconify';
import Counter from './CountUp';
import CardContainer from './CardContainer';

export default function ServiceCards() {
	return (
		<>
			<CardContainer>
				<div className="text-primary">
					<div className="text-6xl text-center">
						<Counter endtime={100} />
						K+
					</div>
					<div className="card-body items-center text-center">
						<Icon
							icon={'ion:rocket-outline'}
							width={50}
							height={50}
							color="var(--primary)"
						/>
						<p>
							Over 100K satisfied clients experiencing rapid
							business expansion.
						</p>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className="text-primary">
					<div className="text-6xl text-center">#1</div>
					<div className="card-body items-center text-center">
						<Icon
							icon={'icomoon-free:office'}
							width={50}
							height={50}
							color="var(--primary)"
						/>
						<p>
							Ranked #1 in strategic planning for industry
							dominance.
						</p>
					</div>
				</div>
			</CardContainer>
			<CardContainer>
				<div className="text-primary">
					<div className="text-6xl text-center">
						<Counter endtime={50} />+
					</div>
					<div className="card-body items-center text-center">
						<Icon
							icon={'lucide:briefcase-business'}
							width={50}
							height={50}
							color="var(--primary)"
						/>
						<p>
							Over 50 strategies to maximize financial potential
							and minimize risk.
						</p>
					</div>
				</div>
			</CardContainer>

			<CardContainer>
				<div className="text-primary">
					<div className="text-6xl text-center">
						<Counter endtime={90} />+
					</div>
					<div className="card-body items-center text-center">
						<Icon
							icon={'streamline:business-handshake-solid'}
							width={50}
							height={50}
							color="var(--primary)"
						/>
						<p>
							90+ strategic partnerships fostering mutual growth.
						</p>
					</div>
				</div>
			</CardContainer>
		</>
	);
}
