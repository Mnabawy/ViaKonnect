import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

import {useNewsList} from '../../hooks/useNewsList';
import {useNavigation} from '@react-navigation/native';
import {Article} from '../../types/indext';

const NewsListScreen: React.FC = () => {
  const {data, isLoading, isError} = useNewsList();

  const navigation = useNavigation();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching news list</Text>;

  const onPressHandler = (article: any) => {
    navigation.navigate('Details', {
      article,
    });
  };

  const renderItem = ({item}: {item: Article}) => (
    <Pressable
      key={item?.id}
      onPress={() => onPressHandler(item)}
      className={`border border-gray-200 p-4 mb-4 rounded-lg shadow-md bg-white`}>
      <Text className={`font-bold text-black`}>{item.title}</Text>
    </Pressable>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item?.url}
      className={`p-5 bg-slate-500 py-4`}
    />
  );
};

export default NewsListScreen;
