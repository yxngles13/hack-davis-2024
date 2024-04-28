"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { db } from "../../_db/firebase";

import {
  QuerySnapshot,
  query,
  querySnapshot,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

export default function logs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emotions"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Convert Firestore Timestamp to JavaScript Date object
        const formattedTime = data.date.toDate().toLocaleTimeString("en-US");
        const formattedDate = data.date.toDate().toLocaleDateString("en-US");
        itemsArr.push({
          ...data,
          date: formattedDate,
          time: formattedTime,
          id: doc.id,
        });
      });
      setItems(itemsArr);
    });
  });
  return (
    <main className="h-screen bg-slate-100 flex flex-full mx-2 my-6">
      <div>
        <h1 className="text-2xl text-black font-mono py-4 px-8">
          <b>Patient 1's personal logs</b>
        </h1>
      </div>
      <div className="flex space-x-32 items-start py-32 max-w-4xl">
        <div className="items-right py-10">
          <iframe
            width="400"
            height="400"
            src="http://localhost:5000/video_feed"
          ></iframe>
        </div>
        <div className="bg-blue-100 px-10 py-4 overflow-y-auto w-1/2 h-96 mt-10 border-2">
          {items.map((item) => (
            <div className="flex flex-row px-3 space-x-1">
              <h2>{`${item.date} ${item.time}`}</h2>

              <h2>{item.emotion}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row bg-blue-100 p-4">Comments</div>
    </main>
  );
}
