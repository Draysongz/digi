import React, { useState, useEffect } from 'react'
import {
  Container,
  Flex,
  Card,
  CardBody,
  Box,
  Text,
  RadioGroup,
  Radio,
  Heading,
  Button,
  useColorModeValue,
  Table,
  Th,
  Td,
  TableContainer,
  HStack,
  Tr,
  Tbody,
  Thead,
  Image,
  Link,
  Icon,
  Wrap,
  WrapItem,
  Avatar,
  Modal,
  Circle,
  ModalHeader,
  ModalBody,
  ModalContent,
  Stack,
  ModalOverlay,
  ModalCloseButton,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, EditIcon, Search2Icon,CheckIcon,   CopyIcon, } from '@chakra-ui/icons'
import { AiOutlineBell } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import { app } from '../../Components/firebase/Firebase';
import { getFirestore, collection, onSnapshot, orderBy, query, where, getDocs, updateDoc, doc, getDoc, increment } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { format } from 'timeago.js';
import MessageModal from '../MessageModal/MessageModal';
import {toast} from 'react-toastify'
import Userbar from '../../Userbar';
import NotificationModal from '../Notifications/NotificationModal';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10; // Number of transactions per page
  const [currentUserId, setCurrentUserId] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedStates, setCopiedStates] = useState({});
  const [selectedStatus, setSelectedStatus] = useState();
  const [reason, setReason]= useState('')






  useEffect(()=>{
    console.log(selectedStatus)
  }, [selectedStatus])
  
  

  


  const auth = getAuth(app); // Replace 'app' with your Firebase app instance if necessary

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // The user is signed in. Get the user's ID.
      setCurrentUserId(user.uid);
      console.log(user.uid)
    } else {
      // The user is signed out. Handle this case if needed.
      setCurrentUserId(null);
    }
  });

  // Unsubscribe from authentication state changes when the component unmounts.
  return () => unsubscribe();
}, []);


