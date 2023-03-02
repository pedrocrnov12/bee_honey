import { Layout } from '../layout/Layout';
import { MainPage } from '../layout/Home/incio';

export default function Home(): JSX.Element {
	return (
		<Layout
			title='tienda de miel'
			description='deliciosa miel.'
		>
			<MainPage />
		</Layout>
	);
}
