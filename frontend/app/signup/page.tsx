'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Signup.module.css';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim() && email.trim() && password.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.heading}>Sign Up</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                  First Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your first name" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  className={styles.input} 
                  required
                />
                <label>
                  Last Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your last name" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                  className={styles.input} 
                  required
                />
                <label>
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className={styles.input} 
                  required
                />
                <label>
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="Create a password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className={styles.input} 
                  required
                />
                <button 
                  type="submit" 
                  className={styles.button}
                >
                  Sign Up
                </button>
              </form>
            ) : (
              <p className={styles.successMessage}>Thank you for signing up!</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
