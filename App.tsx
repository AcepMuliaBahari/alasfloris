import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Cart from './components/Cart';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPanelPage from './pages/AdminPanelPage';
import { Plant, CartItem, Service, GalleryImage } from './types';
import { PLANTS_DATA, SERVICES_DATA, GALLERY_IMAGES, ADMIN_PASSWORD } from './constants';

export type Page = 'home' | 'about' | 'shop' | 'services' | 'gallery' | 'contact' | 'admin';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Admin and dynamic data state
  const [isAdmin, setIsAdmin] = useState(false);
  const [plantCollection, setPlantCollection] = useState<Plant[]>(() => {
    const savedPlants = localStorage.getItem('plantCollection');
    return savedPlants ? JSON.parse(savedPlants) : PLANTS_DATA;
  });
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    const savedGallery = localStorage.getItem('galleryImages');
    return savedGallery ? JSON.parse(savedGallery) : GALLERY_IMAGES;
  });
  
  // Persist dynamic data to localStorage
  useEffect(() => {
    localStorage.setItem('plantCollection', JSON.stringify(plantCollection));
  }, [plantCollection]);

  useEffect(() => {
    localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
  }, [galleryImages]);

  // Theme effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Cart handlers
  const handleAddToCart = (plant: Plant) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === plant.id);
      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...plant, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (plantId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== plantId));
  };
  
  const handleUpdateQuantity = (plantId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(plantId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === plantId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Admin handlers
  const handleLogin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
  };
  
  // Plant CRUD
  const handleAddPlant = (plant: Omit<Plant, 'id'>) => {
    setPlantCollection(prev => [...prev, { ...plant, id: Date.now() }]);
  };

  const handleDeletePlant = (plantId: number) => {
    setPlantCollection(prev => prev.filter(p => p.id !== plantId));
  };
  
  // Gallery CRUD
  const handleAddImage = (image: Omit<GalleryImage, 'id'>) => {
     setGalleryImages(prev => [...prev, { ...image, id: Date.now() }]);
  };

  const handleDeleteImage = (imageId: number) => {
    setGalleryImages(prev => prev.filter(img => img.id !== imageId));
  };
  
  const renderPage = () => {
    if (currentPage === 'admin') {
      return isAdmin 
        ? <AdminPanelPage 
            onLogout={handleLogout} 
            plants={plantCollection}
            gallery={galleryImages}
            onAddPlant={handleAddPlant}
            onDeletePlant={handleDeletePlant}
            onAddImage={handleAddImage}
            onDeleteImage={handleDeleteImage}
          /> 
        : <AdminLoginPage onLogin={handleLogin} />;
    }
    
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} plants={plantCollection} services={SERVICES_DATA} onAddToCart={handleAddToCart} />;
      case 'about':
        return <AboutPage />;
      case 'shop':
        return <ShopPage plants={plantCollection} onAddToCart={handleAddToCart} />;
      case 'services':
        return <ServicesPage services={SERVICES_DATA} galleryImages={galleryImages} />;
      case 'gallery':
        return <GalleryPage galleryImages={galleryImages} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} plants={plantCollection} services={SERVICES_DATA} onAddToCart={handleAddToCart} />;
    }
  };

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const mainContent = renderPage();
  const isAdminPage = currentPage === 'admin' && !isAdmin;

  return (
    <div className="bg-brand-bg-light dark:bg-brand-bg-dark text-brand-text-light dark:text-brand-text-dark font-sans">
      {!isAdminPage && (
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          theme={theme}
          setTheme={setTheme}
        />
      )}
      <main className={!isAdminPage && currentPage !== 'home' ? 'pt-20' : ''}>
        {mainContent}
      </main>
      {!isAdminPage && <Footer setCurrentPage={setCurrentPage}/>}
      {!isAdminPage && <FloatingWhatsApp />}
      {!isAdminPage && (
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
    </div>
  );
};

export default App;