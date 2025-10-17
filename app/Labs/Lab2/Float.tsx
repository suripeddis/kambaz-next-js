'use client';

import Image from 'next/image';

export default function Float() {
  const starship =
    'https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg';

  return (
    <div id="wd-float">
      <div id="wd-float-images">
        <h2>Float</h2>
        <div>
          <Image
            className="wd-float-right"
            src={starship}
            alt="Starship"
            width={300}
            height={180}
            unoptimized
          />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          <Image
            className="wd-float-left"
            src={starship}
            alt="Starship"
            width={300}
            height={180}
            unoptimized
          />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          <Image
            className="wd-float-right"
            src={starship}
            alt="Starship"
            width={300}
            height={180}
            unoptimized
          />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          <Image
            className="wd-float-left"
            src={starship}
            alt="Starship"
            width={300}
            height={180}
            unoptimized
          />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic ...
          <div className="wd-float-done" />
        </div>
      </div>

      <div id="wd-float-blocks" style={{ marginTop: 24 }}>
        <h2>Float</h2>
        <div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">Yellow</div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
            Blue
          </div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">Red</div>
          <Image
            className="wd-float-right"
            src={starship}
            alt="Starship"
            width={300}
            height={180}
            unoptimized
          />
          <div className="wd-float-done" />
        </div>
      </div>
    </div>
  );
}