import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-blue text-white hover:bg-blue/90 active:scale-[0.98]',
    secondary:
      'bg-transparent text-off-black border-2 border-off-black hover:bg-off-black hover:text-white active:scale-[0.98]',
    ghost: 'bg-transparent text-blue hover:underline underline-offset-4 px-0',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
