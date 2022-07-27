import React from 'react'
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import { GlobalStyles } from './style/Global';
import { AppModule } from './style/modules/app.style';

const App = () => {
  return (
		<>
			<GlobalStyles />
			<div className="container">
				<PageTitle>TODO LIST</PageTitle>
				<AppModule>
					<AppHeader />
				</AppModule>
			</div>
		</>
  );
}

export default App