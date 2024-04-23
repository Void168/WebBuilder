import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { pricingCards } from "@/libs/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="h-full w-full py-36 relative flex items-center justify-center flex-col">
        <div className="absolute top-0 h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Tommi
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={"/assets/discord.png"}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:mt-20">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {" you're"} not <br /> ready to commit you can get started for free.
        </p>
        <div className="flex gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between p-6", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardTitle
                className={clsx("", {
                  "text-muted-foreground": card.title === "Unlimited Saas",
                })}
              >
                {card.title}
              </CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {
                    card.features.map((feature) => (
                      <div key={feature} className="flex gap-2 items-center">
                        <Check className="text-muted-foreground"/>
                        <p>{feature}</p>
                      </div>
                    ))
                  }
                </div>
                <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full text-center bg-primary p--2 rounded-md', {'!bg-muted-foreground' : card.title !== 'Unlimited Saas'})}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
