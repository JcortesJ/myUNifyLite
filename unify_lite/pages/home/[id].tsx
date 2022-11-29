import { Router, useRouter } from 'next/router'
import { useEffect } from 'react';
import { useUser } from '../../contexts/user';

const HomeId = () => {
    const router = useRouter()
  const { id } = router.query
  const { user, setUser } = useUser();

  useEffect(
    () => {
        console.log(id);
        setUser(id); 
        console.log(user);
   
        router.push('/home/home')
        
    }
  );

  return <></>
}

export default HomeId;
