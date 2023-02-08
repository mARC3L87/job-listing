import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { change, selectName } from '../features/changeNameSlice';

const UserId = () => {
  const name = useAppSelector(selectName);
  console.log(name);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => dispatch(change())}>Change Name</button>
    </div>
  );
};

export default UserId;
