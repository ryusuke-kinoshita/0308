export default function Hero({ heading, message, image }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-fixed bg-center bg-cover"
      id={image}
    >
      {/* オーバーレイ */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] md:mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
      </div>
    </div>
  );
}
