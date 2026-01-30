import { useEffect } from "react";
import Exactum2 from "../assets/exactum-2.svg?react";
import { findRoomById } from "../services/roomsService";
import "./MainView.css";

function MainView() {
  useEffect(() => {
    async function findRoom() {
      try {
        const result = await findRoomById("1");
        console.log("✅ Room details:", result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("❌ Failed to fetch room details:", error.message);
        }
      }
    }

    findRoom();

    const rooms = document.querySelectorAll("path[id]");
    rooms.forEach((room) => {
      room.classList.add("room");
    });
  }, []);

  return (
    <div className="wrapper">
      <Exactum2 className="floor-image" />
    </div>
  );
}

export default MainView;
