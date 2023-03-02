import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Catalog from '../../components/UI/Catalog/Catalog';
import { products } from '../../data/products.data';

const RollsPage: FC = () => {
	return (
		<Layout title='dulces' description='dulces'>
			<Catalog
				products={products.filter((product) => product.category === 'dulces')}
			></Catalog>
		</Layout>
	);
};

export default RollsPage;
