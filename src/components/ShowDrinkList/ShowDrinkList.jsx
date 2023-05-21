import { Box, Stack, Text } from '@chakra-ui/react'

export default function ShowDrinkList({ drinks, userID }) {
   return (
    <div>
        <Text fontSize='2xl' my='4' mx='6'>Drink List</Text>

        <Box maxW='sm' borderWidth='1px' mx='4' borderRadius='lg'overflow='hidden'>
        {drinks.map((drink, i) => {
            return (
                <Box key={i}>
                <div>
                    <Box 
                        display='flex' 
                        alignItems='center'
                        p='5'
                    >
                    <Text 
                        color='red.600'
                        mr='6'
                        fontSize='2xl'
                    >{drink.name}</Text>
                    <Text
                        fontSize='sm'
                        as='b'
                    >{drink.ingredients}</Text>
                    <Text m='4'>{drink.instructions}</Text>
                    <Text m='4' >{drink.imageUrl}</Text>
                    <Text m='4' >{drink.location}</Text>


                    </Box>
                </div>
                </Box>
                
            )
        })}
      </Box>
    </div>
   )
};