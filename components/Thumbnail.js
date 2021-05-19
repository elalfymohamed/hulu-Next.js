import { forwardRef } from "react";

import Image from "next/image";

import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "http://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.posters_path}` ||
          `${BASE_URL}${result.posters_path}`
        }
        alt={`${result.media_type} ${result.original_title} `}
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {/* {result.media_type && `${result.media_type} .`}{" "} */}
          {result.release_date || result.first_air_date} . &nbsp;
          <ThumbUpIcon className="h-5 mx" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
