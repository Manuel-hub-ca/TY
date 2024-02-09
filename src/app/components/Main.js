import NavBar from "./NavBar";

export default function Main() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <div className="">
        <NavBar />
      </div>
      <video
        src={require("../../../public/video.mp4")}
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen object-cover left-0 z-[-2]"
      />
      {/* <div className='h-screen bg-red-500'> Hello Man</div> */}
    </main>
  );
}
