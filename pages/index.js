import Head from 'next/head';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='dark'>
      <div className='flex flex-col items-center justify-center min-h-screen py-2 dark:bg-black'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
            <a
              href='https://nextjs.org/docs'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Dark Mode &rarr;</h3>
              <p className='mt-4 text-xl'>Click to toggle dark mode</p>
            </a>

            <img
              className='w-14 h-14'
              src={theme === 'light' ? 'dark.svg' : 'light.svg'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              toggle
            </button>
          </div>
        </main>

        <footer className='flex items-center justify-center w-full h-24 border-t'>
          <a
            className='flex items-center justify-center'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
          </a>
        </footer>
      </div>
    </div>
  );
}
