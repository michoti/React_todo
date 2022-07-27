import React from 'react'
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';

const App = () => {
  return (    
    <div className="container">
        <PageTitle>TODO LIST</PageTitle>  
        <div className={style.app__wrapper}>
          <AppHeader />
        </div>    
    </div>
    
  )
}

export default App