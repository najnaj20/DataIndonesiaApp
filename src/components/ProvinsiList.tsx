import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Provinsi {
  id: string;
  nama: string;
  logo: string;
}

const logos: { [key: string]: string } = {
  '1': 'logo_1.png',
  '2': 'logo_2.png',
  '3': 'logo_3.png',
  // ...
};

const ProvinsiList = ({ navigation }: any) => {
  const [provinsi, setProvinsi] = useState<Provinsi[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get<Provinsi[]>('https://ibnux.github.io/data-indonesia/provinsi.json');
    setProvinsi(response.data);
  };

  const onProvinsiPress = (id: string) => {
    navigation.navigate('KabupatenList', { provinsiId: id });
  };

  const renderProvinsi = ({ item }: { item: Provinsi }) => (
    <TouchableOpacity onPress={() => onProvinsiPress(item.id)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={require(`./logo/${logos[item.id]}`)} style={{ width: 50, height: 50 }} />
        <Text style={{ fontSize: 20, marginLeft: 10 }}>{item.nama}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={provinsi} renderItem={renderProvinsi} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default ProvinsiList;
