// const API_BASE_URL = 'http://188.120.248.233:3001/api';
const API_BASE_URL = '/send.php';

export interface FormData {
  phone: string;
  name?: string;
  email?: string;
  message?: string;
  service?: string;
}

export const sendForm = async (data: FormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Ошибка отправки формы');
    }
    
    return result;
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    throw error;
  }
};