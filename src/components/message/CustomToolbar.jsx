const CustomToolbar = () => (
  <div
    id="toolbar"
    className="flex items-center p-2 bg-gray-100 border-b border-gray-300 rounded-t-lg"
  >
    <span className="ql-formats">
      <button className="ql-bold ql-btn" title="Bold"></button>
      <button className="ql-italic ql-btn" title="Italic"></button>
      <button className="ql-underline ql-btn" title="Underline"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-align ql-btn" value="" title="Align Left"></button>
      <button
        className="ql-align ql-btn"
        value="center"
        title="Align Center"
      ></button>
      <button
        className="ql-align ql-btn"
        value="right"
        title="Align Right"
      ></button>
    </span>
    <span className="ql-formats">
      <button
        className="ql-list ql-btn"
        value="ordered"
        title="Numbered List"
      ></button>
      <button
        className="ql-list ql-btn"
        value="bullet"
        title="Bullet List"
      ></button>
    </span>
    <span className="ql-formats">
      <select className="ql-color" title="Text Color"></select>
    </span>
  </div>
);

export default CustomToolbar;
