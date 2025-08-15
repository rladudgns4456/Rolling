import { BASE, SIZES, VARIANTS, DEMO, responsiveWidth } from './Tokens';

export default function ButtonBase({
  size = 56,
  variant = 'primary',
  responsive = 'none',
  demo = 'none',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    BASE,
    SIZES[size],
    VARIANTS[variant],
    responsiveWidth(variant, size, responsive),
    DEMO[demo],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
