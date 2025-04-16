import { motion } from "framer-motion";
import styled from "styled-components";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsSection = styled.section`
  padding: 5rem 5%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechPill = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive and animated portfolio site showcasing projects and skills.",
    tech: ["React", "Framer Motion", "Styled Components"],
    github: "https://github.com/tanishkasharma29/my_portfolio",
    live: "#",
  },
  {
    title: "Gemini Chatbot (MERN)",
    description:
      "A Gemini-powered chatbot built using the MERN stack with a clean and functional UI.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI"],
    github: "https://github.com/tanishkasharma29/Gemini-MERN",
    live: "https://gemini-frontend-89y9.onrender.com/",
  },
  {
    title: "Expense Tracker App",
    description:
      "A full-featured expense tracker for managing and visualizing monthly budgets.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/tanishkasharma29/Expense-Tracker-App",
    live: "https://expense-tracker-app-2qut.onrender.com",
  },
  {
    title: "YouTube Channel Analysis",
    description:
      "A Python project to analyze YouTube channel statistics using API integration and data visualization.",
    tech: ["Python", "YouTube API", "Pandas", "Matplotlib"],
    github: "https://github.com/tanishkasharma29/YouTube_Analysis_Python",
    live: "https://youtubevideoanalysiswebapp-vr3vupd8aq3mfappwqf3aye.streamlit.app/",
  },
];

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  whileHover={{ x: 3 }}
                >
                  <FiGithub /> Code
                </ProjectLink>
                <ProjectLink
                  href={project.live}
                  target="_blank"
                  whileHover={{ x: 3 }}
                >
                  <FiExternalLink /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}
