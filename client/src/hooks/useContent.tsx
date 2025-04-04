import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

export function useContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          // 'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setContent(response.data.content);
      });
  }, []);

  return content;
}
