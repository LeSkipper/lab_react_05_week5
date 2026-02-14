import type {ReactNode} from "react";
import type {User} from './types'

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: ReactNode
}

const UserCard = ({user, isActive=true, children}: UserCardProps) => {
    return (
        <div style={{
            border:'1px solid #ccc',
            padding: '10px',
            margin: '10px',
            opacity: isActive ? 1 : 0.5
        }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <div style={{marginTop:'10px', borderTop:'1px solid #eee'}}>
                {children}

            </div>

        </div>
    )
}

export default UserCard;