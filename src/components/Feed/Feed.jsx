import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "../Feed/Feed.css";
import InputOptions from "../InputOptions/InputOptions";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__options">
          <InputOptions Icon={ImageIcon} title="Photo" color="blue" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Event"
            color="#7FC15E"
          />
        </div>
      </div>

      <Post
        name="Krunal Sawarkar"
        description="This is test"
        message="Testing here"
      />
    </div>
  );
}

export default Feed;
