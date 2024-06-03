
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';

const AnimalForm = () => {
  const [tipo, setTipo] = useState('');
  const [lote, setLote] = useState('');
  const [numeroCaravana, setNumeroCaravana] = useState('');
  const [peso, setPeso] = useState('');
  const [edad, setEdad] = useState('');
  const [recienNacido, setRecienNacido] = useState(false);
  const [preñada, setPreñada] = useState(false);

  const handleSave = () => {
    // Logica para guardar los datos
    console.log({
      tipo, lote, numeroCaravana, peso, edad, recienNacido, preñada
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ingresar Animal</Text>

      <RNPickerSelect
        onValueChange={(value) => setTipo(value)}
        items={[
          { label: 'Vaca', value: 'Vaca' },
          { label: 'Toro', value: 'Toro' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: "Seleccione tipo", value: ' ' }}
      />

<View style={{ marginBottom: 20 }} />

      <RNPickerSelect
        onValueChange={(value) => setLote(value)}
        items={[
          { label: 'Lote 1', value: 'lote1' },
          { label: 'Lote 2', value: 'lote2' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: "Lote", value: ' ' }}
      />

<View style={{ marginBottom: 20 }} />

      <TextInput
        style={styles.input}
        placeholder="Número de caravana"
        value={numeroCaravana}
        onChangeText={setNumeroCaravana}
      />

      <Text style={styles.subTitle}>Historial Médico</Text>
      

      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
      />

<View style={{ marginBottom: 20 }} />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
      />

<View style={{ marginBottom: 20 }} />      

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={recienNacido}
          onValueChange={setRecienNacido}
        />
        <Text style={styles.label}>Recién nacido</Text>
      </View>

      <View style={{ marginBottom: 20 }} />
      
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preñada}
          onValueChange={setPreñada}
        />
        <Text style={styles.label}>Preñada</Text>
      </View>

      <TouchableOpacity style={styles.grayButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Agregar Tratamiento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.greenButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 8,
  },
  greenButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 20,
    width: 200,
  },
  grayButton: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 8,
  },
  inputAndroid: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AnimalForm;