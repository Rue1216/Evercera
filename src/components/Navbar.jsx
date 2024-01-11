import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link
} from '@nextui-org/react'
import { menuItems } from '../asset/js/navItems'
import { Logo } from './global/Logo'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <Navbar shouldHideOnScroll isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <Link href="/">
          <Logo className="w-4 h-4" />
          <p className="font-bold text-inherit">Evercera</p>
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className="ml-3" href={item.path}>
              {item.title['zh-tw']}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full py-3" href={item.path} size="lg">
              {item.title['zh-tw']}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
