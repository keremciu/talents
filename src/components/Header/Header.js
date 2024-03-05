import Text, { TextLight } from 'components/Text';

import { Inner, ProfileLink, ProfileAvatar, ProfileInfo } from './Header.styled';

export const userFake = { name: 'Edward Elkins', role: 'Admin', picUrl: null };

export default function Header() {
  return (
    <Inner>
      <ProfileLink href="#profile-page">
        <ProfileAvatar as="span" src={userFake.picUrl} />
        <ProfileInfo>
          <Text $mt={4} size="bodySmallMedium">
            {userFake.name}
          </Text>
          <TextLight $mt={4} size="bodySmall">
            {userFake.role}
          </TextLight>
        </ProfileInfo>
      </ProfileLink>
    </Inner>
  );
}
