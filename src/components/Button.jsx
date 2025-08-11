export default function Button({ children, className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center h-14 px-6 rounded-xl font-medium transition-colors';
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
