import Icon from "./Iconify";
import Counter from "./CountUp";
import CardContainer from "./CardContainer";

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
                            icon={"ion:rocket-outline"}
                            width={50}
                            height={50}
                            color="var(--primary)"
                        />
                        <h2 className="card-title"></h2>
                        <p>Rapid business expansion with precision guidance.</p>
                    </div>
                </div>
            </CardContainer>
            <CardContainer>
                <div className="text-primary">
                    <div className="text-6xl text-center">#1</div>
                    <div className="card-body items-center text-center">
                        <Icon
                            icon={"icomoon-free:office"}
                            width={50}
                            height={50}
                            color="var(--primary)"
                        />
                        <h2 className="card-title"></h2>
                        <p>Strategic planning for industry dominance.</p>
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
                            icon={"lucide:briefcase-business"}
                            width={50}
                            height={50}
                            color="var(--primary)"
                        />
                        <h2 className="card-title"></h2>
                        <p>Maximize financial potential, minimize risk.</p>
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
                            icon={"streamline:business-handshake-solid"}
                            width={50}
                            height={50}
                            color="var(--primary)"
                        />
                        <h2 className="card-title"></h2>
                        <p>Foster strategic partnerships for mutual growth.</p>
                    </div>
                </div>
            </CardContainer>
        </>
    );
}
