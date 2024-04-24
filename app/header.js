import Searchbar from "./searchbar";
function Header() {
  return (
    <>
      <div className="container">
        <div className="searchbar_row">
          <div className="header_left col ">
            <img className="imag_vector" src="Vector.svg" />
            <img className="imag_movie" src="Movie Hub.svg" />
          </div>
          <div className="searchbox col d-none d-md-block ">
            <Searchbar />
          </div>
          <div className="header_right col-2 d-lg-none ">
            <img className="menu" src="menu_open.svg" />
          </div>
          <div className="header_right col d-none d-lg-flex">
            <img className="imag_list" src="List.png" />
            <img className="imag_addmovie" src="Add Movie.png" />
          </div>
        </div>
        <div className="searchbox d-md-none ">
          <Searchbar />
        </div>
        <div className="header_bottom row"></div>
      </div>
    </>
  );
}
export default Header;