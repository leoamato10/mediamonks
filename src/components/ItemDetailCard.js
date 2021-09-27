import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  Stack,
  View,
} from "native-base";

const ItemDetailCard = ({ item }) => {
  const URL = item.url + ".png";
  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
      }}
    >
      <Box rounded="lg" overflow="hidden" width="95%" shadow={1} bg={"gray.50"}>
        <Box>
          <AspectRatio ratio={16 / 9}>
            <Image
              source={{
                uri: URL,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="black"
            _text={{ color: "white", fontWeight: "700", fontSize: "md" }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          >
            {item.id}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              ALBUM DETAIL
            </Heading>
            <Text
              fontSize="xs"
              _light={{ color: "gray.500" }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Image URL: {item.thumbnailUrl}
            </Text>
          </Stack>
          <Text fontWeight="400">{item.title}</Text>
          <Text fontWeight="400">{item.title}</Text>
          <Text fontWeight="400">{item.title}</Text>
        </Stack>
      </Box>
    </View>
  );
};

export default ItemDetailCard;
