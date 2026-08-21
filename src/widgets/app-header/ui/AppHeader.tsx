import { Button } from '@/shared/ui/button';

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b py-4 px-8">
      <span className="text-2xl font-bold text-indigo-500">VocabGym</span>
      <Button className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-700">Log In</Button>
    </header>
  );
}
