import React from 'react';
import {Modal} from 'react-native';

import {Container, Card, CardHeader, CardBody, CardFooter} from './styles';
import Typography from '../Typography';
import Icon from '../../../assets/icons';
import Button from '../Button';

export default function Alert({
  visible,
  title,
  message,
  onClose,
  onConfirm,
  showActions,
}) {
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
          {showActions && (
            <CardFooter>
              <Button
                transparent
                fullWidth
                withBorders
                flex={1}
                style={{marginRight: 6}}
                onPress={onClose}>
                Cancelar
              </Button>
              <Button
                fullWidth
                withBorders
                flex={1}
                style={{marginLeft: 6}}
                onPress={onConfirm}>
                Excluir
              </Button>
            </CardFooter>
          )}
        </Card>
      </Container>
    </Modal>
  );
}
