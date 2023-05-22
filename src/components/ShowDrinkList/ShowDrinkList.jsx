import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import UpdateDrink from '../UpdateDrink/UpdateDrink'
import { Routes, Route , useParams} from 'react-router-dom';
import { useState } from 'react';

export default function ShowDrinkList({ user,  setDrinks, drink, drinks, userID, handleUpdate, handleDelete }) {

    const [showEdit, setShowEdit] = useState(false)
    const [showList, setShowList] = useState(true)
    
   

    return (
        <div w={'80vw'}>
            { showEdit ? <UpdateDrink drinkOne={drink} /> : null }

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
                            <Link  to="/drinks/:id">Edit here</Link> 
                            {/* <Button onClick={() => setShowEdit(!showEdit)}  >Edit</Button>  */}
                            <UpdateDrink drinks={drinks} 
                            drinkOne={drink} 
                            setDrinks={setDrinks} 
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}/>
                        </ButtonGroup>
                    </CardFooter>
                </Stack>

            </Card> : null
         }

        </div>
    )
};