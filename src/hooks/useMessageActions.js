import { useNavigate, useParams } from 'react-router-dom';
import { createMessage } from '../api/createMessage';

const TEAM = '18-2';

export function useMessageActions(values, ui) {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ui.isButtonDisabled(values.sender, values.content) || ui.isSubmitting)
      return;

    const messageData = {
      team: TEAM,
      recipientId,
      sender: values.sender,
      profileImageURL: values.profileImageURL,
      relationship: values.relationship,
      content: values.content,
      font: values.font,
    };

    try {
      ui.setIsSubmitting(true);
      await createMessage(messageData);
      window.alert('메시지가 성공적으로 전송되었습니다.');
      navigate(`/post/${recipientId}`);
    } catch (error) {
      console.error('메시지 전송 실패', error);
    } finally {
      ui.setIsSubmitting(false);
    }
  };
  return { handleSubmit };
}
