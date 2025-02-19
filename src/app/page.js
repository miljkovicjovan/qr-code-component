import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-80 bg-white rounded-3xl">
      <div className="top bg-blue-600 m-4 p-16 rounded-2xl">
        <Image src="/QR.png" alt="QR code" width={160} height={160} className="mx-auto color-black"/>
      </div>
      <div className="bottom text-center m-6">
        <h1 className="font-bold text-xl text-slate-900 leading-6">Improve your front-end skills by building projects</h1>
        <p className="p-3 text-sm text-slate-500 leading-5">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
    </div>
  );
}
