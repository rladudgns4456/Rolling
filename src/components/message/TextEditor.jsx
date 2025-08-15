import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

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

const TextEditor = ({ name }) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  const formats = [
    'bold',
    'italic',
    'underline',
    'align',
    'list',
    'bullet',
    'color',
  ];

  return (
    <div className="text-editor-container">
      <input type="hidden" name={name} value={value} />
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
