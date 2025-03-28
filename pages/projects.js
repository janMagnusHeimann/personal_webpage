import Layout from '../components/Layout';
import RocketAnimation from '../components/RocketAnimation';

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Projects that made me love AI
        </h1>

        {/* Rocket Optimizer Project Section */}
        <section className="bg-transparent p-8 mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Rocket Optimizer Project
          </h2>
          
          {/* Project Overview */}
          <div className="text-lg text-gray-800 dark:text-gray-200 mb-8">
            <p className="mb-6">
              The Rocket Optimizer Project is an ambitious, forward-thinking endeavor that redefines rocket design through a fusion of advanced optimization algorithms, innovative data architectures, and state-of-the-art machine learning. This initiative tackles one of aerospace engineering’s toughest challenges: achieving optimal flight efficiency while maintaining structural integrity and minimizing cost per payload. By seamlessly integrating trajectory optimization software with custom-built analytical tools, the project delivers a scalable framework that pushes the boundaries of space exploration technology.
            </p>
            <p className="mb-6">
              At its core, this project leverages the **Nelder-Mead algorithm** for nonlinear optimization, a **graph database** for relational data storage, and **Graph Neural Networks (GNNs)** for predictive modeling. These choices aren’t just smart—they’re transformative, enabling unprecedented precision, adaptability, and insight into rocket design dynamics. Below, we dive into why these technologies make this project a game-changer and a prime candidate for driving innovation in Silicon Valley’s competitive tech landscape.
            </p>
          </div>

          {/* Why Nelder-Mead Algorithm? */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Precision Optimization with Nelder-Mead
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              The Nelder-Mead algorithm, a simplex-based method for nonlinear optimization, is the backbone of this project’s design refinement process. Unlike gradient-based methods that require differentiable functions, Nelder-Mead thrives in complex, multidimensional spaces where derivatives are unavailable or impractical to compute—exactly the kind of chaotic environment rocket design presents. Its ability to iteratively adjust parameters like thrust profiles, material distributions, and aerodynamic shapes ensures that every configuration converges toward an optimal balance of performance and cost.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Why is this a brilliant choice? It’s computationally efficient, requiring no gradient calculations, which accelerates iteration cycles—a critical advantage when exploring thousands of design permutations. For Silicon Valley recruiters, this signals a pragmatic yet powerful approach to solving real-world problems, blending mathematical elegance with practical scalability. The result? Rocket designs that hit peak efficiency without the overhead of bloated computational resources.
            </p>
          </div>

          {/* Simulation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Live Optimization Simulation
            </h3>
            <RocketAnimation />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Witness the Nelder-Mead algorithm in action as it refines rocket designs in real time, guided by GNN predictions—proof of concept meets visual impact.
            </p>
          </div>

          {/* Why Graph Databases? */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Graph Databases: A Smarter Way to Store Complexity
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Storing rocket configurations in a graph database isn’t just innovative—it’s a strategic leap forward. Rocket designs are inherently relational: components like engines, fuel tanks, and payloads don’t exist in isolation; their interactions define the system’s behavior. Traditional tabular databases struggle to capture these intricate dependencies efficiently, often flattening them into rigid structures that lose critical context. A graph database, by contrast, models these relationships as nodes and edges, preserving the natural complexity of the design space.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              This approach is a masterstroke for several reasons. First, it enables lightning-fast queries across interconnected components—think real-time analysis of how a change in engine thrust impacts structural stress. Second, it scales effortlessly as designs grow more complex, a must-have for next-gen aerospace applications. For Silicon Valley, where data-driven decision-making reigns supreme, this demonstrates a sophisticated understanding of modern database architectures and their role in unlocking actionable insights from chaotic datasets.
            </p>
          </div>

          {/* Why Graph Neural Networks? */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              GNNs: Unleashing Predictive Power
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Enter Graph Neural Networks (GNNs), the project’s crown jewel. GNNs are tailor-made for graph-structured data, making them the perfect companion to the graph database. By learning the patterns and relationships embedded in rocket configurations, GNNs predict optimal design parameters with uncanny accuracy. They don’t just optimize—they explore, uncovering novel configurations that traditional methods might miss in the vast, high-dimensional design space.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Why GNNs over conventional machine learning models? Their ability to process relational data gives them an edge in understanding how components interact—a fuel tank’s weight affecting thrust, for instance—rather than treating features in isolation. This relational awareness translates to smarter predictions and more efficient designs. For Silicon Valley recruiters, GNNs scream cutting-edge AI, signaling expertise in a technology that’s reshaping industries from biotech to logistics. It’s a bold, future-proof choice that positions this project at the forefront of machine learning innovation.
            </p>
          </div>

          {/* Impact Statement */}
          <div className="mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 italic">
              The Rocket Optimizer Project isn’t just a technical achievement—it’s a vision for the future of aerospace. By marrying optimization, graph-based data storage, and advanced AI, it delivers a scalable, efficient, and innovative solution that reduces costs and accelerates the path to space. This is the kind of interdisciplinary brilliance that Silicon Valley thrives on, with applications that extend far beyond rockets into any domain demanding precision and performance.
            </p>
          </div>

          

          {/* Flowchart */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Optimization Workflow
            </h3>
            <img
              src="/images/rocket_optimizer_flowchart.png"
              alt="Rocket Optimizer Flowchart"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              This flowchart maps the journey from raw configurations to optimized designs, spotlighting the synergy of Nelder-Mead’s iterative precision and GNNs’ predictive intelligence.
            </p>
          </div>
        </section>

        {/* Placeholder for Future Projects */}
        <section className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">
            More groundbreaking projects coming soon—stay tuned for innovations that redefine what’s possible.
          </p>
        </section>
      </div>
    </Layout>
  );
}