import React from 'react';
import {View, Text, Image, Pressable, Linking} from 'react-native';

interface Props {
  route?: {
    params?: {
      article?: any;
    };
  };
}

const NewsDetailScreen: React.FC<Props> = ({route}) => {
  const {article} = route?.params ?? {};

  if (!article) {
    return (
      <View>
        <Text>Error: Article not found.</Text>
      </View>
    );
  }

  const handlePress = () => {
    // Open the article URL in the default browser
    Linking.openURL(article?.url);
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-bold mb-4 text-black">
        {article?.title}
      </Text>
      <Image source={{uri: article?.urlToImage}} className="w-full h-64 mb-4" />
      <Text className="text-gray-600 mb-4">{article?.description}</Text>
      <Pressable onPress={handlePress}>
        <Text className="text-sky-600">{article?.url}</Text>
      </Pressable>
    </View>
  );
};

export default NewsDetailScreen;
