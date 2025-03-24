import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const HowToBuy = () => {
  return (
    <div id="buy" className="max-w-[85rem] mx-auto p-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-4xl text-duis text-shadow text-center">
        🌕 How To Buy 🚀
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          {`Just 4️⃣ steps to get rich 🤑`}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 justify-items-center">
        <OrderCard
          order={<span className="text-white">1</span>}
          title={"create a wallet"}
          style={"rotate-3"}
        >
          <span>
            Download{" "}
            <a
              href="https://phantom.app"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              phantom
            </a>{" "}
            or your{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              Solana
            </span>{" "}
            wallet of choice and follow the simple steps to create a new
            account.
          </span>
        </OrderCard>
        <OrderCard
          order={<span className="text-white">2</span>}
          title={"connect to dex"}
          style={"-rotate-6"}
        >
          <span>
            If you don’t have any{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $SOL
            </span>
            , you can buy directly on{" "}
            <a
              href="https://phantom.app"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              phantom
            </a>{" "}
            , transfer from another wallet, or buy on another exchange and send
            it to your wallet.
          </span>
        </OrderCard>
        <OrderCard
          order={<span className="text-white">3</span>}
          title={"swap $Sol for $LittleX"}
          style={"-rotate-1"}
        >
          <span>
            Paste the token address (CA) into wallet and swap{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $SOL
            </span>{" "}
            for <span className="font-extrabold text-2xl text-duis">$LittleX</span>.
            {`There's zero taxes so you don’t need to worry.`}
          </span>
        </OrderCard>
        <OrderCard
          order={<span className="text-white">4</span>}
          title={"you're Holder trouver un nom pour les appler mes poupette!‍"}
          style={"rotate-2"}
        >
          <span>
            Welcome to the <br />
            <span className="uppercase font-extrabold text-2xl underline decoration-duis">
              LittleX Official
            </span>
            !
          </span>
        </OrderCard>
      </div>

      <div className="my-16">
        <ContractAddress />
      </div>
    </div>
  );
};

export default HowToBuy;
