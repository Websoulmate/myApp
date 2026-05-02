"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2">
      <button
        onClick={logout}
        className="absolute top-4 right-4 bg-blue-500  hover:bg-blue-700  text-white  py-1 px-2 rounded cursor-pointer"
      >
        Lougout
      </button>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl">Profile</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          incidunt vero cum tempore dolorum quo voluptates accusantium mollitia
          minus, unde eum distinctio neque ex error ullam sunt, dolores
          excepturi quis quasi? Aliquam quia temporibus at eos. Nam beatae
          accusamus nostrum recusandae nisi vero, facilis non?
        </p>
        <h2 className="p-1 rounded bg-green-500">
          {data === "nothing" ? (
            "Nothing"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h2>
        <hr />

        <button
          onClick={getUserDetails}
          className="bg-red-400 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Get User Details
        </button>
      </div>
    </div>
  );
}
