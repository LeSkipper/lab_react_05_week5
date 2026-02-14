import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

function App() {
  // Создаем тестовые данные (строго по интерфейсу)
  const myUser: User = {
    name: "John Doe",
    email: "john@example.com",
    age: 25
  };

  const mySkills: Skill[] = [
    { id: 1, name: "React", level: "Internediate" },
    { id: 2, name: "TypeScript", level: "Beginner" },
    { id: 3, name: "HTML", level: "Expert" }
  ];

  return (
    <div>
      <h1>Lab 5.1: Typed Components</h1>
      
      <UserCard user={myUser} isActive={true}>
        <p>Status: Seeking for job</p>
        <SkillList skills={mySkills} />
      </UserCard>


      <UserCard user={{ name: "Jane", email: "jane@test.com", age: 30 }} isActive={false}>
        <p>Status: Hired</p>
      </UserCard>
    </div>
  );
}

export default App;