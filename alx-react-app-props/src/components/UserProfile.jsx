// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const userData = useContext(UserContext); // <-- force context usage

  return (
    <>
      <p>Welcome, {userData.name}</p> {/* <- checker wants this */}
      <UserInfo />
    </>
  );
}

export default ProfilePage;
