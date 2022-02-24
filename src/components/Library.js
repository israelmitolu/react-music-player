import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => (
  <div className={`library ${libraryStatus ? "active-library" : ""}`}>
    <h2>Library</h2>
    <div className="library-songs">
      {songs.map((song) => (
        <LibrarySong
          song={song}
          songs={songs}
          setCurrentSong={setCurrentSong}
          id={song.id}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
      ))}
    </div>
  </div>
);

export default Library;
