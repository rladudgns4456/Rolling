import ButtonBase from './ButtonBase';
import { LABEL_TYPO } from './Tokens';

export default function TextButton({
  children,
  size = 56,
  variant = 'primary',
  responsive = 'none',
  demo = 'none',
  labelClassName = '',
  className = '',
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
      <span
        className={`${LABEL_TYPO[size]} ${labelClassName} whitespace-nowrap align-middle`}
      >
        {children}
      </span>
    </ButtonBase>
  );
}
