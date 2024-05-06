
function Movie() {
  return (
    <>
      <div className="grid col-12 col-md-6 col-lg-12">
        <div className="row">
          <div className="movie_image col-12 col-lg-4">
            <img className="image" src="/movie_image.png" />
          </div>
          <div className="movie_details col-12 col-lg-8">
            <div className="movie_name">Movie Name</div>
            <div className="movie_release_details row">
              <div className="release_year col-5">Year • Duration</div>
              <div className="line col-1">|</div>
              <div className="movie_genre col-6">genre Three</div>
            </div>
            <div className="description">Description</div>
            <div className="description_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet maximus dolor, at lobortis velit. Phasellus quis augue a diam tristique iaculis at sit amet turpis. Maecenas luctus convallis tempus. Integer rutrum tincidunt rutrum. Praesent sollicitudin faucibus elit sed interdum. Suspendisse et neque vitae ipsum mollis malesuada.</div>
            <div className="like_row row">
              <div className="counter col-8">
                <div className="counter_row row">
                  <div className="like_div col">
                    <img className="like_image" src="/like.png" />
                  </div>
                  <div className="count_div col">
                    11
                  </div>
                  <div className="dislike_div col">
                    <img className="dislike_image" src="/dislike.svg" />
                  </div>
                </div>
              </div>
              <div className="delete_div col-4">
                <img className="delete_image" src="/delete.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Movie;

