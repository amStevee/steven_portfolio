
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {icon: "✉", textContent:"stevenanongo2@gmail.com "}, 
  {icon: '📞', textContent: "+234 816 5649 190 "}, 
  {icon: "📍", textContent: "FCT Abuja, Nigeria."}];

const techStack = [
  {icon: '📞', tech: " Node.js "}, 
  {icon: '📞', tech: " Exp.js "},
  {icon: '📞', tech: " PSQL "},
  {icon: '📞', tech: " React "},
  {icon: '📞', tech: " Typescript "},
  {icon: '📞', tech: " Next.js "},];

const social = [{icon: '📞', link: " https://github.com/amStevee ", appName: 'Github'}, 
  {icon: '📞', link: " https://x.com/am_stevenanongo ", appName: 'X'},
  {icon: '📞', link: " https://instagram.com/am_stevee ", appName: 'Instagram'},];

export default function Home() {

  return (
    <>
      <header className="bg-gradient-defang flex flex-col gap-10">
        <nav className="flex justify-between container mx-auto p-6 text-white bg-white bg-opacity-5">
          <h2 className=" font-bold">Steven Anongo</h2>
          {/* <ul>
            <li>Home</li>
          </ul> */}
        </nav>
  

        <div className="container mx-auto grid grid-cols-4 gap-2 lg:max-w-5xl max-h-fit bg-white shadow-lg p-4 rounded-md  mb-[-120px] max-w-sm">
          
          <div className=" relative lg:col-span-2 col-span-full ">
            <Image alt="Steven Anongo" src={'https://github.com/amStevee.png'} width={450} height={400} style={{borderRadius: '5px'}} />
          </div>

        

            <div className="flex flex-col gap-4 p-8 lg:col-span-2 col-span-full">
              <div className="flex flex-col gap-2">
              <p className="text-slate-600 uppercase font-sans font-medium">Hello World, i am</p>
              <h4 className="text-4xl font-bold">STEVEN ANONGO</h4>
              <h6 className="font-bold text-slate-700">SOFTWARE ENGINEER</h6>
              <p className="text-slate-500 text-sm text-justify">As a passionate software developer, my passion for continuous learning drives me to stay updated with the latest trends and frameworks, ensuring I can adapt and innovate. Let’s connect and find the perfect tech to bring your ideas to life!</p>
              </div>

              <div className="flex flex-col gap-3">
                {contacts.map((item) => (
                  <div key={item.textContent}>
                    <div className="flex gap-4">
                      <small className='text-red-900'>{item.icon}</small> 
                      <p  className="text-slate-500 text-sm">{item.textContent}</p>
                      </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-xs">
                <p className="font-bold text-slate-700">STACK: </p> {techStack.map(({tech}) => <span  key={tech}>{tech}</span>)}
              </div>

              <div className="flex gap-4">
                {social.map(({link, appName}) => <Link className="text-slate-600 shadow-md text-xs rounded-full bg-slate-100 p-2 w-fit cursor-pointer" key={link} href={link}><span className="opacity-15">🔗</span> {appName}</Link>)}
              </div>


            </div>
        </div>

    </header>
    <main className="container ">
      
    </main>
    </>
  );
}
