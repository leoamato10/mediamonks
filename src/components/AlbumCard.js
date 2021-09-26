import React from "react";
import {
  Box,
  Pressable,
  Image,
  AspectRatio,
  Center,
  Stack,
  Heading,
} from "native-base";

const AlbumCard = ({ item, URL, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("DETAIL", { item });
      }}
      style={{
        paddingVertical: 7,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {({ isPressed }) => {
        return (
          <Box
            rounded="lg"
            overflow="hidden"
            width="95%"
            shadow={1}
            bg={"gray.50"}
            bg={isPressed ? "gray.200" : "gray.50"}
          >
            <Box>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="black"
                _text={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "md",
                }}
                position="absolute"
                bottom={0}
                px="4"
                py="1.5"
              >
                {item.id}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" isTruncated>
                  Album: {item.title}
                </Heading>
              </Stack>
            </Stack>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default AlbumCard;
