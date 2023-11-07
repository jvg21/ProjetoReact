import {BrowserRouter ,Routes,Route, Navigate} from 'react-router-dom'
import { HttpError } from './HttpError';
import { RoutesConstants } from './routesConstants';
import { Layout } from '../Components/layout/layout';
import { Company } from '../Components/Pages/company';
import { Contact } from '../Components/Pages/contact';
import { NewProject } from '../Components/Pages/Project/newproject';
import { HomePage } from '../Components/Pages/homePage';
import { Project } from '../Components/Pages/project';

export function RoutesComponent(){
    return(
        
      <BrowserRouter>
      <Routes> 
          
        <Route element={<Layout/>}>
          <Route element={<HomePage/>} path={RoutesConstants.HOME_PATH} />
          <Route element={<Company/>} path={RoutesConstants.COMPANY_PATH} />
          <Route element={<Contact/>} path={RoutesConstants.CONTACT_PATH} />
          <Route element={<Project/>} path={RoutesConstants.PROJECT_PATH} />
          <Route element={<NewProject/>} path={RoutesConstants.NEW_PROJECT_PATH} />
        </Route>

        <Route element={<HttpError errorCode={404} mensage='Não encontrou a página bixo'/>} path={RoutesConstants.ERROR_404} />
        <Route element={<HttpError errorCode={500} mensage='Não encontrou a página bixo'/>} path={RoutesConstants.ERROR_500} />
        <Route element={<Navigate to={RoutesConstants.ERROR_404}/>} path={RoutesConstants.ROUTE_NOT_FOUND} />
        
      </Routes>
    </BrowserRouter>
    );
}