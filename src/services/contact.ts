
/**
 * Contact form submission service
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Submit contact form data
 * @param formData - The form data to submit
 * @returns Promise resolving to the submission result
 */
export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, this would send data to a backend API
    // Simulating API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    return { 
      success: true, 
      message: 'Thank you for reaching out! We will get back to you soon.' 
    };
    
    // For a real implementation, you would make an API call:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    };
  }
};
