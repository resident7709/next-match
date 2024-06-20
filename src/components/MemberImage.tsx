'use client';

import { Image } from '@nextui-org/react';
import { CldImage } from 'next-cloudinary';

import { Photo } from '@prisma/client';

type Props = { photo: Photo | null };

export default function MemberImage({ photo }: Props) {
  return (
    <div>
      {photo?.publicId ? (
        <CldImage
          src={photo.publicId}
          width={300}
          height={300}
          crop='fill'
          gravity='faces'
          className='rounded-2xl'
          alt='Image of member'
          priority
        />
      ) : (
        <Image
          width={220}
          height={220}
          src={photo?.url || '/images/user.png'}
          alt='Image of user'
        />
      )}
    </div>
  );
}
