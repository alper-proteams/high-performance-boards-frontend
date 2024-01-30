'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './boardCard.module.css';
import Button from '@/app/components/button';

export default function BoardCard({
  phase = 'available',
  order = 1,
  title,
  description,
}) {
  const router = useRouter();
  const handleBtn = () => {
    if (phase === 'available') {
      router.push(`/board/module${order}`);
    }
  };
  return (
    <div className={`${styles[phase]} ${styles['phase']}`}>
      {phase == 'completed' ? (
        <Image
          src="/images/icons/skill-icon-black.svg"
          alt="skill-icon"
          width={48}
          height={48}
        />
      ) : (
        <div
          className={`${styles['phase-number']} rounded-full h-12 w-12 flex items-center justify-center`}
        >
          {order}
        </div>
      )}

      <div className={`${styles['phase-header']} h5-bold`}>{title}</div>
      <div className="phase-desc">{description}</div>
      <Button
        className={`${styles['phase-action']}`}
        onClick={handleBtn}
        disabled={phase === 'pending'}
      >
        {phase === 'available'
          ? 'Start'
          : phase === 'completed'
          ? 'Completed'
          : 'Pending'}
      </Button>
    </div>
  );
}
