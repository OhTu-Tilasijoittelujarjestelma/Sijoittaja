import { X } from "lucide-react";
import { motion } from "motion/react";
import type { Room } from "../types";
import "./RoomDetails.css";

function RoomDetails({
  room,
  handleClose,
}: {
  room: Room | null;
  handleClose: () => void;
}) {
  if (!room) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="room-details"
    >
      <X className="close-room-details" onClick={handleClose} />
      {room.name}
    </motion.div>
  );
}

export default RoomDetails;
