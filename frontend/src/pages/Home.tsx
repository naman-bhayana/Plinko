import { Simulate } from "../components/Simulate";
import { Quotes } from "../components";

export function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-4 md:p-8">
        <Simulate />
        <Quotes />
      </div>
    </div>
  );
}
