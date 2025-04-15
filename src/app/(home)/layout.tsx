import Header from "@/components/common/header";

type HomeLayoutProps = {
	children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
