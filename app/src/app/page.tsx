
import Image from "next/image";

const contacts = [
  {icon: '📞', textContent: "+234 816 5649 190 "}, 
  {icon: "✉", textContent:"stevenanongo2@gmail.com "}, 
  {icon: "📍", textContent: "FCT Abuja, Nigeria."}];

export default function Home() {

  return (
    <>
      <header className="bg-gradient-defang">
        <nav className="flex justify-between container mx-auto text-white">
          <h2 className=" font-bold">Steven Anongo</h2>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        <div className="container mx-auto py-8 gap-8 flex flex-col items-center justify-center">

        <div className="grid grid-cols-3 max-w-screen-md max-h-fit bg-white shadow-lg p-8 rounded-md  mb-[-190px]">
          <div className="col-span-1">
            <Image alt="Steven Anongo" src={''} width={200} height={200} />

          </div>

            <div className="flex flex-col gap-4 p-8 col-span-2">
              <p className="text-slate-600">Hello World, i am</p>
              <h4 className="text-4xl font-bold">STEVEN ANONGO</h4>
              <h6 className="font-bold">JUNIOR SOFTWARE ENGINEER</h6>
              <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi eius odit maxime non, possimus qui veritatis amet quia iusto?</p>

            <div className="flex flex-col">
              {contacts.map((item) => (
                <div key={item.textContent}>
                  <div className="flex gap-4">
                    <small className='text-cyan-600'>{item.icon}</small> 
                    <p  className="text-slate-500 text-sm">{item.textContent}</p>
                    </div>
                </div>
              ))}
              </div>
            </div>

        </div>
      </div>

    </header>
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center ">
      
    </main>
    </>
  );
}
