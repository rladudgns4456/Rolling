import ButtonBase from './ButtonBase';
import { ICON_SIZE, LABEL_TYPO } from './Tokens';

export default function IconLabelButton({
  iconSrc,
  children,
  size = 40,
  variant = 'outlined',
  responsive = 'hug',
  demo = 'none',
  className = '',
  labelClassName = '',
  ...rest
}) {
  return (
    <ButtonBase
      size={size}
      variant={variant}
      responsive={responsive}
      demo={demo}
      className={className}
      {...rest}
    >
      <img
        src={iconSrc}
        alt=""
        className={`${ICON_SIZE[size]} shrink-0 align-middle`}
        aria-hidden="true"
      />
      <span
        className={`${LABEL_TYPO[size]} ${labelClassName} whitespace-nowrap align-middle`}
      >
        {children}
      </span>
    </ButtonBase>
  );
}
