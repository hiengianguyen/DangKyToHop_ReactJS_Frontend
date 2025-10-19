function ParrtenBg({ children }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #c7d2fe, transparent),
        radial-gradient(circle 600px at 100% 200px, #c7d2fe, transparent)
      `
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ParrtenBg;
