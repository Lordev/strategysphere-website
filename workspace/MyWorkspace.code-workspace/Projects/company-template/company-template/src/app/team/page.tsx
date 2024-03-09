import Image from "next/image";
import Icon from "@/components/Icon";
import { FaSquareTwitter, FaLinkedin } from "react-icons/fa6";
import CardEmployee from "@/components/CardEmployee";

export default function OurTeam() {
    return (
        <>
            <div className="py-60 col-span-4 bg-team-banner bg-cover grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr]">
                <div className="text-primary col-start-2">
                    <h1>Our Team</h1>
                    <h3>home - our team</h3>
                </div>
            </div>
            <div className=" grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr]">
                <div className="h-full col-start-2 mt-40">
                    <div className="w-2/4">
                        <h6>Management Consulting Group</h6>
                        <h2>
                            Meet Our Exceptional Team: Driving Success with Talent and
                            Dedication
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-40 col-start-2 px-8">
                <div>
                    <Image
                        src={"/office-worker-1.png"}
                        width={750}
                        height={1075}
                        alt="image of an employee"
                        className="mb-4 rounded-sm"
                    />
                    <div className="flex justify-between">
                        <div>
                            <h5>John doe</h5>
                            <h3 className="text-muted">Technical Advisor</h3>
                        </div>
                        <div className="flex gap-2">
                            <Icon
                                icon={FaLinkedin}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                            <Icon
                                icon={FaSquareTwitter}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={"/office-worker-2.png"}
                        width={750}
                        height={1075}
                        alt="image of an employee"
                        className="mb-4 rounded-sm"
                    />
                    <div className="flex justify-between">
                        <div>
                            <h5>John doe</h5>
                            <h3 className="text-muted">Technical Advisor</h3>
                        </div>
                        <div className="flex gap-2">
                            <Icon
                                icon={FaLinkedin}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                            <Icon
                                icon={FaSquareTwitter}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={"/office-worker-3.png"}
                        width={750}
                        height={1075}
                        alt="image of an employee"
                        className="mb-4 rounded-sm"
                    />
                    <div className="flex justify-between">
                        <div>
                            <h5>John doe</h5>
                            <h3 className="text-muted">Technical Advisor</h3>
                        </div>
                        <div className="flex gap-2">
                            <Icon
                                icon={FaLinkedin}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in "
                            />
                            <Icon
                                icon={FaSquareTwitter}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={"/office-worker-4.png"}
                        width={750}
                        height={1075}
                        alt="image of an employee"
                        className="mb-4 rounded-sm"
                    />
                    <div className="flex justify-between">
                        <div>
                            <h5>John doe</h5>
                            <h3 className="text-muted">Technical Advisor</h3>
                        </div>
                        <div className="flex gap-2">
                            <Icon
                                icon={FaLinkedin}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                            <Icon
                                icon={FaSquareTwitter}
                                className="w-6 h-6 text-muted hover:text-foreground transition-colors duration-100 ease-in"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr]">
                <div className="h-full col-start-2 mt-40">
                    <div className="w-1/2 pr-40">
                        <h6>Management Consulting Group</h6>
                        <h2>
                            Lorem ipsum dolor sit amet, consec tetur adip iscing elit.
                        </h2>
                    </div>
                    <div className="grid-cols-2 grid gap-x-16 mt-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                            voluptatibus fuga consequuntur dicta ipsum error doloremque
                            saepe ea inventore id nulla quidem cupiditate itaque ex culpa
                            aliquam, illum, praesentium esse? Fugit, sit ut reiciendis
                            iusto voluptatem vero, similique doloremque voluptates
                            incidunt at autem corrupti dignissimos quibusdam adipisci
                            eveniet. Voluptate sed ullam reiciendis minima autem
                            voluptatem consectetur in, tenetur pariatur. Reiciendis! Id
                            voluptate praesentium et facilis eius adipisci reiciendis
                            alias fuga ipsa minus neque voluptates debitis harum natus
                            dolor voluptatem, voluptatibus dolorem culpa nisi illum beatae
                            porro. Quas, odit tenetur? Rerum. Suscipit at natus
                            perspiciatis inventore aliquid dolores deserunt, blanditiis
                            aperiam rem corrupti earum totam quibusdam quis autem et?
                            Veritatis error rerum incidunt eos qui saepe at perspiciatis
                            delectus ducimus? Unde. Harum commodi, debitis quo eveniet ea
                            necessitatibus? Odio recusandae et nulla vitae commodi ipsa
                            libero reiciendis ab expedita error doloremque deserunt
                            pariatur hic facilis, alias molestiae neque eaque at
                            voluptatem!
                        </p>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Possimus magni sed aperiam dolorem excepturi. Ex, quisquam
                                minima ab rerum vel distinctio, voluptatem nam repudiandae
                                nulla consequuntur magni doloremque perferendis sed. Ab,
                                minima fugit eum quasi labore aut qui vitae atque officia
                                impedit magnam harum culpa nihil facere laborum sed
                                asperiores voluptatum ex excepturi esse commodi.
                                Laudantium explicabo cum voluptates dolor.
                            </p>
                            <Image
                                src={"/autograph.png"}
                                width={250}
                                height={163}
                                alt="autograph"
                                className="-translate-y-2 mx-auto opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-40 grid-cols-4 grid gap-y-8 gap-x-8">
                <CardEmployee img="/HRemployee-1.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-2.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-4.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-5.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-6.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-7.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-8.png" name="Johh Doe" role="Manager" />
                <CardEmployee img="/HRemployee-10.png" name="Johh Doe" role="Manager" />
            </div>
            <div className="grid grid-cols-[1fr_minmax(1800px,_1fr)_1fr] my-40">
                <div className="h-full col-start-2 mt-40">
                    <div className="w-2/4">
                        <h6>Management Consulting Group</h6>
                        <h2>
                            Meet Our Exceptional Team: Driving Success with Talent and
                            Dedication
                        </h2>
                    </div>
                </div>
                <div className="col-start-2 grid grid-cols-4 gap-x-28 mt-16 justify-center items-center *:flex  *:flex-col *:gap-4 ">
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={"/portfolio.png"}
                            alt="portfolio image"
                        />
                        Investments in startups and business are our speciality
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, dignissimos quas! Obcaecati dolorem assumenda facere
                            dolore ipsa, eveniet reiciendis non aperiam, atque delectus,
                            sint dolorum rem recusandae eius facilis. Voluptates?
                            Consequatur, nobis optio.
                        </p>
                    </div>
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={"/portfolio-analysis.png"}
                            alt="portfolio image"
                        />
                        <h4>Investments in startups and business are our speciality</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, dignissimos quas! Obcaecati dolorem assumenda facere
                            dolore ipsa, eveniet reiciendis non aperiam, atque delectus,
                            sint dolorum rem recusandae eius facilis. Voluptates?
                            Consequatur, nobis optio.
                        </p>
                    </div>
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={"/financial-profit.png"}
                            alt="portfolio image"
                        />
                        <h4>Investments in startups and business are our speciality</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, dignissimos quas! Obcaecati dolorem assumenda facere
                            dolore ipsa, eveniet reiciendis non aperiam, atque delectus,
                            sint dolorum rem recusandae eius facilis. Voluptates?
                            Consequatur, nobis optio.
                        </p>
                    </div>
                    <div>
                        <Image
                            width={60}
                            height={60}
                            src={"/briefcase.png"}
                            alt="portfolio image"
                        />
                        <h4>Investments in startups and business are our speciality</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, dignissimos quas! Obcaecati dolorem assumenda facere
                            dolore ipsa, eveniet reiciendis non aperiam, atque delectus,
                            sint dolorum rem recusandae eius facilis. Voluptates?
                            Consequatur, nobis optio.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
