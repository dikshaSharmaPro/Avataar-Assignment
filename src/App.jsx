import Carousel from "./Carousel";
import DynamicMenu from "./DynamicMenu";

const slides = [
  {
  img:"https://plus.unsplash.com/premium_photo-1682097473706-8bb732fe84b8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Village Scenerio"
  },
  {
  img:"https://images.unsplash.com/photo-1541005460290-3bbe4ded5654?q=80&w=3022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Red Umbrellas"
  },
  {
  img:"https://images.unsplash.com/photo-1614062388233-2e45bbcce648?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Sofa at beach"
  },
  {
  img:"https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=3418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Red Rose"
  },
  {
  img:"https://images.unsplash.com/photo-1607083681678-52733140f93a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Red Gifts"
  },
  
  
  
  
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <DynamicMenu />

      <div className="grow pt-10  space-y-32 px-20">

        <div className="w-full h-28 flex-col justify-start items-center  lg:gap-6 flex">
          <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold  leading-10 whitespace-nowrap ">
            Featured Products
          </h1>
          <h2 className="w-full text-center text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
            Explore and discover a variety of products
          </h2>
        </div>

        <Carousel slides={slides} />

      </div>
    </div>
  );
}

export default App;
