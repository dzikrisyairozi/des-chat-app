import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { auth, db } from '@/lib/firebase/config'; // Adjust the import path

interface User {
  id: string;
  name: string;
  email: string;
}

const PrivateChatPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCol = collection(db, 'users');
      const userSnapshot = await getDocs(usersCol);
      const userList: User[] = userSnapshot.docs
        .map((doc) => {
          const userData = doc.data() as Omit<User, 'id'>; // Exclude 'id' from userData type
          return { id: doc.id, ...userData };
        })
        .filter((user) => user.id !== auth.currentUser?.uid); // Exclude the current user

      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId: string) => {
    router.push(`/private-chat/${userId}`);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Select a User to Chat With</h1>
      <div className='space-y-3'>
        {users.map((user) => (
          <div
            key={user.id}
            className='flex cursor-pointer items-center justify-between p-3 hover:bg-gray-100'
            onClick={() => handleUserClick(user.id)}
          >
            <span className='font-medium'>{user.name}</span>
            <span className='text-sm text-gray-500'>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateChatPage;
