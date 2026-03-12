export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Rupak</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">Factory Image 2</span>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md text-white flex flex-col justify-center items-center h-32">
                <h3 className="text-3xl font-bold text-accent">10+</h3>
                <p className="text-sm font-medium text-center mt-1">Years of Manufacturing Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-full mb-6 text-sm uppercase tracking-wider">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              Leading Pipe Manufacturing in <span className="text-primary">Butwal-08, Rupandehi</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Sakura Pipe Udhyog Pvt. Ltd. is a premier manufacturing company dedicated to producing high-quality pipes for residential, commercial, and industrial applications. Based locally in Butwal, we take pride in powering the infrastructure of Nepal.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Commitment to Quality</h4>
                  <p className="text-gray-600 text-sm mt-1">We use premium raw materials and rigorous testing to ensure every pipe meets the highest industry standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Local Experience</h4>
                  <p className="text-gray-600 text-sm mt-1">Deep understanding of local needs, soil constraints, and plumbing standards makes our pipes the preferred choice.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
