import { Clapperboard, Home, Library, Repeat } from 'lucide-react';
import { ElementType } from 'react';
import { buttonStyles } from '../components/Button';
import { twMerge } from 'tailwind-merge';

export function Sidebar() {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <SmallSidebarItem Icon={Home} title="Home" url="/" />
      <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
      <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subsriptions" />
      <SmallSidebarItem Icon={Library} title="Library" url="/library" />
    </aside>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a href={url} className={twMerge(buttonStyles({ variant: 'ghost' }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
