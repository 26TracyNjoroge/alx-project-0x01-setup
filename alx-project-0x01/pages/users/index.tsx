import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import { UsersPageProps } from "@/interfaces";

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <h2 className="">Users</h2>
        <h2 className="">Add Users</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
            {users.map((user: UserProps) => (
              <UserCard key={user.id} user={user} /> 
            ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
export default Users;