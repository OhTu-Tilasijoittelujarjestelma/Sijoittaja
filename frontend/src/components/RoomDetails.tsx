import { X } from "lucide-react";
import "./RoomDetails.css";

function RoomDetails({ handleClose }: { handleClose: () => void }) {
  return (
    <div className="room-details">
      <X className="close-room-details" onClick={handleClose} />
    </div>
  );
}

export default RoomDetails;
