import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="p-6 bg-red ">
      <h2>{user.name}</h2>      
      <p>@{user.username}</p> 
    </div>
  );
};

export default UserCard;