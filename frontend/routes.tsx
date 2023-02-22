import { createBrowserRouter } from 'react-router-dom';
import { LoginView } from 'Frontend/views/login/LoginView';
import { MainView } from 'Frontend/views/main/MainView';
import { ProtectedRoute } from 'Frontend/ProtectedRoute.js';
import { SecretView } from 'Frontend/views/secret/SecretView.js';

export const REDIRECT_PATH_KEY = 'redirectPath';

const router = createBrowserRouter([
  { path: '/login', element: <LoginView /> },
  { path: '', element: <ProtectedRoute component={<MainView />} /> },
]);

export default router;
