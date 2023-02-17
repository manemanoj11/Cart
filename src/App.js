import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: "https://cdn-icons-png.flaticon.com/512/2976/2976655.png",
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: "https://cdn-icons-png.flaticon.com/512/2097/2097276.png",
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 1,
          img: "https://cdn-icons-png.flaticon.com/512/9663/9663572.png",
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteQuantity = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }



  // onIncreaseQuantity={this.handleIncreaseQuantity}
  // decreaseQuantity={this.}
  // deleteQuantity={this.}

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartToatl=()=>{
    const{products}=this.state

    let cartTotal=0;

    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price
    })
 return cartTotal; 
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.handleDecreaseQuantity}
          deleteQuantity={this.handleDeleteQuantity}
        />
        <div style={{ padding:10 ,frontSize:20, display:'flex',justifyContent:'center'}}>TOTOAL:{this.getCartToatl()}</div>
      </div>
    );
  }
}

export default App;
