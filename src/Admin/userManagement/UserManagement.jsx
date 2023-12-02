import React, { useState, useEffect } from "react";
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
  ModalFooter,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  filter,
} from "@chakra-ui/react";
import {
  EditIcon,
  Search2Icon,
  CheckIcon,
  CopyIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { AiOutlineBell } from "react-icons/ai";
import { app } from "../../Components/firebase/Firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  increment,
  getDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { format } from "timeago.js";
import MessageModal from "../MessageModal/MessageModal";
import { toast } from "react-toastify";
import { BsFilter } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import Userbar from "../../Userbar";
import NotificationModal from "../Notifications/NotificationModal";

const UserManagement = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState('');
  const [queryUser, setQueryUser] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [isUserModalOpen, setIsUserModalOpen]= useState(false)
  const [userStatus, setUserStatus] = useState('')
  const [selectedRole, setSelectedRole] = useState()

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleUserStatusClick= (status)=>{
    setUserStatus(status)
  }

  useEffect(()=>{
console.log(selectedRole)
  }, [selectedRole])


  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const openUserModal = (user)=>{
    setSelectedUser(user);
    setIsUserModalOpen(true)
    setUserStatus(null)
  }

  const db = getFirestore(app);
  const auth = getAuth(app);

  const getAllUsers = async () => {
    const userCollectionRef = collection(db, "users");

    try {
      const unsubscribe = onSnapshot(userCollectionRef, (querySnapshot) => {
        const userDocs = [];
        querySnapshot.forEach((user) => {
          const userData = user.data();
          const docId = user.id
          userDocs.push({id: docId, ...userData});
        });
        console.log(userDocs);
        setUsers(userDocs);
      });
    } catch (error) {
      console.error("Error getting users");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      // Reset the filteredUser state when the search input is empty
      setQueryUser([]);
    } else {
      const filUser = users.filter((user) => {
        if (
          user.firstName.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(newSearchTerm.toLowerCase())
        ) {
          return user;
        }
      });
      setQueryUser(filUser);
    }
  };

  const sortedUsers = users.slice().sort((a, b) => {
    // Define the order in which you want to sort the roles
    const roleOrder = ["Admin", "Sub-Admin", "Merchant", "Customer Care", "User"];
  
    const roleA = a.role || "User"; 
    const roleB = b.role || "User";
  
    // Compare the roles using the defined order
    return roleOrder.indexOf(roleA) - roleOrder.indexOf(roleB);
  });




  const handleFilter = () => {
    let filUser;
  
    // Ensure that selectedFilter has a default value
    const filterValue = selectedFilter || '';
  
    switch (filterValue) {
      case 'sub-admin':
        filUser = users.filter((user) => {
          if (user.role && user.role.toLowerCase().includes(filterValue.toLowerCase())) {
            return user;
          }
        });
        break;
  
      case 'user':
        filUser = users.filter((user) => {
          if (user.role && user.role.toLowerCase().includes(filterValue.toLowerCase())) {
            return user;
          }
        });
        break;
  
      // Add more cases as needed
  
      default:
        // Handle the default case if necessary
        break;
    }
  
    // Do something with the filtered users (e.g., update state)
    console.log(filUser);
    setFilteredUser(filUser)
    setIsFilterModalOpen(false)
  };
  

  const handleUser = async ()=>{
    try {
      console.log('Save fired...');
      console.log(selectedUser)
      if(selectedUser && selectedUser.id){
        const userDocId = selectedUser.id
        console.log('id present')
        const userDocRef = doc(db, 'users', userDocId);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        const notifications = userData.notifications || [];
        notifications.push({
          message: `You've been given given a new role : ${selectedRole}`,
          timestamp: new Date(), // Set the timestamp in your code
        });

        if(userStatus !== ''){
          await updateDoc(userDocRef, {
            status : userStatus,
            role: selectedRole,
            notifications,
            unreadNotifications: increment(1)
          })
        }else{
          await updateDoc(userDocRef, {
            role: selectedRole
          })
        }
        
        console.log('Status updated successfully');
        toast.success('Role Assigned');
        setIsUserModalOpen(false);
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    console.log(filteredUser);
  }, [filteredUser]);
  return (
    <Container
      maxWidth="4xl"
      // py="20px"
      minHeight="100vh"
      minWidth="77vw"
      bg={useColorModeValue("#F4F5F8", "#050223")}
      color={useColorModeValue("gray.900", "white")}
      position={[null, null, null, null, "absolute"]}
      left={["0", "0", "0", "22%"]}
      overFlowX={"hidden"}
    >
      <Flex
        justifyContent={"space-between"}
        direction="column"
        gap={10}
        position={[null, null, null, "relative"]}
      >
        <Card borderLeftRadius={"0px"} ml={"-1.2%"} mt={"2px"}
        bg={useColorModeValue('gray.50', "#050223")}
        color={useColorModeValue("", "white")}>
          <CardBody>
            <Flex gap={5} alignItems={"center"} justifyContent={"flex-end"}>
              <MessageModal />
              <NotificationModal />
              <Userbar />
            </Flex>
          </CardBody>
        </Card>

        <Box px={10}>
          <Heading fontFamily={"Hellix-Medium"} fontSize={"30px"}>
            Users
          </Heading>
        </Box>

        <Card bg={useColorModeValue('', '#141139')}>
          <CardBody>
            <Flex direction={"column"} gap={5}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Box>
                  <Button
                    variant={"outline"}
                    borderRadius={"full"}
                    w={['35vw', '35vw', "9vw"]}
                    color={useColorModeValue("#585858", 'white')}
                    border={"1px solid #3F3F46"}
                    _hover={{
                      bgColor: "#12067A",
                      color: "#fff",
                    }}
                    onClick={() => openFilterModal()}
                    leftIcon={<BsFilter />}
                    rightIcon={<ChevronRightIcon />}
                  >
                    Filter by
                  </Button>
                </Box>

                <Box>
                  <InputGroup b>
                    <Input
                      type="search"
                      border={"1px solid #3F3F46;"}
                      borderRadius={"full"}
                      placeholder="Search"
                      _placeholderShown={{
                        color: "#3F3F46",
                      }}
                      w={['33vw', '33vw', "12vw"]}
                      value={searchTerm}
                      onChange={handleSearchChange}
                      
                    />
                    <InputRightElement>
                      <Icon as={Search2Icon} boxSize={4} color={"#3F3F46"} />
                    </InputRightElement>
                  </InputGroup>
                </Box>
               
              </Flex>

              {/* main table */}
              <TableContainer>
                <Table size={"md"} variant={"simple"}>
                  <Thead>
                    <Tr>
                      <Th>S/N</Th>
                      <Th>Name</Th>
                      <Th>Email Address</Th>
                      <Th>Status</Th>
                      <Th>Role name</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {sortedUsers && selectedFilter === '' && searchTerm === '' &&
                      sortedUsers.map((user, index) => {
                        return (
                          <Tr key={index} >
                            <Td>
                              <Checkbox /> {index + 1}
                            </Td>
                            <Td>
                              <Flex gap={3} alignItems={"center"}>
                                <Wrap>
                                  <WrapItem>
                                    <Avatar
                                      name={`${user.firstName} ${user.lastName}`}
                                      size="sm"
                                      src={user.userDp ? user.userDp : ""}
                                    />
                                  </WrapItem>
                                </Wrap>

                                <Text>
                                  {user.firstName} {user.lastName}
                                </Text>
                              </Flex>
                            </Td>
                            <Td>{user.Email}</Td>
                            <Td>Verified</Td>
                            <Td >
                              <Text p={2} borderRadius={'md'}
                              color={'#fff'} textAlign={'center'}
                              bg={user.role === 'User'? 'orange' : 
                              user.role === 'Merchant' ? 'green' :
                              user.role === 'Admin' ? 'red' :
                              user.role === 'Sub-Admin'? 'purple' :
                               'blue.600'}>
                                 {user.role ? user.role : "User"}
                              </Text>
                             </Td>
                            <Td textAlign={"center"} onClick={()=>openUserModal(user)}>
                              <Icon
                                as={HiPencil}
                                color={"#585858"}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                        );
                      })}
                      
                      {filteredUser && 
                      filteredUser.map((user, index) => {
                        return (
                          <Tr key={index}>
                            <Td>
                              <Checkbox /> {index + 1}
                            </Td>
                            <Td>
                              <Flex gap={3} alignItems={"center"}>
                                <Wrap>
                                  <WrapItem>
                                    <Avatar
                                      name={`${user.firstName} ${user.lastName}`}
                                      size="sm"
                                      src={user.userDp ? user.userDp : ""}
                                    />
                                  </WrapItem>
                                </Wrap>

                                <Text>
                                  {user.firstName} {user.lastName}
                                </Text>
                              </Flex>
                            </Td>
                            <Td>{user.Email}</Td>
                            <Td>Verified</Td>
                            <Td >
                              <Text p={2} borderRadius={'md'}
                              color={'#fff'} textAlign={'center'}
                              bg={user.role === 'User'? 'orange' : 
                              user.role === 'Merchant' ? 'green' :
                              user.role === 'Admin' ? 'red' :
                              user.role === 'Sub-Admin'? 'purple' :
                               'blue.600'}>
                                 {user.role ? user.role : "User"}
                              </Text>
                             </Td>
                            <Td textAlign={"center"} onClick={openUserModal}>
                              <Icon
                                as={HiPencil}
                                color={"#585858"}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                        );
                      })}
                      
                      {queryUser.length > 0 && searchTerm !== "" &&
                      queryUser.map((user, index) => {
                        return (
                          <Tr key={index}>
                            <Td>
                              <Checkbox /> {index + 1}
                            </Td>
                            <Td>
                              <Flex gap={3} alignItems={"center"}>
                                <Wrap>
                                  <WrapItem>
                                    <Avatar
                                      name={`${user.firstName} ${user.lastName}`}
                                      size="sm"
                                      src={user.userDp ? user.userDp : ""}
                                    />
                                  </WrapItem>
                                </Wrap>

                                <Text>
                                  {user.firstName} {user.lastName}
                                </Text>
                              </Flex>
                            </Td>
                            <Td>{user.Email}</Td>
                            <Td>Verified</Td>
                            <Td >
                              <Text p={2} borderRadius={'md'}
                              color={'#fff'} textAlign={'center'}
                              bg={user.role === 'User'? 'orange' : 
                              user.role === 'Merchant' ? 'green' :
                              user.role === 'Admin' ? 'red' :
                              user.role === 'Sub-Admin'? 'purple' :
                               'blue.600'}>
                                 {user.role ? user.role : "User"}
                              </Text>
                             </Td>
                            <Td textAlign={"center"} onClick={openUserModal}>
                              <Icon
                                as={HiPencil}
                                color={"#585858"}
                                boxSize={6}
                              />
                            </Td>
                          </Tr>
                        );
                      })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </CardBody>
        </Card>

        <Modal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          
        >
          <ModalOverlay />
          <ModalContent bg={useColorModeValue("", "#050223")}>
            <ModalHeader borderBottom={"1px solid #999FAA"}>
              Filter by
            </ModalHeader>
            <ModalCloseButton
              bg={"#fff"}
              color={"#000 "}
              boxShadow={"md"}
              rounded={"full"}
            />
            <ModalBody>
              <Flex direction={"column"} gap={4}>
                <Text
                  p={2}
                  bgColor={useColorModeValue(selectedFilter === 'alphabetical order' ?  "#12067A": '#fff',
                  selectedFilter === 'alphabetical order' ?  "#12067A": "#050223" )}
                  color={useColorModeValue(selectedFilter === 'alphabetical order' ? "#fff" : '#000',
                  selectedFilter === 'alphabetical order' ? "#fff" : "fff" )}
                  cursor={"pointer"}
                  onClick={()=>handleFilterClick('alphabetical order')}
                  borderRadius={'md'}
                >
                  Alphabetical order
                </Text>
                <Text
                  p={2}
                  bgColor={useColorModeValue(selectedFilter === 'verification status' ?  "#12067A": '#fff',
                  selectedFilter === 'verification status' ?  "#12067A": "#050223" )}
                  color={useColorModeValue(selectedFilter === 'verification status' ? "#fff" : '#000',
                  selectedFilter === 'verification status' ? "#fff" : "fff" )}
                  cursor={"pointer"}
                  onClick={()=>handleFilterClick('verification status')}
                  borderRadius={'md'}
                >
                  Verification status
                </Text>
                <Text
                  p={2}
                  bgColor={useColorModeValue(selectedFilter === 'sub-admin' ?  "#12067A": '#fff',
                  selectedFilter === 'sub-admin' ?  "#12067A": "#050223" )}
                  color={useColorModeValue(selectedFilter === 'sub-admin' ? "#fff" : '#000',
                  selectedFilter === 'sub-admin' ? "#fff" : "fff" )}
                  cursor={"pointer"}
                  onClick={()=>handleFilterClick('sub-admin')}
                  borderRadius={'md'}
                 
                >
                  Admin
                </Text>
                <Text
                  p={2}
                  bgColor={useColorModeValue(selectedFilter === 'merchant' ?  "#12067A": '#fff',
                  selectedFilter === 'merchant' ?  "#12067A": "#050223" )}
                  color={useColorModeValue(selectedFilter === 'merchant' ? "#fff" : '#000',
                  selectedFilter === 'merchant' ? "#fff" : "fff" )}
                  cursor={"pointer"}
                  onClick={()=>handleFilterClick('user')}
                  borderRadius={'md'}
                >
                  Merchant
                </Text>
                <Text
                  p={2}
                  bgColor={useColorModeValue(selectedFilter === 'customer service' ?  "#12067A": '#fff',
                  selectedFilter === 'customer service' ?  "#12067A": "#050223" )}
                  color={useColorModeValue(selectedFilter === 'customer service' ? "#fff" : '#000',
                  selectedFilter === 'customer service' ? "#fff" : "fff" )}
                  cursor={"pointer"}
                  borderRadius={'md'}
                  onClick={()=>handleFilterClick('customer service')}
                >
                  Customer Service
                </Text>

                <Flex
                  justifyContent={"center"}
                  p={5}
                  gap={10}
                  alignItems={"center"}
                >
                  <Button
                    color={useColorModeValue("#12067A", "fff")}
                    bg="transparent"
                    border={useColorModeValue("2px solid #12067A", "2px solid #D92D20")}
                    w={['25vw', '25vw', "12vw"]}
                    h={"7vh"}
                    borderRadius={"2xl"}
                    _hover={{
                      bgColor: "#D92D20",
                      border: "none",
                      color: "#fff",
                    }}
                    onClick={() => setIsFilterModalOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    bgColor={"#12067A"}
                    color={"#FFFFFF"}
                    w={['25vw', '25vw', "12vw"]}
                    h={"7vh"}
                    borderRadius={"2xl"}
                    _hover={{
                      bgColor: "#1D7B1D",
                    }}
                    mr={3}
                    onClick={handleFilter}
                  >
                    Save
                  </Button>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>


        <Modal
          isOpen={isUserModalOpen}
          onClose={() => setIsUserModalOpen(false)}
        >
          <ModalOverlay />
          <ModalContent bg={ useColorModeValue("white", "#141139")}>
            <ModalHeader borderBottom={"1px solid #999FAA"}>
              Edit Users
            </ModalHeader>
            <ModalCloseButton
              bg={"#fff"}
              color={"#000 "}
              boxShadow={"md"}
              rounded={"full"}
            />
            <ModalBody>
                {selectedUser && (
                  <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Flex gap={5}>
                          <Text>Change User Status</Text>
                        </Flex>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    <Flex direction={"column"} gap={4}>
                    <Text
                  p={2}
                  bgColor={userStatus === 'active' ?  "#12067A": '#fff' }
                  color={userStatus === 'active' ? "#fff" : '#000'}
                  cursor={"pointer"}
                  onClick={()=>handleUserStatusClick('active')}
                  borderRadius={'md'}
                >
                  Active
                </Text>
                <Text
                  p={2}
                  bgColor={userStatus === 'suspended' ?  "#12067A": '#fff' }
                  color={userStatus === 'suspended' ? "#fff" : '#000'}
                  cursor={"pointer"}
                  onClick={()=>handleUserStatusClick('suspended')}
                  borderRadius={'md'}
                >
                  Suspend
                </Text>
                      </Flex>
                    
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Flex gap={5}>
                          <Text>Assign Role</Text>
                        </Flex>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                    <Flex direction={"column"} gap={4}>
                      <RadioGroup value={selectedRole}
                        onChange={setSelectedRole}>
                         
                        <Stack direction={'column'}>
                      <Radio value="Admin">Administrator</Radio>
                      <Radio value="Sub-Admin">Sub-Admin</Radio>
                      <Radio value="Customer Care">Customer Care</Radio>
                      <Radio value="Crypto Merchant"> Crypto Merchant</Radio>
                      <Radio value="User">User</Radio>
                      </Stack>
                      </RadioGroup>
                      </Flex>
                    
                    </AccordionPanel>
                  </AccordionItem>
                  </Accordion>
                )}
               
                
                <Flex
                  justifyContent={"center"}
                  p={5}
                  gap={10}
                  alignItems={"center"}
                >
                  <Button
                      color={useColorModeValue("#12067A", "fff")}
                      bg="transparent"
                      border={useColorModeValue("2px solid #12067A", "2px solid #D92D20")}
                      w={['25vw', '25vw', "12vw"]}
                    h={"7vh"}
                    borderRadius={"2xl"}
                    _hover={{
                      bgColor: "#D92D20",
                      border: "none",
                      color: "#fff",
                    }}
                    onClick={() => setIsUserModalOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    bgColor={"#12067A"}
                    color={"#FFFFFF"}
                    w={['25vw', '25vw', "12vw"]}
                    h={"7vh"}
                    borderRadius={"2xl"}
                    _hover={{
                      bgColor: "#1D7B1D",
                    }}
                    mr={3}
                    onClick={handleUser}
                  >
                    Save
                  </Button>
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>


      </Flex>
    </Container>
  );
};

export default UserManagement;
