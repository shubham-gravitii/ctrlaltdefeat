import Card from "./Card";
import "./styles.css";
const MyHome = () => {
  return (
    <>
      <div className="container">
        <section className="hero w-120">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title"></h1>
              <p className="hero__description">
                AgroTech provides farmes and agricultural producers a better way
                to manage their inventory and stocks. And with the vision of
                Empowering Farmers it helps them to make ther lifstyle better.
                It is a place where a farmer can visit to increase his income
                and maintain their stocks with less wastage.
              </p>
            </div>
            <div className="hero__img">
              <img src="hero.png" alt="" />
            </div>
          </div>
          <div>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="tractor.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-6 leading-normal">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
                  Agriculture is our wisest pursuit, because it will in the end
                  contribute most to real wealth, good morals & happiness
                </p>
              </div>
            </a>
          </div>
        </section>
        {/* //qoutes */}
        <section className="container flex flex-col md:flex-row justify-between items-center md:items-start mx-4 md:mx-0 my-8 md:my-0 gap-8 md:gap-16">
          <div className="quote flex-shrink-0"></div>
          <div className="text flex-grow text-3xl font-serif font-bold text-green-500 text-center md:text-left">
            <p>
              A good Farmer is nothing more nor less than a handy man with a
              sense of humus.
            </p>
          </div>
        </section>

        <section className="opportunities">
          <div className="opportunities__img">
            <img src="leaf.png" alt="" />
          </div>
          <div className="opportunities__content w-105">
            <div className="opportunities__head">
              <p className="opportunities__description">
                We are here Providing them various ways to smartly and
                efficiently maintain their agricultural products.And also
                ensuring taht teir time and money utilize for betterment for
                their life.
              </p>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          <Card
            feature="Inventory Management"
            description="Here we are managing the Inventory by updating it in realtime and showing the stocks that are left and which one was older ."
          />
          <Card
            feature="Reducing Wastage of Stocks"
            description="We are reducing the wastage of stocks by selling it to needy farmers and claearing the inventory."
          />
          <Card
            feature="Tools Management"
            description="We are maintaning the record of tools farmers have and suggesting which is the best tool that can give him highest yield for that crop."
          />
        </div>

        <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative">
                  <img
                    src="hero.png"
                    alt=""
                    className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                  />
                  <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                  <div className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-14 h-14 bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="relative">
                  <h1 className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                    About Us
                  </h1>
                  <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                    Welcome to our site
                  </h1>
                </div>
                <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  We are here to provide a platform to all the farmers of India
                  a better and effecient way of dealing their agriculture
                  products by daily monitoring the stocks and updating it.And
                  effeciently managing the inventory and updating it in real
                  time.We will give various suggestions to farmers to increase
                  his production and minimizinz the wastage of stocks.
                </p>
                <a
                  href="#"
                  className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyHome;
