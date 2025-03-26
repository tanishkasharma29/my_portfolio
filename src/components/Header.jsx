import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
`

const Logo = styled(motion.a)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo
        href="#"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {"<Portfolio/>"}
      </Logo>

      <NavLinks>
        {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
          <NavLink
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </NavLink>
        ))}
      </NavLinks>

      <SocialIcons>
        <SocialIcon
          href="https://github.com/Shailly-450"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/shailly-yadav-60658b288/"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://leetcode.com/u/shailly_tia/"
          target="_blank"
          whileHover={{ y: -3 }}
        >
          <FaCode />
        </SocialIcon>
      </SocialIcons>
    </HeaderContainer>
  )
}