import previewNull from '../assets/profile/person.svg';

function UserProfilePreview({ preview }) {
  return (
    <div className="w-20 h-20 overflow-hidden rounded-full bg-grayscale3">
      {preview ? (
        <img src={preview} alt="" />
      ) : (
        <img src={previewNull} alt="" />
      )}
    </div>
  );
}

export default UserProfilePreview;
