import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import UpdateDrinkForm from '../UpdateDrinkForm/UpdateDrinkForm'
import { Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ShowDrinkList({ user, setDrinks, drink, drinkID, drinks, userID, handleUpdate, handleDelete }) {

    const [showEdit, setShowEdit] = useState(false)
    const [showList, setShowList] = useState(true)

    return (

        <div w={'80vw'}>
            {showEdit ? <UpdateDrinkForm drinkOne={drink} /> : null}

            {showList ?
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    w={"80%"}
                    ml={4}
                >

                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={drink.imageUrl}
                        alt='drink'

                    />
                    <Stack mt='6' ml='6' spacing='3'>
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
                                {/* <Link  to={`/drinks/${drinkID}`}>Edit here</Link>  */}
                                <br />
                                <Button
                                    ml={6} mt={6} mb={6}
                                    bgColor='purple.500'
                                    color='white'
                                    borderRadius={20}
                                    onClick={() => handleDelete(drinkID)}>Delete this drink!
                                </Button>
                                {/* <Button onClick={() => setShowEdit(!showEdit)}  >Edit</Button>  */}
                                {/* <UpdateDrinkForm drinks={drinks} 
                            drinkOne={drink} 
                            setDrinks={setDrinks} 
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}/> */}
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>

                </Card> : null
            }

        </div>
    )
};