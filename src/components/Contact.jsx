import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaPaperPlane, FaPhone, FaLandmark } from 'react-icons/fa'

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`

const ContactText = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.3rem;
  }

  p,
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(56, 189, 248, 0.3);
  }
`

export default function Contact() {
  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaPaperPlane />
            </ContactIcon>
            <ContactText>
              <h3>Email</h3>
              <a href="mailto:shaillyyadav979@gmail.com">your.email@example.com</a>
            </ContactText>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>
              <h3>Phone</h3>
              <a href="tel:+91-7007051309">+91-7007051309</a>
            </ContactText>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaLandmark />
            </ContactIcon>
            <ContactText>
              <h3>Location</h3>
              <p>Gandhinagar, India</p>
            </ContactText>
          </ContactItem>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FormGroup
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FormLabel>Name</FormLabel>
            <FormInput type="text" placeholder="Name" required />
          </FormGroup>

          <FormGroup
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FormLabel>Email</FormLabel>
            <FormInput type="email" placeholder="Your Email" required />
          </FormGroup>

          <FormGroup
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FormLabel>Message</FormLabel>
            <FormTextarea placeholder="Your Message" required />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}