import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';
import CustomToolbar from './CustomToolbar';
import { EDITOR_FORMATS } from '../../constants/EDITOR_FORMATS';

const TextEditor = ({ className, onChange }) => {
  const [value, setValue] = useState(''); // HTML 값 (에디터용)
  //const [plainText, setPlainText] = useState(''); // 태그 제거된 값 (DB 저장용)

  const modules = {
    toolbar: {
      container: '#toolbar',
    },
  };

  return (
    <div className={`text-editor-container ${className}`}>
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(content, delta, source, editor) => {
          setValue(content); // ReactQuill 내부에는 HTML 그대로 유지
          const textOnly = editor.getText().trim();

          if (onChange) {
            onChange(textOnly); // 부모 컴포넌트에도 plain text 전달
          }
        }}
        modules={modules}
        formats={EDITOR_FORMATS}
      />
    </div>
  );
};

export default TextEditor;
