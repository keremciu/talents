import { memo } from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';
import Text, { TextLight } from 'components/Text';
import LinkButton from 'components/LinkButton';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import { TEXTS } from '../People.texts';

const StyledIconUser = styled(IconUser)`
  margin-right: 6px;
  height: 20px;
  fill: var(--colors-blank);
`;

export const countWithPluralAddon = (arraySize, text) =>
  `${arraySize} ${text}${arraySize === 1 ? '' : 's'}`;

function PeopleHeader({ peopleCount = 0 }) {
  return (
    <Flex $pb={32} $alignItems="center" $justifyContent="space-between">
      <Text size="h2" as="h2">
        {TEXTS.title}
        {peopleCount ? (
          <TextLight size="bodySmall" $pl={8}>
            {countWithPluralAddon(peopleCount, 'member')}
          </TextLight>
        ) : null}
      </Text>
      <LinkButton to="/people/new" tabIndex={0}>
        <StyledIconUser />
        {TEXTS.addMember}
      </LinkButton>
    </Flex>
  );
}

export default memo(PeopleHeader);
