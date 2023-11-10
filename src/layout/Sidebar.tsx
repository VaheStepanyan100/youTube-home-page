import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from 'lucide-react';
import { Children, ElementType, ReactNode, useState } from 'react';
import Button, { buttonStyles } from '../components/Button';
import { twMerge } from 'tailwind-merge';
import { playlists, subscriptions } from '../data/sidebar';

export function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subsriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSidebarSection>
          <LargeSidebarItem
            isActive
            IconOrImageUrl={Home}
            title="Home"
            url="/"
          />
          <LargeSidebarItem
            IconOrImageUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
          <hr />
        </LargeSidebarSection>
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImageUrl={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            IconOrImageUrl={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImageUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            IconOrImageUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImageUrl={ListVideo}
              title={playlist.name}
              url={`/playlist=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImageUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrImageUrl={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSidebarItem
            IconOrImageUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem
            IconOrImageUrl={Music2}
            title="Music"
            url="/music"
          />
          <LargeSidebarItem
            IconOrImageUrl={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem IconOrImageUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem
            IconOrImageUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSidebarItem
            IconOrImageUrl={Newspaper}
            title="News"
            url="/news"
          />
          <LargeSidebarItem
            IconOrImageUrl={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSidebarItem
            IconOrImageUrl={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            IconOrImageUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrImageUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1'
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpended, setIsExpended] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpendButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpended
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpended ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpendButton && (
        <Button
          onClick={() => setIsExpended((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpended ? 'Show Less' : 'Show More'}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSidebarItemProps = {
  IconOrImageUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSidebarItem({
  IconOrImageUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({
          variant: 'ghost',
        }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : undefined
        }`
      )}
    >
      {typeof IconOrImageUrl === 'string' ? (
        <img src={IconOrImageUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImageUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overvlow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
