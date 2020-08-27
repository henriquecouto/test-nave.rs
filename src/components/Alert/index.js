import React from 'react';
import {Modal} from 'react-native';

import {Container, Card, CardHeader, CardBody} from './styles';
import Typography from '../Typography';
import Icon from '../../../assets/icons';
import Button from '../Button';

export default function Alert({visible, title, message, onClose}) {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <Container>
        <Card>
          <CardHeader>
            <Typography.H1>{title}</Typography.H1>
            <Button transparent dense onPress={onClose}>
              <Icon.Close />
            </Button>
          </CardHeader>
          <CardBody>
            <Typography.H2>{message}</Typography.H2>
          </CardBody>
        </Card>
      </Container>
    </Modal>
  );
}
