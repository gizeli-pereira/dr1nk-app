import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'

export default function ShowDrinkList({ drinks, userID, handleDelete, handleUpdate }) {
    return (
        <div w={'80vw'}>
            <Text fontSize='2xl' my='4' mx='6'>Drink List</Text>

            <Box mx='4' overflow='hidden' w={'80%'}>
                {drinks.map((drink, i) => {
                    return (
                        <Card key={i}
                             direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                w={"80%"}
                            >
                                
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={drink.imageUrl}
                                    alt='drink'
                                />
                                <Stack mt='6' spacing='3'>
                                    <CardBody w={'100%'}>
                                    <Heading size='md'>{drink.name}</Heading>
                                    <Text>
                                       Ingredients: {drink.ingredients}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        Instructions: {drink.instructions}
                                    </Text>
                                    <Text>
                                        You can find it here: {drink.location}
                                    </Text>
                                    </CardBody>
                                
                                
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'
                                        onClick={handleUpdate}
                                        >
                                            Edit
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'
                                        onClick={handleDelete}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Stack>

                        </Card>

                    )
                })}
            </Box>
        </div>
    )
};