import Link from 'next/link';
import { FC } from 'react';

const NotFoundPage: FC = (): JSX.Element => {
	return (
		<div className='not-found-page'>
			<div>
				<h1>404</h1>
				<h3>Pagina No Encontrada</h3>
				<Link href='/'>Voler Al Inicio</Link>
			</div>
		</div>
	);
};
export default NotFoundPage;
