import React from "react";
import { FlatList, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Box,
  Pressable,
  Image,
  AspectRatio,
  Center,
  Stack,
  Button,
  Heading,
  View,
  Text,
  useToast,
} from "native-base";

import Loader from "../components/Loader";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.state);
  const toast = useToast();

  const clearFetchedData = async () => {
    try {
      await AsyncStorage.clear();
      toast.show({
        title: "Success",
        status: "success",
        description: "Storage data was successfully deleted.",
      });
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  return state.isLoading ? (
    <Loader />
  ) : (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <StatusBar />
      {state.data && (
        <FlatList
          data={state.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const URL = item.url.toString() + ".jpg";

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
          }}
        />
      )}
      <View style={{ padding: 10 }}>
        <Button onPress={() => clearFetchedData()}>Clear fetched data</Button>
      </View>
    </View>
  );
};

export default Home;
