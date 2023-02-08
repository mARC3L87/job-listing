import Link from 'next/link';
import { useRouter } from 'next/router';
const UserCard = () => {
  // const router = useRouter();
  // const id = router.query.id as string;
  // console.log(id);
  return (
    <Link href={`/:id`}>
      <div>
        <h1>Tom</h1>
        <h1>Simth</h1>
      </div>
    </Link>
  );
};

export default UserCard;
