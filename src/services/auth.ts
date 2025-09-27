
/**
 * Authentication service for Dynamic Tech
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

// Mock user for demonstration
const MOCK_USER: User = {
  id: '4534927558823005602896',
  name: 'Dynamic DemoUser',
  email: 'demouser@dynamictech.web.id',
  avatar: 'https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//gifted-fav.png',
};

// Auth state management
let currentUser: User | null = null;
const observers: ((user: User | null) => void)[] = [];

// Store auth data in localStorage
const AUTH_STORAGE_KEY = 'dynamictech_auth';

// Initialize auth state from localStorage if available
const initAuthState = (): void => {
  try {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      currentUser = JSON.parse(storedAuth);
      notifyObservers();
    }
  } catch (error) {
    console.error('Failed to initialize auth state:', error);
  }
};

// Notify all observers of auth state changes
const notifyObservers = (): void => {
  observers.forEach(callback => callback(currentUser));
};

/**
 * Login with email and password
 */
export const login = async (credentials: LoginCredentials): Promise<{ success: boolean; message?: string }> => {
  try {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful login (in a real app, this would validate against a backend)
    if (credentials.email === 'demouser@dynamictech.web.id' && credentials.password === 'demo@123') {
      currentUser = MOCK_USER;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
      notifyObservers();
      return { success: true };
    }
    
    return { 
      success: false, 
      message: 'Invalid credentials' 
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'An error occurred during login. Please try again.'
    };
  }
};

/**
 * Register a new user
 */
export const register = async (data: RegisterData): Promise<{ success: boolean; message?: string }> => {
  try {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, this would create a new user in the backend
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name: data.name,
      email: data.email,
    };
    
    currentUser = newUser;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
    notifyObservers();
    
    return { 
      success: true,
      message: 'Registration successful! Welcome to Dynamic Tech.'
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'An error occurred during registration. Please try again.'
    };
  }
};

/**
 * Logout current user
 */
export const logout = (): void => {
  currentUser = null;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  notifyObservers();
};

/**
 * Get the current logged-in user
 */
export const getCurrentUser = (): User | null => {
  return currentUser;
};

/**
 * Check if a user is logged in
 */
export const isLoggedIn = (): boolean => {
  return currentUser !== null;
};

/**
 * Subscribe to auth state changes
 */
export const onAuthStateChanged = (callback: (user: User | null) => void): () => void => {
  observers.push(callback);
  
  // Call immediately with current state
  callback(currentUser);
  
  // Return unsubscribe function
  return () => {
    const index = observers.indexOf(callback);
    if (index > -1) {
      observers.splice(index, 1);
    }
  };
};

// Initialize auth state on load
initAuthState();
