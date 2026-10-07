'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & { to: string }

export function Link({ to, ...props }: LinkProps) {
  const href =
    to.startsWith('/') && !to.includes('#') && !to.includes('?')
      ? `${to.replace(/\/$/, '')}/`
      : to
  return <NextLink href={href} {...props} />
}

export function useLocation() {
  return { pathname: usePathname() ?? '/' }
}
