import { Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/Logo.png';
import Button from '../components/Button';

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <form className="md:flex hidden gap-4 flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-large w-full focus:border-blue-500 outline-none"
          />
          <Button className='py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0'>
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" variant="ghost" className='md:hidden'>
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className='md:hidden'>
          <Mic />
        </Button>
        <Button type="button" size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
