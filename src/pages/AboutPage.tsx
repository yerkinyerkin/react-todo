import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<h1>Страница информации</h1>
			<p>lorem ipsum dolar sit amet lorem ipsum dolar sit amet lorem ipsum dolar sit amet</p>
			<button className="btn" onClick={() => history.push('/')}>
				Обратно к списку дел
			</button>
		</>
	);
};
