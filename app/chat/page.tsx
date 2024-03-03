'use client';
 
import { useChat } from 'ai/react';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
 
export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <form action="" onSubmit={handleSubmit}>
        <div>
        <Input id='question' className="w-full min-h-[100px]" placeholder="Type your question here" value={input} onChange={handleInputChange}  />
        </div>
        <div className="flex items-center justify-center pt-5">
            <Button type='submit' aria-label="Ask a question" className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" size="lg">
                <span className="relative  px-96 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ask AI
                </span>
            </Button>
        </div>
        </form>
        <ul>
            {messages.map((m, index) => (
            <li key={index} className='text-gray-500 dark:text-gray-300'>
                {m.role === 'user' ? 'User: ' : 'AI: '}
                {m.content}
            </li>
            ))}
        </ul>
  </main>
  );
}