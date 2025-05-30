import { UserProps } from "@/interfaces";

const PostCard: React.FC<UserProps> = ({id,
  name,
  username,
  email,
  phone,
  address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Username: @{username} {""} Id: {id}</h2>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <p>
          Name: {name}
        </p>
        <p>
          Email: {email}
        </p>
        <p>
          Phone: {phone}
        </p>
        <p>
          Address: {address.city}
        </p>
      </div>
    </div>
  );
};

export default PostCard;