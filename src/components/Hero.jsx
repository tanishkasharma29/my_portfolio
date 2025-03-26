import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiDownload } from 'react-icons/fi'

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 10rem 5% 5rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
`

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const HeroSubtitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const HeroText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.secondary};
`

const HeroButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
  }
`

const FloatingCircles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(56, 189, 248, 0.1);
`

export default function Hero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span style={{ color: '#f472b6' }}>Shailly Yadav</span>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
         Welcome to my portfolio!
        </HeroSubtitle>
        <HeroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
           I am a B.Tech Computer Science student at IIIT Vadodara (graduating in 2026) 
          with a strong foundation in Machine Learning, AI, and Full-Stack Development. Passionate about solving real-world problems, 
          I have experience working with AI research, NLP, computer vision, and cloud-based deployments.
        </HeroText>
        <HeroButton
          href="Matty_s_Resume-9.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume <FiDownload />
        </HeroButton>
      </HeroContent>

      <FloatingCircles>
        {[...Array(5)].map((_, i) => (
          <Circle
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 60}%`,
            }}
          />
        ))}
      </FloatingCircles>
    </HeroSection>
  )
}