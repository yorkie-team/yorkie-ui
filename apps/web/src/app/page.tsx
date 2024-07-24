'use client';

import { Button } from '@yorkie-ui/components';

export default function Home() {
  return (
    <div>
      <h2>Hello 🐼!</h2>
      <Button
        variant="outline"
        size="lg"
        colorPalette="gray"
        onClick={() => {
          window.document.documentElement.classList.toggle('dark');
        }}
      >
        Click!
      </Button>
    </div>
  );
}
