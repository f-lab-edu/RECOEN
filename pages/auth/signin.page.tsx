import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(providers);
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => {
          return (
            <div
              key={provider.name}
              style={{ height: '500px', display: 'flex', alignItems: 'center' }}
            >
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                버튼
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default SignIn;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
