import React from "react";
import TextCard from "./TextCard";

export default function ImageWithText() {
  const cardContent = [
    {
      image: "/images/textcard1.png",
      title: "Scalable Solutions",
      description:
        "The need for blockchain-based transactions is growing at an unmatched pace. Thus, BOM created all its frameworks, features, reasonable transaction fees, and concepts with worldwide adoption in mind, making the ecosystem one of the most scalable projects in the crypto sphere, capable of supporting tens of thousands of businesses with its licenses.",
    },
    {
      image: "/images/profitability.png",
      title: "Profitability for users",
      description:
        "Needless to say, while usability and utility are two incredibly important factors, BOM never lost sight of the profitability of those who participate in the project. For that reason, our team of experts envisioned a universe where profits are shared among those who make them happen: the users. With BOM, any kind of online company has the opportunity to benefit from blockchain technology without creating its own token. The best part? Introduce our system, and get a stake in the project!",
    },
    {
      image: "/images/investors.png",
      title: "High yield for investors",
      description:
        "The most influential aspect was left to the last point: BOM values its investors above all, since they are the ones voting confidence in the initiative. The reward framework and investors’ lifetime value proposition are both conceptualized in a way that potential profits could reach multiple times the initial net investments. ",
    },
  ];
  return (
    <section>
      <div>
        <div className="container max-w-1200 mx-auto gap-6 md:gap-10 grid grid-cols-1 md:grid-cols-3 border-b-2 border-white/20 pb-10 md:pb-24 mb-10 md:mb-24 px-4 text-left md:text-center">
          {cardContent.map((c, i) => (
            <TextCard
              key={i}
              imageName={c.image}
              heading={c.title}
              description={c.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
