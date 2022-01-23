import { CartProvider } from 'context/CartContext';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { RouterConfig } from './navigation/RouterConfig';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <RouterConfig />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
