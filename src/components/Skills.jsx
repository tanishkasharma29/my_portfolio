import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from 'react-icons/fa'
import {
  SiC,
  SiDart,
  SiFlutter,
  SiMysql,
  SiKubernetes,
  SiFastapi,
  SiFirebase,
  SiPostman,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiTableau,
} from 'react-icons/si'

const SkillsSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.card};
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`

const skills = [
  { name: 'Java', icon: <FaJava />, color: '#007396' },
  { name: 'C', icon: <SiC />, color: '#A8B9CC' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Dart', icon: <SiDart />, color: '#0175C2' },
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'Tableau', icon: <SiTableau />, color: '#E97627' },
]

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <SkillIcon style={{ color: skill.color }}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  )
}