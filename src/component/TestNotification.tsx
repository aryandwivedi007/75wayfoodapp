import React from 'react';
import { Button } from '@mui/material';

const TestNotificationButton: React.FC = () => {
  const handleClick = () => {
    if (Notification.permission === 'granted') {
      new Notification('Test Notification', {
        body: 'This is triggered by a click.',
      });
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Test Notification', {
            body: 'Permission granted and notification triggered.',
          });
        }
      });
    }
  };

  return <Button onClick={handleClick}>Test Notification</Button>;
};

export default TestNotificationButton;
