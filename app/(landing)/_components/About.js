import React from "react";
import Image from "next/image";

const About = () => {
  return (
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      
      <div id="about" className="max-w-[85rem] px-4 py-0 sm:py-10 mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 text-center">  {/* Réduit my-7 à mb-4 */}
          <h2 className="font-stopbuck text-4xl text-duis text-shadow my-20 mt-20">🌕 About Us - LittleX 🚀</h2>
          <h3 className="font-stopbuck text-2xl italic text-black mt-6">  {/* Réduit mt-14 à mt-6 */}
            {`Welcome to LittleX, the wildest memecoin on Solana! 🤪 Inspired by the x Musk, LittleX is here to dominate the meme game. Trump’s bowing down to the meme lord, the internet’s losing its mind, and we’re all here for it!

We’re talking 1000x potential, degens only, LFG vibes, and HODLers dancing to the moon. Forget the FUD, forget the rules. This is LittleX. We’re breaking the internet. Are you in, degen? 🚀🔥

LFG!! 🤑📈`}
          </h3>
        </div>
        <div className="flex justify-center items-center w-full mb-6">  {/* Ajout de mb-6 */}
          <Image
            className="object-cover"
            src="/collection/9.png"
            width={400}
            height={400}
            alt="Dui Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
