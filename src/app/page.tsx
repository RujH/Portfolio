import Left from "../components/left";
import Right from "../components/right";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] p-2 sm:p-4 mt-10">
        <div className="flex justify-center items-start md:pr-8 sticky top-32">
          <Left />
        </div>
        <div className="flex justify-center md:-ml-32 h-[calc(100vh-8rem)] overflow-hidden sticky top-32">
          <Right />
        </div>
      </main>
    </div>
  );
}
