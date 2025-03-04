import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(state => state.auth);

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username }))
      setUsername('')
      setPassword('')
    } else {
      alert('Username va password kiritishingiz kerak!');
    }
  };

  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <div className="p-4 max-w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Login/Acaunt</h1>
      {isAuthenticated ? (
        <div>
          <p className="mb-4">Hush kelibsiz  {user.username}!</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >Chiqish</button>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >Kirish</button>
        </div>
      )}
    </div>
  );
};

export default Auth;