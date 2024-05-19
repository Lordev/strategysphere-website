import Image from "next/image";
import CardEmployee from "@/components/CardEmployee";
import CardEmployeeHover from "@/components/CardEmployeeHover";
import PageHeader from "@/components/PageHeader";

export default function OurTeam() {
    return (
        <>
            <section className="py-40 bg-team-banner bg-cover bg-top text-primary">
                <PageHeader heading="Our Team" />
            </section>
            <section className="max-w-screen-3xl mx-auto px-4 3xl:px-0">
                <div className="h-full col-start-2 lg:mt-40 mt-20">
                    <div className="border-l-accent border-l-2 sm:px-20 px-8 max-w-[900px]">
                        <h6>Management Consulting Group</h6>
                        <h2>
                            Meet Our Exceptional Team: Driving Success with Talent and
                            Dedication
                        </h2>
                    </div>
                </div>
            </section>

            <section className="justify-center gap-8 lg:mt-40 mt-20 col-start-2  grid xl:grid-cols-4 sm:grid-cols-2 ">
                <CardEmployee
                    imgUrl="/office-worker-1.png"
                    name="John Doe"
                    role="Technical Advisor"
                />
                <CardEmployee
                    imgUrl="/office-worker-2.png"
                    name="John Doe"
                    role="Technical Advisor"
                />
                <CardEmployee
                    imgUrl="/office-worker-3.png"
                    name="John Doe"
                    role="Technical Advisor"
                />
                <CardEmployee
                    imgUrl="/office-worker-4.png"
                    name="John Doe"
                    role="Technical Advisor"
                />
            </section>
            <section className="max-w-screen-3xl mx-auto max-3xl:px-4">
                <div className="h-full col-start-2 lg:mt-40 mt-20">
                    <div className="md:w-1/2">
                        <h6>Management Consulting Group</h6>
                        <h2>
                            Lorem ipsum dolor sit amet, consec tetur adip iscing elit.
                        </h2>
                    </div>
                    <div className="md:grid-cols-2 grid gap-x-16 mt-4">
                        <p className="text-muted">
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
                            <p className="text-muted">
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
            </section>
            <section className="lg:mt-40 mt-20 xl:grid-cols-4 grid-cols-2 grid gap-8 justify-center">
                <CardEmployeeHover
                    img="/HRemployee-1.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-2.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-4.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-5.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-6.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-7.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-8.png"
                    name="Johh Doe"
                    role="Manager"
                />
                <CardEmployeeHover
                    img="/HRemployee-10.png"
                    name="Johh Doe"
                    role="Manager"
                />
            </section>
            <section className="lg:py-40 py-20 bg-primary">
                <div className="max-w-screen-3xl mx-auto max-3xl:px-4 text-foreground">
                    <div className="h-full col-start-2 ">
                        <div className="max-w-4xl">
                            <h6>Management Consulting Group</h6>
                            <h2>
                                Meet Our Exceptional Team: Driving Success with Talent and
                                Dedication
                            </h2>
                        </div>
                    </div>
                    <div className="col-start-2 grid sm:grid-cols-2 mt-20 justify-center items-center lg:grid-cols-4 gap-8 ">
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={"/5.png"}
                                alt="portfolio image"
                                className="opacity-60 mb-8"
                            />
                            <h4>
                                Investments in startups and business are our speciality
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi, dignissimos quas! Obcaecati dolorem assumenda
                                facere dolore ipsa, eveniet reiciendis non aperiam, atque
                                delectus, sint dolorum rem recusandae eius facilis.
                                Voluptates? Consequatur, nobis optio.
                            </p>
                        </div>
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={"/6.png"}
                                alt="portfolio image"
                                className="opacity-60 mb-8"
                            />
                            <h4>
                                Investments in startups and business are our speciality
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi, dignissimos quas! Obcaecati dolorem assumenda
                                facere dolore ipsa, eveniet reiciendis non aperiam, atque
                                delectus, sint dolorum rem recusandae eius facilis.
                                Voluptates? Consequatur, nobis optio.
                            </p>
                        </div>
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={"/7.png"}
                                alt="portfolio image"
                                className="opacity-60 mb-8"
                            />
                            <h4>
                                Investments in startups and business are our speciality
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi, dignissimos quas! Obcaecati dolorem assumenda
                                facere dolore ipsa, eveniet reiciendis non aperiam, atque
                                delectus, sint dolorum rem recusandae eius facilis.
                                Voluptates? Consequatur, nobis optio.
                            </p>
                        </div>
                        <div>
                            <Image
                                width={60}
                                height={60}
                                src={"/8.png"}
                                alt="portfolio image"
                                className="opacity-60 mb-8"
                            />
                            <h4>
                                Investments in startups and business are our speciality
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi, dignissimos quas! Obcaecati dolorem assumenda
                                facere dolore ipsa, eveniet reiciendis non aperiam, atque
                                delectus, sint dolorum rem recusandae eius facilis.
                                Voluptates? Consequatur, nobis optio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
