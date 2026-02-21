import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Shirt, Footprints, Watch, Gift, Tag } from "lucide-react";

const allProducts = [
  { id: 1, name: "Premium Denim Jacket", brand: "Levi's", category: "clothing", originalPrice: 4999, salePrice: 1999, discount: 60, tag: "Bestseller" },
  { id: 2, name: "Running Shoes Pro", brand: "Nike", category: "footwear", originalPrice: 7999, salePrice: 3199, discount: 60, tag: "Hot" },
  { id: 3, name: "Classic Leather Watch", brand: "Fossil", category: "accessories", originalPrice: 8999, salePrice: 3599, discount: 60, tag: "New" },
  { id: 4, name: "Cotton Polo T-Shirt", brand: "Tommy Hilfiger", category: "clothing", originalPrice: 2999, salePrice: 1199, discount: 60, tag: null },
  { id: 5, name: "Casual Sneakers", brand: "Adidas", category: "footwear", originalPrice: 5999, salePrice: 2399, discount: 60, tag: "Trending" },
  { id: 6, name: "Aviator Sunglasses", brand: "Ray-Ban", category: "accessories", originalPrice: 6999, salePrice: 2799, discount: 60, tag: null },
  { id: 7, name: "Slim Fit Chinos", brand: "Allen Solly", category: "clothing", originalPrice: 2499, salePrice: 999, discount: 60, tag: "Sale" },
  { id: 8, name: "Leather Belt Premium", brand: "Woodland", category: "accessories", originalPrice: 1999, salePrice: 799, discount: 60, tag: null },
  { id: 9, name: "Winter Hoodie", brand: "Puma", category: "seasonal", originalPrice: 3999, salePrice: 1599, discount: 60, tag: "Seasonal" },
  { id: 10, name: "Formal Shoes", brand: "Clarks", category: "footwear", originalPrice: 6499, salePrice: 2599, discount: 60, tag: null },
  { id: 11, name: "Track Pants", brand: "Reebok", category: "clothing", originalPrice: 1999, salePrice: 799, discount: 60, tag: null },
  { id: 12, name: "Crossbody Bag", brand: "Baggit", category: "accessories", originalPrice: 2999, salePrice: 1199, discount: 60, tag: "New" },
];

const categories = [
  { key: "all", label: "All", icon: Filter },
  { key: "clothing", label: "Clothing", icon: Shirt },
  { key: "footwear", label: "Footwear", icon: Footprints },
  { key: "accessories", label: "Accessories", icon: Watch },
  { key: "seasonal", label: "Seasonal", icon: Gift },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProducts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="navy-gradient py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Our <span className="text-gradient-gold">Products</span>
            </h1>
            <p className="text-secondary/60 max-w-lg mx-auto">
              Browse premium brands at prices you won't believe. All products are 100% authentic.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.key
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Product image placeholder */}
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shirt className="w-16 h-16 text-muted-foreground/20" />
                  </div>
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {product.tag}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-destructive text-destructive-foreground text-xs font-bold">
                    -{product.discount}%
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-1">
                    {product.brand}
                  </p>
                  <h3 className="font-semibold text-foreground text-sm mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-bold text-foreground">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <Tag className="w-3 h-3 text-accent" />
                    <span className="text-accent text-xs font-medium">
                      Save ₹{(product.originalPrice - product.salePrice).toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found. Try a different search or category.</p>
            </div>
          )}

          {/* Visit Store CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-10 glass-card"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Visit our store to explore 1000+ products across 50+ premium brands.
            </p>
            <a href="tel:01725057777" className="btn-gold">
              Call & Visit Store
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;
