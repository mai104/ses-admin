// src/hooks/useAuth.js
import { createContext, useContext } from 'react';

export const defaultAuthValue = {
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false
};

export const AuthContext = createContext(defaultAuthValue);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const requestPasswordReset = async (email) => {
    try {
      // For demo purposes
      localStorage.setItem('resetEmail', email);
      console.log('Password reset requested for:', email);
      return { success: true };
    } catch (error) {
      console.error('Password reset error:', error);
      return { success: false, error: 'Failed to request password reset' };
    }
  };

  const updatePassword = async (resetToken, newPassword) => {
    try {
      // For demo purposes
      console.log('Password update requested with token:', resetToken);
      localStorage.removeItem('resetEmail');
      return { success: true };
    } catch (error) {
      console.error('Password update error:', error);
      return { success: false, error: 'Failed to update password' };
    }
  };

  const verifyResetToken = async (token) => {
    try {
      // For demo purposes
      const resetEmail = localStorage.getItem('resetEmail');
      return { success: !!resetEmail, email: resetEmail };
    } catch (error) {
      console.error('Token verification error:', error);
      return { success: false, error: 'Invalid or expired token' };
    }
  };

  return {
    ...context,
    requestPasswordReset,
    updatePassword,
    verifyResetToken
  };
}