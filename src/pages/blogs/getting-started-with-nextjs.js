import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className={styles.container}>
      <Link href="/"><a>← Back to Home</a></Link>
      <h1>Getting Started with Next.js</h1>
      <Image src="/images/nextjs-blog.png" alt="Next.js Blog" width={600} height={400} />
      <p>
        {/* Your blog content goes here */}
        Welcome to my blog on getting started with Next.js! In this post, we'll explore the basics of setting up a Next.js project, creating pages, and deploying your application.
      </p>
    </div>
  );
}
