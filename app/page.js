import Header from "./header";
import Movie from "./Movie";
import Footer from "./footer";

function page() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <Movie />
        <Movie />
        {/* <Movie /> */}
      </div>
      <Footer />
    </div>
  );
}
export default page;
