import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/+8-7Y8lzixSA5YWRk",
    title: "telegram",
    icon: "Telegram",
  },
  {

    
    link: "https://x.com/littlexsolana?s=21",
    title: "x",
    icon: "X",
  },


  {
    link: "https://www.tiktok.com/@littlexsolana?_t=ZN-8utVdqtD4Tu&_r=1",
    title: "Tiktok",
    icon: "Tiktok",
  },

];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-4xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
