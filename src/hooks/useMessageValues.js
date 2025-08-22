import { useState } from 'react';

export function useMessageValues() {
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [profileImageURL, setProfileImageURL] = useState('');

  return {
    sender,
    setSender,
    content,
    setContent,
    relationship,
    setRelationship,
    font,
    setFont,
    profileImageURL,
    setProfileImageURL,
  };
}
