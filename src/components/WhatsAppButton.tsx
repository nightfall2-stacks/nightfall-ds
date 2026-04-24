"use client";

export function WhatsAppButton() {
  const phoneNumber = "51997470825"; // Número de WhatsApp sin espacios ni caracteres especiales
  const message = "Hola, me gustaría conocer más sobre los servicios de NIGHTFALL DS";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.927 1.316c-1.524.793-2.857 1.99-3.708 3.425C2.957 10.79 2.55 12.758 2.88 14.665c.33 1.907 1.28 3.623 2.658 4.945 1.378 1.322 3.16 2.204 5.124 2.475 1.964.27 3.982-.083 5.68-1.003 1.698-.92 3.039-2.34 3.744-4.043.706-1.702 1.05-3.585.87-5.433-.18-1.848-1.002-3.542-2.333-4.809-1.33-1.266-3.129-2.021-4.998-2.133-.39-.027-.787-.027-1.186.008m6.23 7.282c-.178.523-.585 1.055-1.105 1.42-.52.365-1.161.566-1.814.578h-.004c-.652 0-1.288-.21-1.827-.578-.538-.367-.933-.897-1.111-1.42" />
      </svg>
    </a>
  );
}
