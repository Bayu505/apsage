
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { products, type Product } from "../data/products";

const WHATSAPP_NUMBER = "6282245990309";

export default function Collection() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [selectedSize, setSelectedSize] = useState("M");

  const formatPrice = (price: number) =>
    `Rp${price.toLocaleString("id-ID")}`;

  const handleOrder = (product: Product) => {
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Silakan masukkan nomor WhatsApp APSAGE terlebih dahulu.");
      return;
    }

    if (!product.price) {
      alert("Harga produk belum tersedia.");
      return;
    }

    const message = `
Halo APSAGE, saya ingin memesan:

Produk: ${product.name}
Ukuran: ${selectedSize}
Harga: ${formatPrice(product.price)}

Mohon informasi untuk proses pemesanan selanjutnya.
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || "M");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black transition-colors duration-300 dark:bg-[#111111] dark:text-white">

      <Navbar />


      {/* PRODUCT GRID */}
      <section className="px-6 pb-28 pt-24 md:px-10 md:pt-24 lg:px-16">

        <div className="mb-8 flex items-center justify-between border-y border-black/15 py-4 dark:border-white/15">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
            T-SHIRTS — 2026 COLLECTION
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            {String(products.length).padStart(2, "0")} PRODUCTS
            </p>
        </div>

        {products.length === 0 ? (
          <div className="py-32 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Products coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">

            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group cursor-pointer"
                onClick={() => openProduct(product)}
              >

                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f1f1] dark:bg-[#1c1c1c]">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="bg-white px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-black">
                      {product.status === "available"
                        ? "Available"
                        : product.status === "sold-out"
                        ? "Sold Out"
                        : "Coming Soon"}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>

                </div>

                <div className="flex items-start justify-between gap-4 pt-5">

                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-gray-400">
                      {product.category}
                    </p>

                    <h2 className="text-sm font-semibold uppercase tracking-[0.08em]">
                      {product.name}
                    </h2>

                    <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-xs font-medium">
                    {product.price
                      ? formatPrice(product.price)
                      : "PRICE TBA"}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>
        )}

      </section>

      {/* PRODUCT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm md:p-8"
          >

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto grid w-full max-w-[1100px] overflow-hidden bg-white text-black dark:bg-[#151515] dark:text-white md:grid-cols-2"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product detail"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                <X size={20} />
              </button>

              {/* PRODUCT IMAGES */}
              <div className="grid grid-cols-2 gap-1 bg-[#f1f1f1] dark:bg-[#202020]">
                {selectedProduct.images.map((image, index) => (
                  <div
                    key={image}
                    className={`overflow-hidden ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="flex flex-col justify-center p-7 md:p-12">

                <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-gray-400">
                  {selectedProduct.category}
                </p>

                <h2 className="text-3xl font-black uppercase leading-tight tracking-[-0.06em] md:text-5xl">
                  {selectedProduct.name}
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-gray-500">
                  {selectedProduct.description}
                </p>

                <p className="mt-8 text-lg font-semibold">
                  {selectedProduct.price
                    ? formatPrice(selectedProduct.price)
                    : "PRICE TO BE ANNOUNCED"}
                </p>

                {/* SIZE SELECTION */}
                <div className="mt-10">
                  <div className="mb-4 flex justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                      Select Size
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.1em] text-gray-400">
                      Size Guide
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`border py-3 text-xs transition-colors ${
                          selectedSize === size
                            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                            : "border-black/20 hover:border-black dark:border-white/20 dark:hover:border-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ORDER BUTTON */}
                <button
                  onClick={() => handleOrder(selectedProduct)}
                  disabled={
                    selectedProduct.status !== "available" ||
                    !selectedProduct.price
                  }
                  className="mt-8 flex w-full items-center justify-center gap-3 bg-black px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-black"
                >
                  Order via WhatsApp
                  <ArrowUpRight size={16} />
                </button>

                <p className="mt-4 text-center text-[9px] uppercase tracking-[0.15em] text-gray-400">
                  For inquiries and orders, contact APSAGE.
                </p>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="flex items-center justify-between border-t border-black/10 px-6 py-6 dark:border-white/10 md:px-10 lg:px-16">
        <p className="text-[9px] tracking-[0.18em] text-gray-400">
          © 2026 APSAGE
        </p>

        <p className="text-[9px] tracking-[0.18em] text-gray-400">
          ROOTED LOCALLY. WORN EVERYWHERE.
        </p>
      </footer>

    </main>
  );
}
