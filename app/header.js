import Searchbar from "./searchbar";
function Header() {
  return (
    <>
      <div className="searchbar_row">
        <div className="movie_logo  ">
          <img className="imag_vector" src="Vector.svg" />
          <img className="imag_movie" src="Movie Hub.svg" />
        </div>
        <div className="searchbox d-none d-md-block text-center">
          <Searchbar />
        </div>
        <div className="menu d-lg-none ">
          <img className="menu" src="menu_open.svg" />
        </div>
        <div className="menu d-none d-lg-flex">
          <img className="imag_list" src="List.png" />
          <img className="imag_addmovie" src="Add Movie.png" />
        </div>
      </div>
      <div className="searchbox d-md-none text-center">
        <Searchbar />
      </div>
      <div className="header_bottom row"></div>
    </>
  );
}
export default Header;