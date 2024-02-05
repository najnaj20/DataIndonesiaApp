import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

interface Kabupaten {
  id: string;
  nama: string;
  provinsi_id: string;
}

const KabupatenList = ({ route }: any) => {
  const [kabupaten, setKabupaten] = useState<Kabupaten[]>([]);
  const { provinsiId } = route.params;

  useEffect(() => {
    fetchData();
  }, [provinsiId]);

  const fetchData = async () => {
    const response = await axios.get<Kabupaten[]>(`https://ibnux.github.io/data-indonesia/kabupaten/${provinsiId}.json`);
    setKabupaten(response.data);
  };

  const renderKabupaten = ({ item }: { item: Kabupaten }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{item.nama}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={kabupaten} renderItem={renderKabupaten} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default KabupatenList;
