import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { axiosInstance } from './axiosInstance';

// Styled Components with enhanced styling
const FormContainer = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem;
  background: linear-gradient(to bottom right, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

const FormTitle = styled(motion.h1)`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 2.2rem;
  background: linear-gradient(to right, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #3498db, #2c3e50);
    border-radius: 2px;
  }
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 1.8rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.7rem;
  color: #4a5568;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#e2e8f0'};
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:focus {
    border-color: ${props => props.error ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
    outline: none;
    background-color: white;
  }
  
  &::placeholder {
    color: #a0aec0;
    font-weight: 300;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.error ? '#e74c3c' : '#e2e8f0'};
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  
  &:focus {
    border-color: ${props => props.error ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(231, 76, 60, 0.2)' : 'rgba(52, 152, 219, 0.2)'};
    outline: none;
    background-color: white;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: ${props => props.checked ? 'rgba(52, 152, 219, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.error ? '#e74c3c' : props.checked ? '#3498db' : '#e2e8f0'};
  
  &:hover {
    background: rgba(52, 152, 219, 0.05);
  }
  
  input {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${props => props.error ? '#e74c3c' : '#e2e8f0'};
    border-radius: 50%;
    outline: none;
    transition: all 0.2s ease;
    position: relative;
    
    &:checked {
      border-color: ${props => props.error ? '#e74c3c' : '#3498db'};
      background-color: ${props => props.error ? '#e74c3c' : '#3498db'};
      box-shadow: inset 0 0 0 3px white;
    }
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #2c3e50, #3498db);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -60%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    transition: all 0.3s;
  }
  
  &:hover::after {
    left: 100%;
  }
`;

const ErrorMessage = styled(motion.div)`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(231, 76, 60, 0.05);
  border-radius: 5px;
`;

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const PopupTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PopupMessage = styled.p`
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const PopupButton = styled.button`
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    place: '',
    phoneNumber: '',
    age: '',
    gender: '',
    goal: '',
    duration: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    place: '',
    phoneNumber: '',
    age: '',
    gender: '',
    goal: '',
    duration: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: '',
      place: '',
      phoneNumber: '',
      age: '',
      gender: '',
      goal: '',
      duration: ''
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
      valid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
      valid = false;
    }

    if (!formData.place.trim()) {
      newErrors.place = 'Place is required';
      valid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
      valid = false;
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
      valid = false;
    } else if (isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
      valid = false;
    } else if (formData.age < 5 || formData.age > 99) {
      newErrors.age = 'Age must be between 5 and 99';
      valid = false;
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }

    if (!formData.goal) {
      newErrors.goal = 'Fitness goal is required';
      valid = false;
    }

    if (!formData.duration) {
      newErrors.duration = 'Course duration is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axiosInstance.post('/details/create', formData);
        console.log('Server response:', response.data);
        setShowPopup(true);
        setFormData({
          fullName: '',
          place: '',
          phoneNumber: '',
          age: '',
          gender: '',
          goal: '',
          duration: ''
        });
      } catch (error) {
        console.error('Submission error:', error.response ? error.response.data : error.message);
      }
    }
  };


  const closePopup = () => {
    setShowPopup(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
      <FormContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <FormTitle variants={itemVariants}>NISAM LIFELINE</FormTitle>

        <form onSubmit={handleSubmit}>
          <FormGroup variants={itemVariants}>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              error={!!errors.fullName}
            />
            {errors.fullName && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.fullName}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label htmlFor="place">Place</Label>
            <Input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Enter your city/town"
              error={!!errors.place}
            />
            {errors.place && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.place}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              error={!!errors.phoneNumber}
            />

            {errors.phoneNumber && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.phoneNumber}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="12"
              max="99"
              placeholder="Enter your age"
              error={!!errors.age}
            />
            {errors.age && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.age}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label>Gender</Label>
            <RadioGroup>
              <RadioLabel checked={formData.gender === 'Male'} error={!!errors.gender}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </RadioLabel>
              <RadioLabel checked={formData.gender === 'Female'} error={!!errors.gender}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </RadioLabel>
            </RadioGroup>
            {errors.gender && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.gender}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label>Fitness Goal</Label>
            <RadioGroup>
              <RadioLabel checked={formData.goal === 'fat loss'} error={!!errors.goal}>
                <input
                  type="radio"
                  name="goal"
                  value="fat loss"
                  checked={formData.goal === 'fat loss'}
                  onChange={handleChange}
                />
                Fat Loss
              </RadioLabel>
              <RadioLabel checked={formData.goal === 'weight gain'} error={!!errors.goal}>
                <input
                  type="radio"
                  name="goal"
                  value="weight gain"
                  checked={formData.goal === 'weight gain'}
                  onChange={handleChange}
                />
                Weight Gain
              </RadioLabel>
            </RadioGroup>
            {errors.goal && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.goal}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup variants={itemVariants}>
            <Label htmlFor="course">Course Duration</Label>
            <Select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              error={!!errors.duration}
            >
              <option value="">Select course duration</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                <option key={month} value={`${month}`}>
                  {month}
                </option>
              ))}
            </Select>

            {errors.duration && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errors.duration}
              </ErrorMessage>
            )}
          </FormGroup>

          <Button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
          </Button>
        </form>
      </FormContainer>

      <AnimatePresence>
        {showPopup && (
          <PopupOverlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closePopup}
          >
            <PopupContent
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <PopupTitle>Registration Successful!</PopupTitle>
              <PopupMessage>
                Thank you for registering for our fitness program.
                {/* We've received your details and our team will contact you shortly to discuss the next steps. */}
              </PopupMessage>
              <PopupButton onClick={closePopup}>Got It!</PopupButton>
            </PopupContent>
          </PopupOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;