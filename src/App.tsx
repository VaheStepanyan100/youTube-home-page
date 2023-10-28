import { CategoryPills } from "./components/CategoryPills";
import { PageHeader } from "./layout/PageHeader"
import { categories } from "./data/home";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
     <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} />
        </div>
      </div>
    </div>
  );
}
