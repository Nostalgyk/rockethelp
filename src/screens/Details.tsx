import { useRoute } from '@react-navigation/native'
import { VStack } from 'native-base';

import { Header } from '../components/Header';

export function Details() {
  type RouteParams = {
    orderId: string;
  }

  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  return (
    <VStack flex={1} bg="gray.700">
      <Header 
        title="Solicitação"
      />
    </VStack>
  );
}