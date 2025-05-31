import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="m-3">
      <h2>{name}</h2> 
      <p>@{username}</p>
      <p>
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </p>

      <div className="mt-5 p-5 border-b">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Contact Information:</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Website:</span>{" "}
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {website}
          </a>
        </p>
         <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default UserCard;
