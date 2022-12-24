import type { FC } from "react";
import Link from "next/link";
interface CardProps {
  title: string;
  subText: string;
  iconUrl: string;
  count: string;
  slug: string;
}

const Card: FC<CardProps> = ({ title, subText, iconUrl, count, slug }) => (
  <Link href={slug+ '?title='+title}>
    <div className="flex justify-center p-3">
      <div className="block p-3 rounded-lg shadow-lg bg-white min-w-full">
        <img
          className="mb-1"
          src={iconUrl}
          style={{ height: "25px", width: "25px" }}
        />
        <p className="text-gray-900 text-base leading-tight font-medium mb-2">
          {title}
        </p>
        <p
          className="text-gray-700 text-sm mb-2"
          style={{ fontStyle: "italic" }}
        >
          {count} {subText}
        </p>
      </div>
    </div>
  </Link>
);

export default Card;
