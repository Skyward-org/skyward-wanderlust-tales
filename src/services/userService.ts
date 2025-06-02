
export type ProfileType = 'Glide' | 'Business' | 'Guest';

export interface User {
  id: string;
  username: string;
  profileType: ProfileType;
  email?: string;
}

class UserService {
  private currentUser: User | null = null;
  private listeners: Array<(user: User | null) => void> = [];

  constructor() {
    // Initialize with a default user for demo purposes
    this.currentUser = {
      id: '1',
      username: 'Sarah',
      profileType: 'Business',
      email: 'sarah@example.com'
    };
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  setUser(user: User | null): void {
    this.currentUser = user;
    this.notifyListeners();
  }

  subscribe(listener: (user: User | null) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.currentUser));
  }

  switchProfile(profileType: ProfileType): void {
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, profileType };
      this.notifyListeners();
    }
  }
}

export const userService = new UserService();
