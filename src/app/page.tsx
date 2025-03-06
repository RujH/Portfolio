import Left from "../components/left";
import Right from "../components/right";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="relative lg:sticky lg:top-0 lg:z-50">
        <Header />
      </div>
      
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] p-2 sm:p-4 md:p-6 mt-4 md:mt-8 lg:mt-10 gap-6 md:gap-8">
        <div className="flex justify-center items-start lg:pr-8 lg:sticky lg:top-32 mb-8 lg:mb-0">
          <Left />
        </div>
        <div className="flex justify-center lg:-ml-32 h-[calc(100vh-8rem)] sm:h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)] 
                      overflow-hidden lg:sticky lg:top-32">
          <Right />
        </div>
      </main>
    </div>
  );
}