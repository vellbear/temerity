"use client";
import Trip from "@/components/Trip";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import NY_IMG from "../../public/ny.png";

export default function Home() {
  return (
    <main className="pt-24">
      <h1 className="text-[2rem] font-bold px-7 mt-2">Your Trips</h1>
      <Trip
        src={NY_IMG}
        count={20}
        title="New York Trip 2024"
        location="New York, New York"
        date="2 January 2024"
      ></Trip>
      <Button></Button>
    </main>
  );
}
