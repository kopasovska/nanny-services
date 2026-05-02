export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full min-h-screen flex flex-col p-8">
            {children}
        </main>
    );
}
