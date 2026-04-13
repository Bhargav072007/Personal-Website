export default function Footer() {
  return (
    <footer className="heritage-band py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-semibold text-foreground">
              b<span className="text-muted-foreground">M</span>
            </span>
            <span className="text-sm text-muted-foreground">
              Bhargav Malluvajhula
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Bhargav Malluvajhula
          </p>
        </div>
      </div>
    </footer>
  );
}
