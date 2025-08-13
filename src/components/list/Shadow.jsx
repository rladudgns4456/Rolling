import beige from '../assets/images/beige.svg';
import blue from '../assets/images/blue.svg';
import green from '../assets/images/green.svg';
import purple from '../assets/images/purple.svg';

const SHADOW_IMAGES = { purple, beige, blue, green };

export default function Shadow({ color }) {
  const src = SHADOW_IMAGES[color];
  return (
    <>
      <img
        src={src}
        className="top-[117px] z-0 left-[132px] absolute rounded-br-[16px] "
      />
    </>
  );
}
