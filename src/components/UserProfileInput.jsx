import userImageNull from '../assets/profile/person.svg';


function UserProfileInput({url}) {
  return (
    <form>
      <div className="w-20 h-20 overflow-hidden rounded-full bg-grayscale3">
        <input type="hidden"></input>
        <img src={userImageNull} alt=""></img>
      </div>
    </form>
  );
}

export default UserProfileInput;
