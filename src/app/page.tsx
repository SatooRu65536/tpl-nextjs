'use client';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import { useCallback, useState } from 'react';
import { styled } from 'restyle';

const Center = styled('div', {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'height': '100vh',
  'fontSize': '2rem',

  '> div': {
    textAlign: 'center',
  },
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const toggleDialog = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Center>
      <div>
        <h1>Hello, Next.js!!</h1>
        <Button onClick={() => { toggleDialog(); }}>Click me!!</Button>
        <Dialog onOpenChange={setOpen} open={open} />
      </div>
    </Center>
  );
}
