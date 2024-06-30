import Navbar from "../components/Navbar/page"
import Page1 from "../components/Page1/page"
import Page2 from "../components/Page2/page"
import Page3 from "../components/Page3/page"
import Page4 from "../components/Page4/page"
import Page5 from "../components/Page5/page"
import Bottombar from "../components/Bottombar/page"


export default function Home() { 
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center min-w-fit max-w-screen-fit"> 
      <Navbar/> 
      <Page1/>
      <Page2/>
      <Page3/> 
      <Page4/> 
      <Page5/>
      <Bottombar/>
      </div> 
    </main>  
  );
}
