import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#3498db',
    fontSize: 30,
  },
  logo: {
    width: 150, 
    height: 150, 
    marginTop: 20,
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: '#000', 
  },
  btn: {
    // Aquí irían los estilos de btn si los tienes
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    paddingLeft: 10,
    fontSize: 16,
  },
  },
);