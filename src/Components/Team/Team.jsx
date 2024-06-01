import React from "react";

function Team() {
  return (
    <div >
      <div className="py-20 bg-slate-400">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              Trila Web realestate leadership
            </h2>
            <p className="text-slate-200 lg:w-8/12 lg:mx-auto">
              trila is not only a realEstate web site but also oue family to make our family bigger
              we will try to do some more clen and needed work for our customers 
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div>
                <h4 className="text-2xl text-slate-200">Hentoni Doe</h4>
                <span className="block text-sm text-slate-200">CEO-Founder</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                alt="man"
                loading="lazy"
                width={1000}
                height={667}
              />
              <div>
                <h4 className="text-2xl text-slate-200">Jonathan Doe</h4>
                <span className="block text-sm text-slate-200">
                  Chief Technical Officer
                </span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                alt="woman"
                loading="lazy"
                width={1000}
                height={667}
              />
              <div>
                <h4 className="text-2xl text-slate-200">Anabelle Doe</h4>
                <span className="block text-sm text-slate-200">
                  Chief Operations Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
