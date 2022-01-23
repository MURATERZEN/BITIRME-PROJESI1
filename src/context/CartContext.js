import { createContext, useContext, useState } from 'react';
import discountValues from 'utils/discountValues';

//CART CONTEXT
//Sepet urunlerini saglayacak, ekleme ve cikarma yapacak
//Uygulama icerisinde sepet ve siparis gibi sayfalarda sepet verisine ulasilabilir.

const CartContext = createContext('');

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemAmount, setCartItemAmount] = useState(0);
  const [cartDiscountAmount, setCartDiscountAmount] = useState({
    entered: false,
    amount: '0',
  });

  //Sepeti ac kapat (gorsel olarak)
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  //Sepete ekle
  const addToCart = (product) => {
    //guncellenecek sepet listesinin kopyasi
    const cartCopy = [...cart];

    //Urun sepette zaten bulunuyor mu kontrol
    //Urun varsa listedeki indexi yoksa -1 donecek, varsa sadece urun sayisini degistirecegiz
    const itemInCartIndex = cart.findIndex((item) => item.id === product.id);

    //Urun olmasi durumunda sadece sayisini ekle
    if (itemInCartIndex >= 0) {
      cartCopy[itemInCartIndex].amount += product.amount;
    }
    //urun yoksa yeni bir urun eklemis olacagiz
    else {
      cartCopy.push(product);
    }

    //guncellenmis sepet verisini state e yazma
    setCart(cartCopy);
    getCartTotal(cartCopy);
    getCartItemsAmount(cartCopy);
  };

  //Sepetten urun silme
  const removeFromCart = (productId) => {
    //Silecegimiz urunun id bilgisini alarak sepeti filter isleminden geciriyoruz
    //Sepetten sadece silmek istedigimiz urun idsine esit olmayan idlere sahip olan urunleri getiriyoruz
    const cartFiltered = cart.filter((item) => item.id !== productId);

    //Getirilen filtrelenmis urunleri sepet statine yaziyoruz. Silmek istedigimiz urunu listeden kaldirdik
    setCart(cartFiltered);
    setCartDiscountAmount({ entered: false, amount: '0' });
    getCartTotal(cartFiltered);
    getCartItemsAmount(cartFiltered);
  };

  //Sepet icerisindeki urunlerin toplam fiyatini hesapla
  const getCartTotal = (newCart) => {
    setCartTotal(
      newCart.reduce((total, item) => total + item.price * item.amount, 0)
    );
  };

  //Sepet icerisindeki urunlerin toplam sayisini hesapla
  const getCartItemsAmount = (newCart) => {
    setCartItemAmount(newCart.reduce((total, item) => total + item.amount, 0));
  };

  //Siparis sirasinda indirim koduna gore toplam fiyatin tekrarndan hesaplanmasi.
  //indirim kodu 1 kez kullanilabilir
  //Verilen indirim sepetin degismesiyle silinir
  const calculateDiscount = (discountCode) => {
    if (discountValues[discountCode] && !cartDiscountAmount.entered) {
      const { condition, action, amount } = discountValues[discountCode];
      if (condition(cartTotal) && !cartDiscountAmount.entered) {
        setCartTotal(action(cartTotal).toFixed(2));
        setCartDiscountAmount({
          ...cartDiscountAmount,
          entered: true,
          amount: amount,
        });
        return true;
      }
    }
    return false;
  };

  //Sepeti tamamen bosalt.
  //Indirim ve diger veriler sifirlanir
  const emptyCart = () => {
    const cart = [];
    setCart(cart);
    getCartTotal(cart);
    getCartItemsAmount(cart);
    setCartDiscountAmount({
      entered: false,
      amount: '0',
    });
  };

  const value = {
    isCartOpen,
    openCart,
    closeCart,
    cart,
    addToCart,
    removeFromCart,
    toggleCart,
    cartTotal,
    cartItemAmount,
    calculateDiscount,
    cartDiscountAmount,
    emptyCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { useCart, CartProvider };
