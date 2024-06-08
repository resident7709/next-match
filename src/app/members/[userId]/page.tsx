import { notFound } from 'next/navigation';
import { CardBody, CardHeader, Divider } from '@nextui-org/react';

import { getMemberByUserId } from '@/app/actions/memberActions';

export default async function MemberDetailedPage({
  params,
}: {
  params: { userId: string };
}) {
  const member = await getMemberByUserId(params.userId);

  if (!member) return notFound();

  return (
    <>
      <CardHeader className='text-2xl font-semibold text-secondary'>
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </>
  );
}
