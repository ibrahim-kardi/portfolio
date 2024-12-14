export default function SkillsSection() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <span className="px-4 py-2 bg-purple-200 rounded-lg">PHP</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">
            Python(machine learning)
          </span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">MySQL</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">Next.js</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">React</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">WordPress</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">
            WooCommerce
          </span>

          <span className="px-4 py-2 bg-purple-200 rounded-lg">Elementor</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">Gutenberg</span>
          <span className="px-4 py-2 bg-purple-200 rounded-lg">Shopify</span>
        </div>
      </div>
    </section>
  );
}
