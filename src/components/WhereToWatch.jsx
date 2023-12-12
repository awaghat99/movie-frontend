import React from "react";

const WhereToWatch = (props) => {
  return (
    <div className="w-full">
      <h3 className="text-lg text-slate-500 uppercase">Where to Watch</h3>
      <div className="flex flex-wrap flex-col justify-start gap-y-4 mt-4 ">
        {props.movieDetail && props.movieDetail["watch/providers"].results.GB ? (
          <>
            <div className="w-full">
              <h4 className="text-slate-500 text-sm">Buy</h4>
              <div className="w-full flex flex-wrap gap-x-2 mt-4 gap-y-2">
                {props.movieDetail["watch/providers"].results.GB.buy ? (
                  props.movieDetail["watch/providers"].results.GB.buy.map((provider, index) => {
                    const backgroundImageUrl = `url(
              "https://image.tmdb.org/t/p/original/${provider.logo_path}"
            )`;
                    return (
                      <div
                        key={index}
                        style={{ backgroundImage: backgroundImageUrl }}
                        className="w-[13%] aspect-square rounded-full bg-cover bg-center max-md:w-[10%]">
                        {" "}
                      </div>
                    );
                  })
                ) : (
                  <p className="text-white text-xs">No where to buy</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <h4 className="text-slate-500 text-sm">Rent</h4>
              <div className="w-full flex flex-wrap gap-x-2 mt-4 gap-y-2">
                {props.movieDetail["watch/providers"].results.GB.rent ? (
                  props.movieDetail["watch/providers"].results.GB.rent.map((provider, index) => {
                    const backgroundImageUrl = `url(
                "https://image.tmdb.org/t/p/original/${provider.logo_path}"
              )`;
                    // Render Rent content
                    return (
                      <div
                        key={index}
                        style={{ backgroundImage: backgroundImageUrl }}
                        className="w-[13%] aspect-square rounded-full bg-cover bg-center max-md:w-[10%]">
                        {" "}
                      </div>
                    );
                  })
                ) : (
                  <p className="text-white text-xs">No where to rent</p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-slate-500 text-sm">FlatRate</h4>
              <div className="w-full flex flex-wrap gap-x-2 mt-4 gap-y-2">
                {props.movieDetail["watch/providers"].results.GB.flatrate ? (
                  props.movieDetail["watch/providers"].results.GB.flatrate.map((provider, index) => {
                    const backgroundImageUrl = `url('https://image.tmdb.org/t/p/original/${provider.logo_path}')`;
                    return (
                      <div
                        key={index}
                        style={{ backgroundImage: backgroundImageUrl }}
                        className="w-[20%] aspect-square rounded-full bg-cover bg-center max-md:w-[10%] border-red-500 border-2">
                        {" "}
                      </div>
                    );
                  })
                ) : (
                  <p className="text-white text-xs">No flatrate providers</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="text-white text-sm">No Watch providers available</p>
        )}
      </div>
    </div>
  );
};

export default WhereToWatch;
