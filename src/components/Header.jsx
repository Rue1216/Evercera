import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch
} from '@nextui-org/react'
import { menuItems } from '@assets/js/navItems'
import { Logo } from '@components/global/Logo'
import { MoonIcon, SunIcon } from '@components/global/SwitchIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSelected, setIsSelected] = useState(true)

  function toggleTheme(e) {
    localStorage.theme = e.target.checked ? 'light' : 'dark'
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.className = ''
    body.classList.add(localStorage.theme)
  }, [isSelected])
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <a className="text-primary-300 flex justify-center items-center" href="/">
          <Logo className="w-4 h-4" />
          <p className="font-bold text-inherit">Evercera</p>
        </a>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <a className="text-primary-300 ml-3" href={item.path}>
              {item.title['zh-tw']}
            </a>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Switch
            isSelected={isSelected}
            onChange={toggleTheme}
            onValueChange={setIsSelected}
            size="sm"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a className="block text-primary-300 w-full py-3" href={item.path}>
              {item.title['zh-tw']}
            </a>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <Switch
            isSelected={isSelected}
            onChange={toggleTheme}
            onValueChange={setIsSelected}
            size="sm"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  )
}