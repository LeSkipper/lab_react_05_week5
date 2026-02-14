import React, { useState } from 'react';
import type { User } from './types';

const SearchApp = () => {
  const [users] = useState<User[]>([
    { name: "Alice", email: "alice@mail.com", age: 25 },
    { name: "Bob", email: "bob@mail.com", age: 30 },
  ]);
  const [filtered, setFiltered] = useState<User[]>(users);
  const [term, setTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    setFiltered(users.filter(u => u.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTerm("");
    setFiltered(users);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input type="text" value={term} onChange={handleSearch} placeholder="Search..." />
      <button onClick={handleClear}>Clear</button>

      <ul>
        {filtered.map((user) => (
          <li key={user.email}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchApp;