/* eslint-disable react/no-unescaped-entities */
export default function Margins() {
    return (
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div
          className="wd-margin-bottom wd-padded-top-left wd-border-fat
                     wd-border-red wd-border-solid wd-bg-color-yellow">
          Margin bottom
        </div>
        <div
          className="wd-margin-right-left wd-padded-bottom-right wd-border-fat
                     wd-border-blue wd-border-solid wd-bg-color-yellow">
          Margin left right
        </div>
        <div
          className="wd-margin-all-around wd-padding-fat wd-border-fat
                     wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          Margin all around
        </div>
        <div id="wd-css-position-fixed">
            <h2>Fixed position</h2>
                 Checkout the blue square that says "Fixed position" stuck all the way on the right and half way down the page. It doesn't scroll with the rest of the page. Its position is "Fixed".
            <div className="wd-pos-fixed 
             wd-dimension-square wd-bg-color-blue 
            wd-fg-color-white">
             Fixed position
         </div>
    </div>
    </div>
    );
  }