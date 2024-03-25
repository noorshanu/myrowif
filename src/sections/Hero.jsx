function Hero() {
  return (
    <section className=" pt-4  pb-[4rem]">
      <div className="container-wrapper">
        <div className=" flex justify-between flex-col sm:flex-row ">
          <div className=" w-full">
  

      
          <h1 className=" text-5xl font-bold  py-4 text-white">
          Woof! Welcome to MyroWIF, where the crypto barks.
            </h1>
            <h1 className=" max-w-xl text-white text-2xl font-sushi-two font-semibold">
            Ever wondered what happens when you mix the brilliance of Solana with the cuteness of a furry friend? You get MyroWIF! Named after none other than Raj Gokal's beloved doggo, MyroWIF is more than just a meme coin—it's a celebration of the Solana community and our fluffy inspiration.
            </h1>

            <div className=" py-2">
          <a
            href="https://solscan.io/token/tVm9qjqGjR47atNET2vhemaNGCad5sravgCFvkPGGAh"
            target="_blank"
            className="my-2  font-sushi-two flex justify-center text-xs  text-white  border-[#f45a7c] sm:text-lg font-semibold border-2  rounded-2xl bg-[#1995d0] max-w-xl py-1 "
          >
            {" "}
            Contract : tVm9qjqGjR47atNET2vhemaNGCad5sravgCFvkPGGAh
          </a>
        </div>
        <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://t.me/myrowiff"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two font-semibold px-10 rounded-xl bg-[#1995d0] shadow-lg shadow-black/40 text-white   border-[#f45a7c] border-2"
          >
            join telegram
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/4YDdnThR62DgPrD22iWQSWLyrvZoou2Q4e64F56upovE?t=1711352110529"
            target="_blank"
            className="text-base py-2 uppercase font-sushi-two px-10 rounded-xl bg-[#1995d0] shadow-lg shadow-black/40 text-white  font-bold  border-[#f45a7c] border-2"
          >
            DEXTOOLS
          </a>
        </div>
          </div>

          <div className=" w-full"> 
           

            <img src="images/hero2.png" alt="" className=" floating" />
          </div>
        </div>

        <div className="relative z-50"></div>

     

   
      </div>
    </section>
  );
}

export default Hero;
