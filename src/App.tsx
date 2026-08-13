import React, { useState } from "react";
import { PageId, ServiceId, GalleryItem, ContactFormData } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function MainLayout() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [activeService, setActiveService] = useState<ServiceId>("all");
  const [modalItem, setModalItem] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setActiveService(serviceId);
    setCurrentPage("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setModalItem(item);
  };

  const handleFormSubmit = (_data: ContactFormData) => {
    setToastMessage(t.contact.toastSuccess);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-[#2A211A]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === "services" && (
          <ServicesPage
            activeService={activeService}
            onSelectService={setActiveService}
          />
        )}

        {currentPage === "gallery" && (
          <GalleryPage onOpenLightbox={handleOpenLightbox} />
        )}

        {currentPage === "about" && <AboutPage />}

        {currentPage === "contact" && (
          <ContactPage onSubmitMessage={handleFormSubmit} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <Modal
        isOpen={!!modalItem}
        title={modalItem?.title || ""}
        subtitle={modalItem?.subtitle || ""}
        onClose={() => setModalItem(null)}
      />

      <Toast message={toastMessage} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
