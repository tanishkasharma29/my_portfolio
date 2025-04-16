import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 5%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Let's build something amazing together. Feel free to reach out!
      </FooterText>
      <SocialIcons>
        <SocialIcon
          href="https://github.com/tanishkasharma29"
          target="_blank"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/tanishka-sharma-a5a883257/"
          target="_blank"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://leetcode.com/u/tanishkasharma_29/"
          target="_blank"
          whileHover={{ y: -5 }}
        >
          <FaCode />
        </SocialIcon>
      </SocialIcons>
      <Copyright>
        &copy; {new Date().getFullYear()} Tanishka. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
