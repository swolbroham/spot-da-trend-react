import { useState } from "react";


function SearchBar({ filterText, onFilterTextChange, handleSearchSubmit }) {
  return (
    <form
      onSubmit={handleSearchSubmit}
      className="w-fit rounded-3xl bg-white px-3 py-0.5"
    >
      <input
        className="w-full text-black"
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </form>
  );
}

function SongTime(trackTime) {
  var minutes = Math.floor(trackTime / 60000);
  var seconds = ((trackTime % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function SongRow({ song }) {
  return (
    <tr className="align-left">
      <td>{song.songName}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{SongTime(song.trackTime)}</td>
    </tr>
  );
}

function SongTable({ songs, filterText }) {
  const rows = [];

  songs.forEach((song) => {
    if (
      song.songName
        .toString()
        .toLowerCase()
        .indexOf(filterText.toString().toLowerCase()) === -1
    ) {
    if (
      song.artist
        .toString()
        .toLowerCase()
        .indexOf(filterText.toString().toLowerCase()) === -1
    ) {
    if (
      song.album
        .toString()
        .toLowerCase()
        .indexOf(filterText.toString().toLowerCase()) === -1
    ) {
      return;
    }
    }
    }

    rows.push(<SongRow song={song} />);

  });

  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-size-1xl text-left">
          <th>Song Name</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Track Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default function FilterableSongTable({ songs }) {
  const [filterText, setFilterText] = useState("");
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="col-span-9 mt-9 h-full py-4 md:mt-0">
      <div className="flex h-full flex-col rounded-3xl bg-[#121212] text-2xl">
        <div className="px-4 py-5">
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
        <div className="p-2 px-4 pb-3">
          <SongTable
            songs={songs}
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
        </div>
      </div>
    </div>
  );
}
