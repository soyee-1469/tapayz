export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          src="/images/contact-hero-background.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="relative min-w-0 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white/85 p-6 shadow-xl backdrop-blur sm:p-10">
            <p className="text-center text-sm font-medium text-zinc-600">
              Contact
            </p>
            <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight text-black md:text-5xl">
              Get In Touch
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-6 text-zinc-600">
              For all inquiries, please contact Tapayz Corp using the form below.
            </p>

            <form className="mt-10 grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-700">
                  Name
                </span>
                <input
                  className="h-12 border-b-2 border-black bg-transparent px-1 outline-none"
                  name="name"
                  autoComplete="name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-700">
                  Email Address
                </span>
                <input
                  className="h-12 border-b-2 border-black bg-transparent px-1 outline-none"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-700">
                  Message
                </span>
                <textarea
                  className="min-h-[140px] border-b-2 border-black bg-transparent px-1 py-2 outline-none"
                  name="message"
                />
              </label>

              <button
                type="button"
                className="mt-2 inline-flex h-12 items-center justify-center bg-black px-6 text-sm font-semibold text-white hover:bg-black/90"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

