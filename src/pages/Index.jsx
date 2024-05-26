import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement the search functionality here
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding="1.5rem">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing="24px">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <InputGroup maxW="300px" ml="4">
            <Input
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding="2rem" textAlign="center">
        <Heading size="xl" mb="4">Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb="4">Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" mt="8">
        <Heading size="lg" mb="6">Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 1" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    New
                  </Text>
                </Box>
                <Heading size="md" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  Product 1
                </Heading>
                <Text mt="2">$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 2" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    New
                  </Text>
                </Box>
                <Heading size="md" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  Product 2
                </Heading>
                <Text mt="2">$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 3" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    New
                  </Text>
                </Box>
                <Heading size="md" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  Product 3
                </Heading>
                <Text mt="2">$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 4" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    New
                  </Text>
                </Box>
                <Heading size="md" mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  Product 4
                </Heading>
                <Text mt="2">$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" mt="8" py="4">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing="24px">
              <Link href="https://facebook.com" isExternal>
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram />
              </Link>
            </HStack>
          </Flex>
          <Flex justify="space-between" mt="4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;