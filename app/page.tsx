import { CustomFilter, Hero, Searchbar } from "@/components";

export default function Home() {
  return (
    <main className=' overflow-hidden'>
      <Hero />
      <div className=' mt-12 paddind-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the car you might link</p>
        </div>
        <div className='home__filters'>
          {/* SEARCHBAR */}
          <Searchbar />
          <div className='home__filter-container'>
            {/* CUSTOM FILTER FUEL*/}
            <CustomFilter />
            {/* CUSTOM FILTER YEAR */}
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
