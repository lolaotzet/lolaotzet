import React, {Component} from 'react';
import { View, Text, Pressable, StyleSheet,FlatList } from 'react-native';
import Card from '../components/Card';

export default class ProductsAll extends Component{
    constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: { rate: 4.1, count: 259 },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions such as working, hiking, camping, or traveling.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
          rating: { rate: 4.7, count: 500 },
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
          rating: { rate: 2.1, count: 430 },
        },
        {
          id: 5,
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
          rating: { rate: 4.6, count: 400 },
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
          rating: { rate: 3.9, count: 70 },
        },
        {
          id: 7,
          title: "White Gold Plated Princess",
          price: 9.99,
          description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
          rating: { rate: 3, count: 400 },
        },
        {
          id: 8,
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 10.99,
          description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
          rating: { rate: 1.9, count: 100 },
        },
        {
          id: 9,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
          price: 64,
          description:
            "USB 3.0 and USB 2.0 Compatibility. Fast data transfers. Improve PC performance.",
          category: "electronics",
          image:
            "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
          rating: { rate: 3.3, count: 203 },
        },
        {
          id: 10,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description:
            "Easy upgrade for faster boot up, shutdown, application load and response.",
          category: "electronics",
          image:
            "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
          rating: { rate: 2.9, count: 470 },
        },
      ],
    };
  }
    render(){
        return(
             <View style={styles.container}>
                <Text style={styles.subtitle}>Lista de Productos</Text>
               <FlatList
           style={styles.flatList}
          data={this.state.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={item.price}
              description={item.description}
              categoria={item.category}
              image={item.image}
            />
          )}
        />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  flatList: {
    flex: 1, 
  },
});