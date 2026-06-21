function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
    </div>
  );
}

export default Layout;
