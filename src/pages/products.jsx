import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useState } from "react";
import { products } from "@/data/products";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="bg-background px-4 py-16 sm:px-6  md:py-10"
    >
      <div className="mx-auto max-w-7xl rounded-4xl bg-white p-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-10 text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("products.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {t("products.description")}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: product.id * 0.08,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(21,87,166,0.16)]"
            >
              <div className="relative h-52 overflow-hidden bg-surface sm:h-56">
                <img
                  src={product.image}
                  alt={t(product.titleKey)}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="mt-2 text-lg font-semibold leading-6 text-foreground transition-colors duration-300 group-hover:text-primary">
                  {t(product.titleKey)}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground">
                  {t(product.descriptionKey)}
                </p>

                <Button
                  variant="ghost"
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 h-9 cursor-pointer rounded-full bg-primary/5 px-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  {t("products.details")}

                  <ArrowRight
                    size={15}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 z-10 h-9 w-9 cursor-pointer rounded-full bg-white/90 text-foreground shadow-md transition-all duration-300 hover:scale-105 hover:bg-white"
                aria-label={t("products.close")}
              >
                <X size={18} />
              </Button>

              <div className="grid md:grid-cols-2">
                <div className="flex min-h-64 items-center justify-center bg-surface p-6">
                  <img
                    src={selectedProduct.image}
                    alt={t(selectedProduct.titleKey)}
                    className="max-h-72 w-full object-contain"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="mt-3 text-2xl font-bold text-foreground">
                    {t(selectedProduct.titleKey)}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {t(selectedProduct.descriptionKey)}
                  </p>

                  <Button className="mt-6 cursor-pointer bg-primary transition-all duration-300 hover:bg-primary-hover hover:shadow-md">
                    {t("products.contact")}

                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;