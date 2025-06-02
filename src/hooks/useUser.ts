
import { useState, useEffect } from 'react';
import { userService, User } from '@/services/userService';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(userService.getCurrentUser());

  useEffect(() => {
    const unsubscribe = userService.subscribe((newUser) => {
      setUser(newUser);
    });

    return unsubscribe;
  }, []);

  return {
    user,
    switchProfile: userService.switchProfile.bind(userService),
    setUser: userService.setUser.bind(userService)
  };
};
