export default function Banner() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.ctfassets.net/9q8du028z7sn/2XervZuBw7fY8O9Sha4tU8/8c9709a1845e9ec003dea79b31a6e7fa/1920x725_DESK_HEROSECONDARY_1212___3_.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.ctfassets.net/9q8du028z7sn/18qJqJOJlt4jvDQFjUAMS6/f15c4e9f1d91bbc3c8c504d3c8086047/2024-CW47-Women-Hero-w47hfs23lp-22__18_Dec_09_00_AM_-_18_Dec_01_00_PM_-dsk.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.ctfassets.net/9q8du028z7sn/XDPKHQUtO2F7D3Q1byIUF/3b60349e5a73e0ade679a2e02346aa0f/2024-CW47-Women-Hero-w47hstaticpage1212harbolnas-3-dsk.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.ctfassets.net/9q8du028z7sn/67cQhHyN2qp2Ndf83kF29R/b918eb68a092ea978ed97b7ebb632d1f/2024-CW47-Women-Hero-w47hfsbranddaymarhenjkwanijwpei-12__18_Dec_10_00_AM_-_19_Dec_12_00_AM_-dsk.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
