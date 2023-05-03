interface LayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children = null }: LayoutProps) {
  return (
    <main>
      { children }
    </main>
  );
}
