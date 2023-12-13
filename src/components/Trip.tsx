import Image, { StaticImageData } from "next/image";

interface TripProps {
  src: StaticImageData;
  count: number;
  title: string;
  location: string;
  date: string;
}

export default function Trip({ src, count, title, location, date }: TripProps) {
  return (
    <div className="grid px-4 mt-6 justify-items-center">
      <Image className="col-start-1 row-start-1" src={src} alt="ny" />
      <div className="col-start-1 row-start-1 border-2 border-white w-[calc(100%-1.5rem)] mt-4 rounded-t-3xl border-x-2 border-t-2 border-b-[1px]"></div>

      <div className="bg-[#2e2e2e] text-white text-sm px-6 pb-6 pt-4 grid rounded-b-3xl w-[calc(100%-1.5rem)] border-x-2 border-b-2 border-t-[1px] border-white">
        <span className="text-sm text-t-green">Starting in {count} days</span>
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="flex items-center gap-4 pt-2">
          <LocationSVG />
          <p>{location}</p>
        </span>
        <span className="flex items-center gap-4 pt-2">
          <DateSVG />
          <p>{date}</p>
        </span>
        <button className="px-3 py-[2px] text-base font-light rounded-full outline outline-1 outline-white w-fit justify-self-end">
          View Trip
        </button>
      </div>
    </div>
  );

  function LocationSVG() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        fill="#ffffff"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
      </svg>
    );
  }

  function DateSVG() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        fill="#ffffff"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
      </svg>
    );
  }
}
