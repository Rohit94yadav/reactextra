//Complete the custom Input component based on the props that it expects to receive
import { Button } from '@chakra-ui/react'
export const Buttons = (props) => {
  return <Button   size={props.size} colorScheme={props.colorScheme} variant='solid' >
    Button
  </Button>
};
Buttons.defaultProps={
  colorScheme:"white",
  size:"md"
}