const handleSaveStatus = async () => {
  try {
    console.log('Save fired...');
    if (selectedTransaction && selectedTransaction.id) {
      const transactionId = selectedTransaction.id;
      console.log('id present')

      const transactionRef = doc(db, 'transactions', transactionId);
      const userDocRef = doc(db, 'users', selectedTransaction.userId);
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data();
      const notifications = userData.notifications || [];
      notifications.push({
        message: `Your transaction has been marked ${selectedStatus}`,
        timestamp: new Date(), // Set the timestamp in your code
      });

      if(selectedStatus === 'Declined'){
        await updateDoc(transactionRef, {
          status: selectedStatus,
          completedBy: currentUserId,
          Reason: reason,
        });
        await updateDoc(userDocRef, {
          notifications,
          unreadNotifications: increment(1)
        })
      }else{
        await updateDoc(transactionRef, {
          status: selectedStatus,
          completedBy: currentUserId,
        });
      }
     

      console.log('Status updated successfully');
      toast.success('Transaction updated');
      setIsModalOpen(false);
    }
  } catch (error) {
    console.error('Error updating status:', error);
    toast.error(error);
  }
};







  const db = getFirestore(app)
  async function fetchAssignedTransactions() {
    try {
      if (currentUserId) {
        const transactionsRef = collection(db, 'transactions');
        const q = query(
          transactionsRef,
          where('assignedTo', '==', currentUserId), // Use '==' for equality check
          orderBy('time', 'desc')
        );
  
        onSnapshot(q, (querySnapshot) => {
          const transactionsData = [];
  
          querySnapshot.forEach((doc) => {
            const transactionData = doc.data();
            const transactionId = doc.id; // Access the document ID
            transactionsData.push({ id: transactionId, ...transactionData });
          });
  
          setTransactions(transactionsData);
        });
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  }
  
  
  
  const openTransactionModal = (transaction)=>{
    setSelectedTransaction(transaction)
    setIsModalOpen(true)
    setCopiedStates(false)
    console.log(selectedTransaction)
    setSelectedStatus(null)
  }

  const copyToClipboard = async (text, section) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prevState) => ({
        ...prevState,
        [section]: true, // Update the corresponding section's 'copied' state to true
      }));
      console.log('Copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };
  
  

  useEffect(() => {
    fetchAssignedTransactions()
  }, [currentUserId])

  const totalPage = Math.ceil(transactions.length / transactionsPerPage);
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = currentPage * transactionsPerPage;

  const displayedTransactions = transactions.slice(startIndex, endIndex);
  console.log(displayedTransactions)

  useEffect(() => {
    console.log(transactions)
  }, [transactions])

  return (
    <Container
      maxWidth="4xl"
      // py="20px"
      minHeight="100vh"
      minWidth="77vw"
      bg={useColorModeValue("#F4F5F8", "#050223")}
      color={useColorModeValue("gray.900", "white")}
      position={[null, null, null, null, 'absolute']}
      left={['0', '0', '0', "22%"]}
      overFlowX={'hidden'}
    >
      <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>
        <Card borderLeftRadius={'0px'}
          ml={'-1.2%'} mt={'2px'} bg={useColorModeValue('gray.50', "#050223")}>
          <CardBody>
            <Flex gap={5} alignItems={'center'} justifyContent={'flex-end'}>
              <MessageModal />
              <NotificationModal/>
              <Userbar />

            </Flex>
          </CardBody>
        </Card>

        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
          <Box>
            <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Transactions</Heading>
            <Text fontFamily={'Hellix-Medium'} color={'#71717A'}>Most Recent transanctions</Text>
          </Box>
        </Flex>


        <Flex direction={'column'}>
          <Card bg={ useColorModeValue("white", "#141139")}>
            <CardBody>
              <TableContainer >
                <Table variant={'simple'} size={'md'} >
                  <Thead bg={useColorModeValue("black", "#0B0449")}>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Amount</Th>
                      <Th>Transaction hash</Th>
                      <Th>Time</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>

                  <Tbody bg={useColorModeValue("white", "#141139")}>
                    {displayedTransactions.map((transaction, index) => {
                      return (
                        <Tr key={index}  onClick={() => openTransactionModal(transaction)}>
                          <Td color={'#71717A'}>{transaction.transactionType === 'sell' || transaction.transactionType === 'buy' ? 'Crypto' : ''}</Td>
                          <Td color={'#71717A'}>{parseFloat(transaction.coinUnit).toFixed(3)} {transaction.cryptoSymbol}</Td>
                          <Td color={'#71717A'}>
                            {transaction.transactionHash ? (
                              <a href={transaction.transactionHash} target="_blank" rel="noopener noreferrer">{transaction.transactionHash.slice(0, 30)}</a>
                            ) : transaction.Imageproof ? (
                              <a href={transaction.Imageproof} target="_blank" rel="noopener noreferrer">{`${transaction.Imageproof.slice(0, 20)}....`}</a>
                            ) : transaction.paymentProof ? (
                              <a href={transaction.paymentProof} target="_blank" rel="noopener noreferrer">{`${transaction.paymentProof.slice(0, 20)}....`}</a>
                            ) : (
                              'N/A'
                            )}
                          </Td >
                          <Td color={'#71717A'}>{transaction.time && format(transaction.time.toMillis())}</Td>
                          <Td p={5}>
                            <HStack justifyContent={'center'} p={1} borderRadius={'2xl'} bg={transaction.status === 'processing' ? '#FEF9C3' :
                              transaction.status === 'successful' ? '#DCFCE7' : '#FEE2E2'} alignItems={'center'}>
                              <Circle size={'10px'} bg={transaction.status === 'processing' ? '#FACC15' :
                                transaction.status === 'successful' ? '#22C55E' : '#EF4444'}></Circle>
                              <Text fontFamily={'Hellix-medium'} color={transaction.status === 'processing' ? '#713F12' :
                                transaction.status === 'successful' ? '#14532D' : '#7F1D1D'}>{transaction.status}</Text>
                            </HStack></Td>
                          <Td cursor={'pointer'}><Icon color={'#A1A1AA'} as={FiMoreHorizontal} boxSize={6} /></Td>
                        </Tr>
                      );
                    })}

                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Card>
          {/* Pagination controls */}
          <Flex p={7} justifyContent={'space-between'}>

            <Box>
              <Text>Showing {currentPage} out of {totalPage} entries</Text>
            </Box>

            <Flex alignItems={'center'} gap={10} px={10}>
              <Text onClick={() => currentPage === 1 ? null : setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
                style={{
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  backgroundColor: currentPage === 1 ? 'initial' : currentPage === currentPage - 1 ? '#1808A3' : 'initial',
                  color: currentPage === 1 ? 'initial' : currentPage === currentPage - 1 ? 'white' : 'initial',
                }}>Previous</Text>

              <Flex gap={10}>
                {Array.from({ length: totalPage }, (_, i) => (
                  <Button
                    fontFamily={'Hellix-medium'}
                    key={i}
                    variant={currentPage === i + 1 ? 'solid' : 'outline'}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      backgroundColor: currentPage === i + 1 ? '#1808A3' : 'initial',
                      color: currentPage === i + 1 ? 'white' : 'initial',
                    }}
                  >
                    {i + 1}
                  </Button>
                ))}
              </Flex>
              <Text onClick={() => currentPage === totalPage ? null : setCurrentPage(currentPage + 1)}
                style={{
                  cursor: currentPage === totalPage ? 'not-allowed' : 'pointer',
                  backgroundColor: currentPage === totalPage ? 'initial' : currentPage === currentPage + 1 ? '#1808A3' : 'initial',
                  color: currentPage === totalPage ? 'initial' : currentPage === currentPage + 1 ? 'white' : 'initial',
                }}>
                Next
              </Text>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
         {/* Transaction Details Modal */}
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Transaction Details</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      {selectedTransaction && (
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Flex gap={5}>
                  <Text>Transaction Type:</Text>
                 <Text w={'4vw'} borderRadius={'md'} textAlign={'center'}
                 p={1} fontSize={'md'} color={'white'} bgColor={selectedTransaction.transactionType === 'buy' ? 'green.300' : 'red.500'}> {selectedTransaction.transactionType}</Text>
                </Flex>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex gap={10} alignItems={'center'}>
              <Text>Amount: {selectedTransaction.amount}</Text>
              
              {copiedStates['amount'] ? (
  <Icon as={CheckIcon} color={'green.500'} />
) : (
  <CopyIcon
    ml={2}
    onClick={() => copyToClipboard(selectedTransaction.amount, 'amount')}
    style={{ cursor: 'pointer' }}
  />
)}
              </Flex>
             
              <Flex gap={10} alignItems={'center'}>
              <Text>
                Coin Amount: {parseFloat(selectedTransaction.coinUnit).toFixed(8)}{' '}
                {selectedTransaction.cryptoSymbol}
              </Text>

              {copiedStates['coinUnit'] ? (
  <Icon as={CheckIcon} color={'green.500'} />
) : (
  <CopyIcon
    ml={2}
    onClick={() => copyToClipboard(parseFloat(selectedTransaction.coinUnit).toFixed(8), 'coinUnit')}
    style={{ cursor: 'pointer' }}
  />
)}
              </Flex>
            
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Proof/Transaction Hash
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {selectedTransaction.transactionHash ? (
                <Text>
                  Transaction Hash: 
                  <Link
                    href={selectedTransaction.transactionHash}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedTransaction.transactionHash.slice(0, 30)}
                  </Link>
                </Text>
              ) : selectedTransaction.Imageproof ? (
                <div>
                  <Text>Image Proof:</Text>
                  <Image
                    src={selectedTransaction.Imageproof}
                    alt="Image Proof"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ) : selectedTransaction.paymentProof ? (
                <div>
                  <Text>Payment Proof:</Text>
                  <Image
                    src={selectedTransaction.paymentProof}
                    alt="Payment Proof"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ) : (
                <Text>'N/A'</Text>
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Customer&apos;s Receiving Details
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {selectedTransaction.transactionType === 'buy' ? (
                <Box>
                  
                <Flex gap={10} alignItems={'center'}>
                  <Text>Wallet Address: {selectedTransaction.walletAddress}</Text>
                  {copiedStates['walletAddress'] ? (
  <Icon as={CheckIcon} color={'green.500'} />
) : (
  <CopyIcon
    ml={2}
    onClick={() => copyToClipboard(selectedTransaction.walletAddress, 'walletAddress')}
    style={{ cursor: 'pointer' }}
  />
)}

           </Flex>
           </Box>
              
              ) : selectedTransaction.transactionType === 'sell' ? (
                <div>
                  <Text>Bank Account Details:</Text>
                  <Flex gap={10} alignItems={'center'}>
                  <Text>Account Number: {selectedTransaction.details.accountNumber} </Text>
                  {copiedStates['accountNumber'] ? (
  <Icon as={CheckIcon} color={'green.500'} />
) : (
  <CopyIcon
    ml={2}
    onClick={() => copyToClipboard(selectedTransaction.details.accountNumber, 'accountNumber')}
    style={{ cursor: 'pointer' }}
  />
)}
                  </Flex>
                 
                     
          
                  <Text>Account Name: {selectedTransaction.details.accountName}</Text>
                  <Text>Bank Name: {selectedTransaction.details.bankName}</Text>
                </div>
              ) : (
                <Text>'N/A'</Text>
              )}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Time and User ID
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>Time: {selectedTransaction.time && new Date(selectedTransaction.time.seconds * 1000 + selectedTransaction.time.nanoseconds / 1000000).toLocaleString()}</Text>
              <Flex gap={10} alignItems={'center'}>
              <Text>User ID: {selectedTransaction && selectedTransaction.userId && selectedTransaction.userId.slice(0, 12)}....</Text>

              {copiedStates['userId'] ? (
  <Icon as={CheckIcon} color={'green.500'} />
) : (
  <CopyIcon
    ml={2}
    onClick={() => copyToClipboard(selectedTransaction.userId, 'userId')}
    style={{ cursor: 'pointer' }}
  />
)}
              </Flex>
             
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
  <AccordionButton>
    <Box flex="1" textAlign="left">
      Update Transaction Status:
    </Box>
    <AccordionIcon />
  </AccordionButton>
  <AccordionPanel>
    <Flex gap={5} alignItems={'center'}>
      <RadioGroup
        value={selectedStatus}
        onChange={setSelectedStatus}
      >
        <Stack direction="column">
          <Radio value="processing">Processing</Radio>
          <Radio value="successful">Successful</Radio>
          <Radio value="Declined">Declined</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  </AccordionPanel>
</AccordionItem>



{ selectedStatus === 'Declined' && <AccordionItem>
  <AccordionButton>
    <Box flex="1" textAlign="left">
      Reason For Decline:
    </Box>
    <AccordionIcon />
  </AccordionButton>
  <AccordionPanel>
    <Flex gap={5} alignItems={'center'}>
     <Input type='text' variant={'filled'} value={reason} onChange={(e)=>setReason(e.target.value)} placeholder='reason for declined status' />
    </Flex>
  </AccordionPanel>
</AccordionItem>}



        </Accordion>

        
      )}
             
    <Flex justifyContent={'center'} p={5} gap={10} alignItems={'center'}> 
    <Button 
     color={'#12067A'}
     bg='transparent'
     border={'2px solid #12067A'}
     w={'12vw'}
     h={'7vh'}
     borderRadius={'2xl'}
     _hover={{
      bgColor: '#D92D20',
      border: 'none',
      color: '#fff'
    }}
     onClick={() => setIsModalOpen(false)}>Cancel</Button>

  <Button
  bgColor={'#12067A'}
  color={'#FFFFFF'}
  w={'12vw'}
  h={'7vh'}
  borderRadius={'2xl'}
  _hover={{
    bgColor: '#1D7B1D',
  }}
    mr={3}
    onClick={()=>handleSaveStatus()}
  >
    Save
  </Button>
 
  </Flex>
    </ModalBody>


  </ModalContent>



</Modal>

    </Container>
  )
}

export default Transaction