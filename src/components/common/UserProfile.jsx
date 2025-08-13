//프로필 이미지
function UserProfile({ proFile }) {
  return (
    <div className="overflow-hidden rounded-full h-14 w-14">
      <img className="w-full h-full" src={proFile} alt="" />
    </div>
  );
}


export default UserProfile;