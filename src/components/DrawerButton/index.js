import React from 'react';
import Button from '../Button';
import Icon from '../../../assets/icons';

export default function DrawerButton({action}) {
  return (
    <Button transparent dense onPress={action}>
      <Icon.Menu width={21} height={14} />
    </Button>
  );
}
